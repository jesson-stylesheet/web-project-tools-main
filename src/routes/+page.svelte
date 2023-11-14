<script>
    import Header from '$lib/Header.svelte';
    import SideMenu from '$lib/SideMenu.svelte';
    import Card from '$lib/Card.svelte';
  </script>

<Header />
<SideMenu />
  
  <main>
    <section class="cards">
      <Card 
        title="Card 1" 
        description="This is the first card." 
        imageUrl="/path/to/image1.jpg"
        altText="Description of image 1"
      />
      <Card 
        title="Card 2" 
        description="This is the second card." 
        imageUrl="/path/to/image2.jpg"
        altText="Description of image 2"
      />
      <Card 
        title="Card 3" 
        description="This is the third card." 
        imageUrl="/path/to/image3.jpg"
        altText="Description of image 3"
      />
      <!-- Add more cards as needed -->
    </section>
  </main>
  
  <style>
    main {
      padding: 1rem;
      margin-left: 250px; /* Adjust based on the width of your side menu */
    }
  
    .cards {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
    }
  </style>
  