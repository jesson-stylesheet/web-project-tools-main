<script>
  import '@material/web/button/filled-button.js';
  
  export let title = '';
  export let description = '';
  export let imageUrl = '/src/assets/images/woody-planks-1.png'; // Default image URL
  export let altText = ''; // Default alt text
</script>

<div class="card">
  <div>
    <img src={imageUrl} alt={altText} class="card-image">
    <div class="card-content">
      <h2 class="card-title">{title}</h2>
      <p class="card-description">{description}</p>
    </div>
  </div>
  <div class="card-actions">
    <md-filled-button label="Action 1"></md-filled-button>
    <md-filled-button label="Action 2"></md-filled-button>
  </div>
</div>

<style>
  .card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    margin: 1rem;
    max-width: 460px;
    min-width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .card-content {
    padding: 1rem;
  }

  .card-title {
    margin: 0 0 0.5rem 0;
    font-size: 1.2rem;
  }

  .card-description {
    margin: 0;
    font-size: 1rem;
    color: #666;
  }

  .card-actions {
    padding: 0 1rem 1rem 1rem;
    display: flex;
    justify-content: flex-end;
  }

  md-filled-button {
    --mdc-theme-primary: #6200ee; /* Example primary color */
  }

  @media only screen and (max-width: 1268px) {
    .card {
      max-width: 400px;
      min-width: 30%;
      margin: 8px;
    }
  }

  @media only screen and (max-width: 1080px) {
    .card {
      max-width: 360px;
      min-width: 30%;
      margin: 8px;
    }
  }

  @media only screen and (max-width: 980px) {
    .card {
      max-width: 440px;
      min-width: 30%;
    }
  }

  @media only screen and (max-width: 570px) {
    .card {
      width: 100%;
      max-width: 100%;
      margin: 8px;
    }
  }
</style>
