
import { EventsParticipants, OurEvents } from '@/data/events/events';
import type { PageServerLoad } from './$types';
import type { ServerLoadEvent } from '@sveltejs/kit';
import type { OurEvent, ParticipantCertificate } from '@/data/events/type';
import { RiMapMapPinLine } from 'svelte-icons-pack/ri';

export const load: PageServerLoad = async (event: ServerLoadEvent) => {
  let isEventExists: boolean = false;
  let ourEvent: OurEvent = {
    name: '',
    description: '',
    date: '',
    time: '',
    location: {
      name: '',
      icon: RiMapMapPinLine
    },
    slug: '',
    image_url: '',
    category: 'meetup',
  }
  let ourEventParticipants: ParticipantCertificate[] = []
  for (const ev of OurEvents) {
    if (ev.slug === event.params.slug) {
      isEventExists = true;
      ourEventParticipants = EventsParticipants[ev.slug]
      ourEvent = ev
      break;
    }
  }

  if (!isEventExists) {
    return {
      isExist: false,
      ourEvent: ourEvent,
      ourEventParticipants: ourEventParticipants
    }
  }

  return {
    isExist: true,
    ourEvent: ourEvent,
    ourEventParticipants: ourEventParticipants
  }
}