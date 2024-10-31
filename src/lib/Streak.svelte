<script lang="ts">
  import { progress } from "./progress-store.svelte";
  let streak = $state(0);
  $effect(() => {
    let total = 0;
    Object.entries(progress.items).sort((a, b) => {
      const aday = new Date(a[0]);
      const bday = new Date(b[0]);
      return aday.getTime() - bday.getTime();
    }).forEach(([k, day]) => {
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
  <div>{streak} out of 75</div>
</div>
