<script lang="ts">
  import { LocalStorageService } from "./lib/local-storage.svelte";
  import { progress } from "./lib/progress-store.svelte";
  import Progress from "./lib/Progress.svelte";
  import Streak from "./lib/Streak.svelte";
  const localStorageService = new LocalStorageService();

  $effect(() => {
    const items = localStorageService.getProgress().items;
    progress.items = items;
  });
</script>

<main>
  <h1>75Soft Tracker</h1>

  <div class="card">
    <Progress />
  </div>

  <Streak />
</main>

<style>
  .card {
    min-width: 80%;
    border: 1px solid black;
    border-radius: 4px;
  }
</style>
