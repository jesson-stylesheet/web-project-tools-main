<script>
  import { onMount, onDestroy } from 'svelte';
  import { componentWidth } from './store.js';
  import '@material/web/list/list.js';
  import '@material/web/list/list-item.js';

  // @ts-ignore
  let element;

  onMount(() => {
    const updateWidth = () => {
      // @ts-ignore
      componentWidth.set(element.offsetWidth);
    };

    updateWidth(); // Set initial width
    window.addEventListener('resize', updateWidth); // Update width on window resize

    // Cleanup on component destruction
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  });

  let isOpen = true;

  function toggleMenu() {
    isOpen = !isOpen;
  }

</script>

<div bind:this={element} class="side-menu" class:open={isOpen}>
  <md-list>
    <md-list-item>Home</md-list-item>
    <md-list-item>About</md-list-item>
    <md-list-item>Services</md-list-item>
    <md-list-item>Contact</md-list-item>
  </md-list>
</div>

<!-- <button class="menu-toggle" on:click={toggleMenu}>Menu</button> -->

<style>
  .side-menu {
    width: 20%;
    max-width: 250px;
    background-color: #fff;
    box-shadow: 3px 0 6px rgba(0, 0, 0, 0.16);
    position: fixed;
    top: 0;
    bottom: 0;
    left: -250px;
    transition: left 0.3s ease;
    z-index: 100;
  }

  .side-menu.open {
    left: 0;
  }

  /*.menu-toggle {
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 101;
  } */
</style>