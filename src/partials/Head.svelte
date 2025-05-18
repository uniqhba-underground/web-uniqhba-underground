<script lang="ts">
  import { SiteName, SiteDesc, SiteBaseUrl, SiteImageUrl, SiteAuthor } from '@/lib/constant';

  export let title: string  = SiteName;
  export let path: string   = '';
  export let description: string = SiteDesc;
  export let imageUrl: string = SiteImageUrl;
  export let author: string = SiteAuthor;

  const siteUrl: string = SiteBaseUrl + path;
</script>

<svelte:head>
  <title>{title}</title>
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <meta name="author" content={author} />
  <meta name="description" content={description} />
  <meta property="og:site_name" content={title} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:locale" content="id_ID" />
  <meta property="og:locale:alternate" content="en_UK" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={siteUrl} />
  <meta property="og:image" content={imageUrl} />
  <meta property="og:image:secure_url" content={imageUrl} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content={title} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={imageUrl} />
  <meta property="fb:pages" content="61573761662275" />
</svelte:head>