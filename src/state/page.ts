import { writable, type Writable } from 'svelte/store';

export const PathHome: string     = '/';
export const PathAbout: string  = '/about';
export const PathServices: string = '/services';
export const PathEvents: string    = '/events';
export const PathContact: string   = '/contact';

export type PathNames = (
  '/'
  | '/about'
  | '/events'
  | '/services'
  | '/contact'
) | string;

export const PathName: Writable<PathNames|string> = writable(PathHome);