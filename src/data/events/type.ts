import type { IconType } from "svelte-icons-pack";
import type { EventField } from "./constant";

export type OurEventCategory = (
  'mini_class' | 'workshop' | 'meetup' | 'webinar' | 'other' | 'bootcamp'
);

export const OurEventCategoryMap: Record<OurEventCategory, string> = {
  'meetup': 'Meet Up',
  'mini_class': 'Mini Class',
  'workshop': 'Workshop',
  'webinar': 'Webinar',
  'bootcamp': 'Bootcamp',
  'other': 'Lainnya'
}

export type OurEventLocation = {
  name: string;
  icon: IconType;
}

export type EventSlug = string;

export type OurEvent = {
  name: string;
  description: string;
  date: string;
  duration?: string;
  time: string;
  location: OurEventLocation;
  slug: EventSlug;
  image_url: string;
  thumbnail_url?: string;
  category: OurEventCategory;
  field: EventField;
  fee?: string;
  isPublic?: boolean;
  partners?: string[];
  registration_link?: string;
  withExpired?: boolean;
}

export type ParticipantCertificate = {
  name: string;
  certificateId: string;
}