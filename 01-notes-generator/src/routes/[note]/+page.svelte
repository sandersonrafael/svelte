<script lang="ts">
  import type { PageData } from "./$types"; // used to load data related to page
  export let data: PageData;
</script>

<h1>{ data.fruit }</h1>
