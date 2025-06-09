<script lang="ts">
	import { SiteName } from "@/lib/constant";
  import Head from "@/partials/Head.svelte";
  import { Icon, type IconType } from "svelte-icons-pack";
	import {
    RiBusinessMailLine, RiLogosWhatsappLine, RiLogosInstagramLine,
    RiMapMapPinLine
  } from "svelte-icons-pack/ri";

  type Contact = {
    contact: string;
    icon: IconType;
  }

  const Contacts: Contact[] = [
    {
      contact: 'uniqhbaunderground@gmail.com',
      icon: RiBusinessMailLine
    },
    {
      contact: 'uniqhbaunderground.dev@gmail.com',
      icon: RiBusinessMailLine
    },
    {
      contact: '+62 878-6396-8484',
      icon: RiLogosWhatsappLine
    },
    {
      contact: 'uniqhba_underground',
      icon: RiLogosInstagramLine
    },
    {
      contact: 'Turmuzi, Jl. H. Badruddin, Bagu, Praya, Central Lombok Regency, West Nusa Tenggara 83371',
      icon: RiMapMapPinLine
    }
  ]
</script>

<Head
  title="{SiteName} | Kontak"
/>

<div class="container min-h-[900px] mx-auto">
  <div class="w-full flex flex-col gap-5 mt-5 md:mt-8 px-5 md:px-0">
    <h1 class="text-3xl font-bold">Kontak Kami</h1>
    <p>Punya ide proyek, event, pertanyaan, atau ingin bekerja sama? Kami siap mendengar. Silahkan hubungi kami melalui kontak di bawah melalui Email, WhatsApp, atau media sosial kami. Kami akan merespons secepat mungkin dan dengan senang hati untuk bekerja sama atau berkolaborasi.</p>
    <div class="flex flex-col gap-3">
      {#each Contacts as c}
        <div class="flex flex-row gap-2 items-center w-fit">
          <Icon
            src={c.icon}
            size="20"
            className="shrink-0"
          />
          <span class="grow">{c.contact}</span>
        </div>
      {/each}
    </div>
    <div class="w-full h-[450px] border border-neutral-200 rounded-xl overflow-hidden">
      <iframe
        title="Alamat UNIQHBA Underground"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20496.025001804952!2d116.2102240238151!3d-8.625255812173837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdb84ccf5eff77%3A0x43f69c9078496d5d!2sUniversitas%20Qamarul%20Huda%20Badaruddin!5e0!3m2!1sen!2sid!4v1749484742765!5m2!1sen!2sid"
        width="100%"
        height="450"
        style="border:0;"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</div>