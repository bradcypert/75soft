<script lang="ts">
  import { progress } from "./progress-store.svelte";
  let streak = $state(0);
  $effect(() => {
    let total = 0;
    Object.values(progress.items).forEach((day) => {
      if (day.eat && day.book && day.water && day.alcohol && day.exercise) {
        total += 1;
      } else {
        total = 0;
      }
    });
    streak = total;
  });
</script>

<div>
  <div>Streak</div>
  <div>{streak}</div>
</div>
