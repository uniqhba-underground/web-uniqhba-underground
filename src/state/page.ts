import { writable, type Writable } from 'svelte/store';

export const PathHome: string     = '/';
export const PathTentang: string  = '/tentang';
export const PathEvent: string    = '/event';
export const PathKontak: string   = '/kontak';

export type PathNames = (
  '/'
  | '/tentang'
  | '/event'
  | '/kontak'
) | string;

export const PathName: Writable<PathNames|string> = writable(PathHome);