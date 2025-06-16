
import { OurEvents } from '@/data/events';
import type { PageServerLoad } from './$types';
import type { ServerLoadEvent } from '@sveltejs/kit';

export const load: PageServerLoad = async (event: ServerLoadEvent) => {
  let isEventExists: boolean = false;
  for (const ev of OurEvents) {
    if (ev.slug === event.params.slug) {
      isEventExists = true;
      break;
    }
  }

  if (!isEventExists) {
    return {
      isExist: false
    }
  }

  return {
    isExist: true
  }
}