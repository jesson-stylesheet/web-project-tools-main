<script>
// @ts-nocheck

    // Import Material Web Components
    import '@material/web/button/filled-button.js';
    import '@material/web/icon/icon.js';
    import '@material/web/iconbutton/filled-icon-button.js';
    import { componentWidth } from './store.js';

    import { onMount } from 'svelte';
    import { tick } from 'svelte';

    let time = new Date();
    let weather = {};

    // Update time every minute
    onMount(() => {
        const interval = setInterval(() => {
            time = new Date();
        }, 1000);
        return () => clearInterval(interval);
    });

    // Fetch weather data on client side
    onMount(async () => {
        const response = await fetch('./api/weather');
        weather = await response.json();
    });

  </script>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <header style="margin-left: {$componentWidth}px">
    <div class="header-content">
      <h1>Digital & Website Project Tools</h1>
      <nav>
        <div class="time-cloud"><span class="material-symbols-outlined">
          schedule
          </span>
          <span class="local-time">{time.toLocaleTimeString()}</span>
        </div>
        <div class="time-cloud"><span class="material-symbols-outlined">
          cloud
          </span>
          <span class="local-time">{weather.temperature}°C, {weather.weather}</span>
        </div>
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
      font-size: 3rem;
    }

    nav {
      display: flex;
      flex-direction: column;
    }
  
    .time-cloud {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      margin: 8px 0 0 0;
    }

    .local-time {
      display: flex;
      align-items: center;
    }

    .material-symbols-outlined {
      margin-right: 8px;
      font-variation-settings:
      'FILL' 0,
      'wght' 400,
      'GRAD' 0,
      'opsz' 24
    }
  </style>  