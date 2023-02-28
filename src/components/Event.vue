<script setup lang="ts">

export default {



    props: {
        id: Number,
        title: String,
        place: String,
        dateFrom: Date
  }
}

</script>

<template>
 <div class="event-container">
    <h1  :id="id"> </h1>
 </div>
</template>

