<script lang="ts">

  export default{
    data() {
      return {
        events: null
      }
    },

    // GET request using fetch with async/await

    async created() {

      const response = await fetch("http://localhost:1337/api/events");
      const data = await response.json();
      this.events = data.data;
    }
  }

    // Simple GET request using fetch MAIS CA MARCHE PAS TOUT LE TEMPS

    // created() {
    // 
    // fetch("http://localhost:1337/api/events")
    //   .then(response => response.json())
    //   .then(data => (this.events = data.data));
    // }

    // GET request using axios

    //  created () {
    //     axios
    //       .get('http://localhost:1337/api/events')
    //       .then(response => {(this.events = response.data.data);
    //       console.log(response.data.data)})
    //   }
    // }

    // function convertDate(date) {
    //   var day = date.getDate();
    //   day = day < 10 ? "0" + day : day;
    //   var month = date.getMonth() + 1;
    //   month = month < 10 ? "0" + month : month;
    //   var year = date.getFullYear();
    //   return day + "." + month + "." + year;
    // }

    // const dateFrom = convertDate(events.attributes.from)
  
</script>

<template>
  <div class="events container">
    <div class="row">
      <div class="col-6" v-for="event in events">
        <div class="card p-3">
          <div class="card-body">
            <h2 class="card-title">{{ event.attributes.title }}</h2 >
            <p class="card-text">A {{ event.attributes.place }} </p>
            <!-- <p class="card-text">De {{ dateFrom }} </p> -->
            <router-link :to="{
                name: 'event',
                params: { id: event.id }
              }"
              >
              <button class="btn btn-primary text-white">
                Voir les détails   
              </button>     
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>


</style>