<script>
    import Header from '$lib/Header.svelte';
    import SideMenu from '$lib/SideMenu.svelte';
    import Card from '$lib/Card.svelte';
    import { componentWidth } from '$lib/store.js';

  </script>

<Header />
<SideMenu />
  
  <main style="margin-left: {$componentWidth}px">
    <section class="cards">
      <Card 
        title="Guide to CMS" 
        description="Which CMS would be best for your website? Start here to know more and compare between all the CMS out there." 
        imageUrl="/src/assets/images/woody-planks-2.png"
        altText="Description of image 1"
        action1="Read the Guide"
        action2="What's a CMS?"
        link1="/guide-to-cms"
        link2="https://en.wikipedia.org/wiki/Content_management_system"
      />
      <Card 
        title="Website Support" 
        description="Domain hosting, servers, redirections, analystis and SEO. How would you navigate around all the supporting elements of a website project." 
        imageUrl="/src/assets/images/woody-planks-3.png"
        altText="Description of image 2"
        action1="Backend 101"
        action2="SEO 101"
        link1=""
        link2=""
      />
      <Card 
        title="Project Estimation Tool" 
        description="We're reay to start our project but son't know how much it would cost. Fill in your specs and needs and get an estimation how much would it cost!" 
        imageUrl="/src/assets/images/woody-planks-4.png"
        altText="Description of image 3"
        action1="Estimate Now"
        action2="How to?"
        link1="https://project-estimation-likeable.netlify.app/"
        link2="/how-to-use-the-estimator"
      />
      <!-- Add more cards as needed -->
    </section>
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
  