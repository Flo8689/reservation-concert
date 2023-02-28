<script lang="ts">
import { useStore } from '@/stores/submit'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

export default{
  setup() {

    const firstName = ref('')
    const lastName = ref('')
    const email = ref('')
    const placing = ref('')
    const store = useStore()
    const router = useRouter()

    const submitForm = () => {
      // update store state with form data
      store.addBooking({firstName: firstName.value, lastName: lastName.value, email: email.value, placing: placing.value})
      console.log({firstName: firstName.value, lastName: lastName.value, email: email.value, placing: placing.value});
      
           router.push({ name: 'summary' })
    }

    return {
      firstName,
      lastName,
      email,
      placing,
      submitForm,
    }
  },
}
</script>

<template>
  <div class="container">
    <h1>Formulaire de réservation</h1>
    <form @submit.prevent="submitForm" class="w-75 mt-5">
      <div class="mb-3 form-floating">
        <input class="form-control" type="text" id="first-name" v-model="firstName" placeholder="Prénom">
        <label for="first-name">Prénom</label>
      </div>
      <div class="mb-3 form-floating">
        <input class="form-control" type="text" id="last-name" v-model="lastName"  placeholder="Nom">
        <label for="last-name">Nom</label>
      </div>
      <div class="mb-3 form-floating">
        <input class="form-control" type="email" id="email" v-model="email"  placeholder="E-mail">
        <label for="email">E-mail</label>
      </div>
      <div class="mb-3 form-floating">
        <input class="form-control" type="placing" id="placing" v-model="placing"  placeholder="Placement">
        <label for="placing">Placement</label>
      </div>
      <button class="btn btn-success btn-lg" type="submit">Je réserve</button>
  </form>
  </div>
</template>


<style>

input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

</style> 