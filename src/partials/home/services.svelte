<script lang="ts">
	import CardService from "@/components/card-service.svelte";

  type Service = {
    title: string;
    description: string;
    image_url: string;
    class_img: string;
    is_coming_soon: boolean;
  }

  const Services: Service[] = [
    {
      title: 'Pengembangan Website',
      description: 'Kami membangun website yang cepat, responsif, dan sesuai kebutuhan Anda—mulai dari landing page, company profile, hingga sistem berbasis web. Dibuat dengan teknologi terkini dan desain modern yang menunjang kredibilitas bisnis Anda.',
      image_url: '/img/services/web-development.svg',
      class_img: 'w-16 h-16 bg-red-600 rounded-full p-4',
      is_coming_soon: false
    },
    {
      title: 'Instalasi Ulang Laptop',
      description: 'Laptop lemot atau sistem bermasalah? Kami siap membantu instalasi ulang Windows atau Linux, lengkap dengan driver dan aplikasi dasar agar perangkat Anda kembali optimal dan siap digunakan.',
      image_url: '/img/services/os-installation.svg',
      class_img: 'w-16 h-16 bg-lime-600 rounded-full p-4',
      is_coming_soon: false
    },
    {
      title: 'UI/UX Design',
      description: 'Kami merancang antarmuka pengguna yang estetis dan pengalaman pengguna yang intuitif. Fokus pada kenyamanan dan efisiensi, setiap detail kami sesuaikan agar pengguna betah dan mudah berinteraksi dengan produk Anda.',
      image_url: '/img/services/ui-ux-design.svg',
      class_img: 'w-16 h-16 bg-purple-600 rounded-full p-4',
      is_coming_soon: false
    },
    {
      title: 'Desain Grafis',
      description: 'Butuh desain yang mencuri perhatian? Mulai dari logo, poster, feed Instagram, hingga banner promosi—kami siap bantu visualisasikan ide Anda ke dalam desain yang profesional dan berkarakter.',
      image_url: '/img/services/design-graphics.svg',
      class_img: 'w-16 h-16 bg-amber-600 rounded-full p-4',
      is_coming_soon: false
    },
    {
      title: 'Reparasi Hardware',
      description: 'Layanan perbaikan perangkat anda, mulai dari Smartphone, Laptop, dan Tablet. Dikerjakan dengan hati-hati oleh teknisi berpengalaman, demi menjaga performa dan umur perangkat Anda.',
      image_url: '/img/services/hardware-reparation.svg',
      class_img: 'w-16 h-16 bg-blue-600 rounded-full p-4',
      is_coming_soon: false
    },
    {
      title: 'Editing Video',
      description: 'Kami mengubah footage mentah menjadi video yang menarik, profesional, dan sesuai tujuan Anda—baik untuk promosi, dokumentasi, konten sosial media, hingga presentasi bisnis.',
      image_url: '/img/services/video-editing.svg',
      class_img: 'w-16 h-16 bg-zinc-600 rounded-full p-4',
      is_coming_soon: true
    },
    {
      title: 'Pengembangan Android',
      description: 'Kami merancang dan mengembangkan aplikasi Android yang stabil dan ramah pengguna. Mulai dari aplikasi internal perusahaan hingga produk digital untuk publik, semua dibangun dengan kualitas dan performa yang terjaga.',
      image_url: '/img/services/android-development.svg',
      class_img: 'w-16 h-16 bg-emerald-600 rounded-full p-4',
      is_coming_soon: true
    }
  ]
</script>

<section class="flex flex-col gap-5 justify-center items-center my-7">
  <div class="w-full flex flex-col gap-2 px-5 md:px-0">
    <h1 class="text-3xl font-bold">Layanan Kami</h1>
    <p class="text-neutral-600">Kami menyediakan solusi teknologi yang disesuaikan dengan kebutuhan bisnis Anda. Dengan tim yang berpengalaman dan berorientasi pada hasil, kami siap membantu Anda membangun produk digital yang andal, efisien, dan siap bersaing.</p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-5 justify-center w-full items-stretch px-5 md:px-0">
    {#each (Services || []) as srv}
      <CardService
        title={srv.title}
        description={srv.description}
        image_url={srv.image_url}
        class_img={srv.class_img}
        is_coming_soon={srv.is_coming_soon}
      />
    {/each}
  </div>
</section>