import { RiMapMapPinLine } from "svelte-icons-pack/ri";
import { TrOutlineBrandZoom } from "svelte-icons-pack/tr";
import type { EventSlug, OurEvent, ParticipantCertificate } from "./type";
import { ParticipantsTheSmartWayToStartInCyberSec } from "./participants/meetup/cybersec/01";
import { FieldCyberSecurity, FieldOther, FieldUIUX, FieldWebProgramming } from "./constant";

export const OurEvents: OurEvent[] = [
  {
    name: 'The Smart Way to Start in Cyber Security',
    description: 'Bingung harus mulai dari mana buat terjun ke dunia Cyber Security? Yuk, temukan jawabannya di meetup ini!. Kita akan di bekali cara cerdas belajar Cyber Security mulai dari 0 dan bagaimana menghadapi tantangan selama belajar, oleh kak Gilang',
    date: '2025-06-14',
    time: '08:00 WITA - selesai',
    location: {
      name: 'Lt. 5 Gedung Fak. Kesehatan, UNIQHBA',
      icon: RiMapMapPinLine
    },
    slug: 'cyber-sec-the-smart-way-to-start',
    image_url: '/img/events/cyber-sec-the-smart-way-to-start.jpg',
    category: 'meetup',
    field: FieldCyberSecurity,
    isPublic: true
  },
  {
    name: 'Membangun Portofolio UI dengan Dribbble',
    description: 'Pernah ngerasa pengen banget punya portofolio UI yang keren di Dribbble, tapi bingung harus mulai dari mana?',
    date: '2025-05-17',
    time: '07:00 WITA - selesai',
    location: {
      name: 'Lt. 5 Gedung Fak. Kesehatan, UNIQHBA',
      icon: RiMapMapPinLine
    },
    slug: 'ui-ux-with-lpe-bangun-portfolio',
    image_url: '/img/events/ui-ux-with-lpe-bangun-portfolio.jpg',
    category: 'workshop',
    field: FieldUIUX,
    isPublic: true
  },
  {
    name: 'Hacker kok baik?',
    description: 'Hacker sering dianggap penjahat dunia maya, tapi apa benar semua hacker seperti itu? Yuk, kenalan lebih dekat dengan dunia Cyber Security dan temukan sisi positif dari para profesional di balik layar!',
    date: '2024-12-29',
    time: '20:00 WITA - selesai',
    location: {
      name: 'Google Meet',
      icon: TrOutlineBrandZoom
    },
    slug: 'cyber-sec-hacker-kok-baik',
    image_url: '/img/events/cyber-sec-hacker-kok-baik.png',
    category: 'webinar',
    field: FieldCyberSecurity,
    isPublic: true
  },
  {
    name: 'Introduction to JavaScript',
    description: 'Ingin memulai perjalananmu di dunia Web Programming? Ikuti Mini-Class seru ini untuk mengenal: Dasar-dasar JavaScript, Lingkungan pengembangannya (Web Browser, Node.js, Deno, Bun), Dan banyak lagi!',
    date: '2024-11-28',
    time: '13:00 WITA - Selesai',
    location: {
      name: 'Lab. Komputer UNIQHBA',
      icon: RiMapMapPinLine
    },
    slug: 'web-programming-intro-js',
    image_url: '/img/events/web-programming-intro-js.png',
    category: 'mini_class',
    field: FieldWebProgramming,
    isPublic: false
  },
  {
    name: 'Loteng Dev Meet Up #3',
    description: 'Meet Up komunitas Loteng Dev (Komunitas developer kab. Lombok Tengah) ke #3, berkolaborasi dengan UNIQHBA',
    date: '2024-01-27',
    time: '23:30 WITA - Selesai',
    location: {
      name: 'Google Meet',
      icon: TrOutlineBrandZoom
    },
    slug: 'loteng-dev-meet-up-3',
    image_url: '/img/events/lotengdev-meetup-3-with-uniqhba.png',
    category: 'meetup',
    field: FieldOther,
    isPublic: true
  },
]

export const EventsParticipants: Record<EventSlug, ParticipantCertificate[]> = {
  'cyber-sec-the-smart-way-to-start': ParticipantsTheSmartWayToStartInCyberSec
}