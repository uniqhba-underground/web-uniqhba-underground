<script lang="ts">
	import { SiteName } from "@/lib/constant";
  import Head from "@/partials/Head.svelte";
  import { Icon, type IconType } from "svelte-icons-pack";
	import { RiBusinessMailLine, RiLogosWhatsappLine, RiLogosInstagramLine } from "svelte-icons-pack/ri";

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
          />
          <span>{c.contact}</span>
        </div>
      {/each}
    </div>
  </div>
</div>