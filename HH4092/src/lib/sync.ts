// Same-origin state sync between the audience window and the presenter view.
// BroadcastChannel when available; otherwise localStorage 'storage' events,
// which fire in other same-origin windows. A window never hears its own posts.

export type TimerState = {running: boolean; startedAt: number; elapsedBefore: number; duration: number};
export type SyncMessage =
  | {t: 'nav'; slide: number; step: number}
  | {t: 'timer'; timer: TimerState}
  | {t: 'ui'; reader?: boolean; figure?: boolean; blackout?: boolean}
  | {t: 'hello'}
  | {t: 'state'; slide: number; step: number; timer: TimerState; blackout: boolean};

const NAME = 'atomic-reef-sync-v1';
const KEY = NAME + ':msg';
type Listener = (m: SyncMessage) => void;

export function createSync(onMessage: Listener) {
  const id = Math.random().toString(36).slice(2);
  let channel: BroadcastChannel | null = null;
  try { channel = typeof BroadcastChannel === 'function' ? new BroadcastChannel(NAME) : null; } catch { channel = null; }
  const handle = (data: unknown) => {
    const env = data as {from?: string; m?: SyncMessage} | null;
    if (env && env.from !== id && env.m) onMessage(env.m);
  };
  const onChannel = (e: MessageEvent) => handle(e.data);
  const onStorage = (e: StorageEvent) => {
    if (e.key !== KEY || !e.newValue) return;
    try { handle(JSON.parse(e.newValue)); } catch { /* ignore malformed */ }
  };
  channel?.addEventListener('message', onChannel);
  window.addEventListener('storage', onStorage);
  return {
    mode: channel ? 'BroadcastChannel' : 'localStorage',
    post(m: SyncMessage) {
      const env = {from: id, m, n: Math.random()};
      if (channel) channel.postMessage(env);
      else try { localStorage.setItem(KEY, JSON.stringify(env)); } catch { /* storage blocked */ }
    },
    close() {
      channel?.removeEventListener('message', onChannel);
      channel?.close();
      window.removeEventListener('storage', onStorage);
    }
  };
}

export const freshTimer = (minutes: number): TimerState => ({running: false, startedAt: 0, elapsedBefore: 0, duration: minutes * 60_000});
export const timerElapsed = (t: TimerState, now = Date.now()) => t.elapsedBefore + (t.running ? now - t.startedAt : 0);
export const timerRemaining = (t: TimerState, now = Date.now()) => t.duration - timerElapsed(t, now);
export function fmtClock(ms: number) {
  const neg = ms < 0, s = Math.floor(Math.abs(ms) / 1000);
  return `${neg ? '−' : ''}${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

// Persist the last-known shared state so a reloaded window can resume.
const STATE_KEY = 'atomic-reef-state-v1';
export function saveShared(s: {slide: number; step: number; timer: TimerState}) {
  try { localStorage.setItem(STATE_KEY, JSON.stringify(s)); } catch { /* ignore */ }
}
export function loadShared(): {slide: number; step: number; timer: TimerState} | null {
  try { const v = localStorage.getItem(STATE_KEY); return v ? JSON.parse(v) : null; } catch { return null; }
}
