<script lang="ts">
  import '@material/mwc-list/mwc-list';
  import '@material/mwc-list/mwc-list-item';

  let isOpen = false;

  // Reactive statement to handle clicks outside the menu
  $: if (isOpen) {
    window.addEventListener('click', handleClickOutside);
  } else {
    window.removeEventListener('click', handleClickOutside);
  }

  function toggleMenu() {
    isOpen = !isOpen;
  }

  function handleClickOutside(event: MouseEvent) {
    // Using type assertion to ensure event.target is of type Element
    const target = event.target as Element;
    if (!target.closest('.side-menu')) {
      isOpen = false;
    }
  }
</script>

<div class="side-menu" class:open={isOpen}>
  <mwc-list>
    <mwc-list-item>Home</mwc-list-item>
    <mwc-list-item>About</mwc-list-item>
    <mwc-list-item>Services</mwc-list-item>
    <mwc-list-item>Contact</mwc-list-item>
  </mwc-list>
</div>

<button class="menu-toggle" on:click={toggleMenu}>Menu</button>
  
  <div class="side-menu" class:open={isOpen}>
    <mwc-list>
      <mwc-list-item>Home</mwc-list-item>
      <mwc-list-item>About</mwc-list-item>
      <mwc-list-item>Services</mwc-list-item>
      <mwc-list-item>Contact</mwc-list-item>
    </mwc-list>
  </div>
  
  <button class="menu-toggle" on:click={toggleMenu}>Menu</button>
  
  <style>
    .side-menu {
      width: 250px;
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
  
    .menu-toggle {
      position: fixed;
      top: 10px;
      left: 10px;
      z-index: 101;
    }
  </style>
  