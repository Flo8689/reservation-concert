<script lang="ts">
import { useStore } from '@/stores/submit'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { forInStatement } from '@babel/types'

export default {

    props : ['id'],

    data() {
      return {
        event: null,
        api_url: "http://localhost:1337/api/events?populate=artists,artists.picture&filters[id]=",
      }
    },
    async created() {
      const url = this.api_url + this.id;
      const response = await fetch(url);
      const data = await response.json();
      this.event = data.data[0];
      console.log(this.event?.attributes.artists.data[0].attributes.name)
    },

    setup() {
      const store = useStore()
      const router = useRouter()

      // navigate back to the form page
      const goBack = () => {
        router.back()
      }

      return {
  
        goBack,
        store
      }
    },
    methods: {
    requestResa(){
      console.log(this.store.data[0].email);
      
      axios.post( 'http://localhost:1337/api/reservations', {
        "data": {
          "firstname": this.store.data[0].firstName,
          "lastname": this.store.data[0].lastName,
          "email": this.store.data[0].email,
          "placing": this.store.data[0].placing
        }
      })

      .then((result) => {
                  console.log(result);
              })
      .catch((error) => {
          if (error.response){
                console.log(error.response);
          }else if(error.request){
                console.log(error.request);
          }else if(error.message){
                console.log(error.message);
          }
        })         
      }
    }
}
</script>

<template>
  <div class="container d-flex flex-column align-items-center">
    <div v-for="data in store.data">
      <h1>Bonjour, {{ data.firstName  }}!</h1>
      <p>Nous avons bien enregistré votre réservation et vous en remercions.
         Veuillez prendre connaissance des informations ci-dessous, puis 
         finaliser la réservations
      </p>
      <p>Voici un récapitulatif de votre réservation :</p>
      <ul>
        <li>Festival : {{ this.event.attributes.title }}</li>
        <li>Prénom : {{ data.firstName }}</li>
        <li>Nom : {{ data.lastName }}</li>
        <li>Email : {{ data.email }}</li>
        <li>Placing : {{ data.placing }}</li>
      </ul>
      <router-link :to="{
            name: 'thanks',
            params: { id: event.id }                            
          }"
      >
        <button @click="requestResa" class="btn btn-success btn-lg">Valider la réservation</button>
      </router-link>
    </div>
  </div>
</template>



















