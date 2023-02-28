<script lang="ts">

  export default{
    props : ['id'],
    data() {
      return {
        event: null,
        api_url: "http://localhost:1337/api/events?populate=artists,artists.picture&filters[id]="
      }
    },
    async created() {
      const url = this.api_url + this.id;
      const response = await fetch(url);
      const data = await response.json();
      this.event = data.data[0];
      console.log(this.event?.attributes.artists.data[0].attributes.description)
      console.log(this.event?.attributes.artists.data[0].attributes.picture)
      console.log(this.event?.attributes.artists.data[1].attributes.picture.data[0].attributes.url)
    }
  }  
  
</script>

<template>
  <div class="event container">  
    <div class="d-flex justify-content-between align-items-center">
      <h1>{{ this.event.attributes.title }} | Programmation</h1>
      <router-link :to="{
        name: 'booking',
        params: { id: event.id }                            
      }"
      >
      <button class="btn btn-primary btn-lg">Réserver ce festival</button>
      </router-link>
    </div>
    <div class="row">
      <div v-for="artist in this.event.attributes.artists.data">
        <div class="card mt-4 p-3">
          <div class="card-body row">
            <div class="col-3">
               <img v-bind:src="`http://localhost:1337${ artist.attributes.picture.data[0].attributes.url }`" class="w-100" alt="...">
            </div>
            <div class="col-9">
              <h2 class="card-title">{{ artist.attributes.name }}</h2>
              <p class="card-text">{{ artist.attributes.description }}</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 

<!-- http://localhost:1337/uploads/Andras_Farkas_2048x2048_09efbcf282.jpg
http://localhost:1337/uploads/papasov_ivo_503a583e06b82_1024x1024_f2bf971459.jpeg -->
<style>
  .card-text{
    font-size: 16px;
  }
</style>
