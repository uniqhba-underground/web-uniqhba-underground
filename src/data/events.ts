import type { IconType } from "svelte-icons-pack";
import { RiMapMapPinLine } from "svelte-icons-pack/ri";
import { TrOutlineBrandZoom } from "svelte-icons-pack/tr";

type OurEventCategory = (
  'mini_class' | 'workshop' | 'meetup' | 'webinar' | 'other'
);

export const OurEventCategoryMap: Record<OurEventCategory, string> = {
  'meetup': 'Meet Up',
  'mini_class': 'Mini Class',
  'workshop': 'Workshop',
  'webinar': 'Webinar',
  'other': 'Lainnya'
}

type OurEventLocation = {
  name: string;
  icon: IconType;
}

type OurEvent = {
  name: string;
  description: string;
  date: string;
  time: string;
  location: OurEventLocation;
  slug: string;
  image_url: string;
  category: OurEventCategory;
}

export const OurEvents: OurEvent[] = [
  {
    name: 'The Smart Way to Start in Cyber Security',
    description: 'Bagaimana langkah pertama untuk memulai karir di bidang Cyber Security?',
    date: '2025-06-14',
    time: '08:00 WITA - selesai',
    location: {
      name: 'Lt. 5 Gedung Fak. Kesehatan, UNIQHBA',
      icon: RiMapMapPinLine
    },
    slug: 'cyber-sec-the-smart-way-to-start',
    image_url: '/img/events/cyber-sec-the-smart-way-to-start.jpg',
    category: 'meetup'
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
    category: 'workshop'
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
    category: 'webinar'
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
    category: 'mini_class'
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
    category: 'meetup'
  },
]