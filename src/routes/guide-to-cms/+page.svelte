<script>
    import Header from '$lib/Header.svelte';
    import SideMenu from '$lib/SideMenu.svelte';
    import Card from '$lib/Card.svelte';
    import { componentWidth } from '$lib/store.js';

  </script>

<Header />
<SideMenu />
  
<main style="margin-left: {$componentWidth}px">

</main>
  
  <style>
    main {
      padding: 1rem 0 1rem 0;
    }
  
    .cards {
      display: flex;
      flex-wrap: wrap;
      gap: 0.25rem;
      justify-content: space-between;
    }

    @media only screen and (min-width:1080px) {
      .cards {
        justify-content: left;
      }
    }

    @media only screen and (max-width:766px) {
      .cards {
        justify-content: left;
      }
    }
  </style>
  