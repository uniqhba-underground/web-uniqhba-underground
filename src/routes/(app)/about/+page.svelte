<script lang="ts">
	import { SiteName } from "@/lib/constant";
  import Head from "@/partials/Head.svelte";
</script>

<Head
  title="{SiteName} | Tentang"
/>

<div class="container min-h-[700px] mx-auto">
  <div class="w-full flex flex-col gap-5 mt-5 md:mt-8 px-5 md:px-0">
    <div class="w-full h-auto aspect-auto rounded-2xl overflow-hidden">
      <img
        src="/img/gallery/jumbotron.png"
        alt=""
        class="w-full h-auto"
      />
    </div>
    <h1 class="text-3xl font-bold">Tentang Kami</h1>
    <p>Komunitas IT Mahasiswa UNIQHBA (Universitas Qamarul Huda Badaruddin Bagu). Komunitas ini di bentuk untuk mahasiswa yang tertarik dan ingin memperdalam pengetahuan, skill, jejaring sosial di bidang Teknologi Informasi, entah di bidang Programming, Desain Grafis, Cyber Security, dan salainnya. Kita belajar, berbagi informasi, berdiskusi, serta membantu satu sama lain dalam memahami ilmu - ilmu di bidang IT.</p>
    <div class="flex flex-col gap-3">
      <h2 class="text-2xl font-bold">Visi</h2>
      <p>Menjadi komunitas IT yang berkontribusi dalam pengembangan teknologi dan inovasi, serta mendorong anggotanya untuk menjadi talenta digital yang unggul, inovatif, dan berdedikasi untuk kemajuan masyarakat dan negara.</p> 
    </div>
    <div class="flex flex-col gap-3">
      <h2 class="text-2xl font-bold">Misi</h2>
      <ul class="list-disc list-inside marker:text-uniqhbaunderground-2">
        <li>Menyediakan platform diskusi dan belajar mengenai Teknologi Informasi</li>
        <li>Mengadakan pelatihan, workshop, dan webinar untuk memperdalam keterampilan teknis mahasiswa.</li>
        <li>Membantu anggota membangun koneksi dengan profesional di bidang IT.</li>
        <li>Menyediakan bantuan dan bimbingan dalam menyelesaikan tugas dan proyek akademis terkait Teknologi Informasi.</li>
        <li>Menyediakan ruang untuk berbagi ide dan inovasi dalam Teknologi Informasi.</li>
      </ul>
    </div>
  </div>
</div>