<script lang="ts">
   import { onMount } from 'svelte'

let items = new Array<any>();

onMount(async () => {
  const result = await fetch(`https://bechdel.azurewebsites.net/api/films`)
  const json = await result.json()
  items = json.results
})
</script>

<main class="container mx-auto p-2">
  <h2 class="font-bold text-2xl">Results:</h2>
  <div id="results" class="grid grid-cols-3 gap-2 p-2">
    {#each items as film}
      <div class="border rounded bg-amber-50 p-2">
        <img class="float-right w-32 rounded" src={film.posterUrl} alt={film.title} />
        <div class="font-bold text-lg">{film.title}</div>
        <div>
          <div>{film.year}</div>
          <div>
            <span class="">Rating:</span>
            {film.rating}
          </div>
          <div>
            <span class="">Passed:</span>
            {film.passed}
          </div>
          <div>
            <span class="">Reason:</span>
            {film.reason}
          </div>
          <div>
            <span class="">Budget:</span>
            ${film.budget.toLocaleString('en-US')}
          </div>
          <div>
            <span class="">Dom. Gross:</span>
            ${film.domesticGross.toLocaleString('en-US')}
          </div>
          <div>
            <span class="">Int'l Gross:</span>
            ${film.internationalGross.toLocaleString('en-US')}
          </div>
        </div>
        <p class="">{film.overview}</p>
      </div>
    {/each}
  </div>
</main>

<style>

  </style>