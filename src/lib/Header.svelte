<script>
    // Import Material Web Components
    import '@material/mwc-button';
    import '@material/mwc-icon';
  </script>
  
  <header>
    <div class="header-content">
      <h1>My Website</h1>
      <nav>
        <mwc-button icon="home" label="Home"></mwc-button>
        <mwc-button icon="info" label="About"></mwc-button>
        <mwc-button icon="mail" label="Contact"></mwc-button>
      </nav>
    </div>
  </header>
  
  <style>
    header {
      background-color: #6200ee; /* Example color */
      color: white;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    .header-content h1 {
      margin: 0;
      font-size: 1.5rem;
    }
  
    nav mwc-button {
      margin: 0 0.5rem;
    }
  </style>  