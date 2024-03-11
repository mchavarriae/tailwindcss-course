<script setup lang="ts">

import { onMounted, reactive } from "vue";

const films = reactive(new Array<any>());

onMounted(async () => {
  const result = await fetch(`https://bechdel.azurewebsites.net/api/films`);
  const json = await result.json();
  films.push(...json.results);
});

</script>

<template>
  <div class="container">
    <h2>Results:</h2>
    <div id="results">
      <div v-for="film in films">
        <div class="film hover:bg-green-100">
          <img class="" :src="film.posterUrl" :alt="film.title" />
          <div class="title">{{ film.title }}</div>
          <div>
            <div>{{ film.year }}</div>
            <div>
              <span class="">Rating:</span>
              {{ film.rating }}
            </div>
            <div>
              <span class="">Passed:</span>
              {{ film.passed }}
            </div>
            <div>
              <span class="">Reason:</span>
              {{ film.reason }}
            </div>
            <div>
              <span class="">Budget:</span>
              ${{ film.budget.toLocaleString("en-US") }}
            </div>
            <div>
              <span class="">Dom. Gross:</span>
              ${{ film.domesticGross.toLocaleString("en-US") }}
            </div>
            <div>
              <span class="">Int'l Gross:</span>
              ${{ film.internationalGross.toLocaleString("en-US") }}
            </div>
          </div>
          <p class="">{{ film.overview }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: #888;
  margin: 0;
  padding: 0;
}
.container {
  width: 989px;
  margin: 0 auto;
  background-color: #eee;
  padding: 0.5rem;
}

#results {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  padding: 0.5rem;
}

#results .film {
  padding: 0.5rem;
  border: solid 1px #888;
  border-radius: 0.5rem;
}

#results .film .title {
  /* font-size: 1.2rem;
  font-weight: bold; */
  @apply font-serif text-lg font-bold;
}
</style>
