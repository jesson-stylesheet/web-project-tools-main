<script>
    // Import Material Web Components
    import '@material/web/button/filled-button.js';
    import '@material/web/icon/icon.js';
    import '@material/web/iconbutton/filled-icon-button.js';
    import { componentWidth } from './store.js';
  </script>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
  <header style="margin-left: {$componentWidth}px">
    <div class="header-content">
      <h1>My Website</h1>
      <nav>
        <md-filled-button label="Home"></md-filled-button>
        <md-filled-button label="About"></md-filled-button>
        <md-filled-button label="Contact"></md-filled-button>
        <md-icon-button>
          <span class="material-symbols-outlined">
            menu
            </span>
        </md-icon-button>
      </nav>
    </div>
  </header>
  
  <style>
    header {
      max-width: 100%;
      background-color: #6200ee; /* Example color */
      color: white;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 8px;
      margin-top: 8px;
    }
  
    .header-content h1 {
      margin: 0;
      font-size: 1.5rem;
    }
  
    nav md-filled-button {
      margin: 0 0.5rem;
    }
  </style>  