<script lang="ts">
   import { onMount } from 'svelte'

let items = []

onMount(async () => {
  const result = await fetch(`https://bechdel.azurewebsites.net/api/films`)
  const json = await result.json()
  items = json.results
})
</script>

<main>
  <h2>Results:</h2>
  <div id="results">
    {#each items as film}
      <div class="film bg-amber-100 hover:bg-amber-300">
        <img class="" src={film.posterUrl} alt={film.title} />
        <div class="title">{film.title}</div>
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
  #results {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: .5rem;
    padding: .5rem;
  }
  
  #results .film {
    padding: .5rem;
    border: solid 1px #888;
    border-radius: .5rem;
  }
  
  #results .film .title {
    font-size: 1.2rem;
    font-weight: bold;
  }
  </style>