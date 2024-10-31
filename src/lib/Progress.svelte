<script lang="ts">
  import { LocalStorageService } from "./local-storage.svelte";
  import {
    progress,
    getDay,
    getDayKey,
    type Day,
    emptyDay,
  } from "./progress-store.svelte";

  $effect(() => {
    const localStorageService = new LocalStorageService();
    if (Object.values(progress.items).length != 0) {
      localStorageService.saveProgress(progress);
    }
  });

  const today = new Date();
  let date = $state(today);
  if (progress.items[getDayKey(today)] == null) {
    progress.items[getDayKey(today)] = emptyDay;
  }
  let activeDay = $derived<Day>(getDay(date));
  const onChangeDate = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const selectedDate = new Date(target.value);
    date = new Date(target.value);

    const items = {...progress.items};

    const now = new Date();

    while (getDayKey(selectedDate) != getDayKey(now)) {
      selectedDate.setDate(selectedDate.getDate() + 1);
      if (items[getDayKey(date)] == null) {
        items[getDayKey(date)] = emptyDay;
      }
    }

    if (items[getDayKey(date)] == null) {
      items[getDayKey(date)] = emptyDay;
    }

    progress.items = items;
  };

</script>

<div>
  <label>
    Select a different day?
    <input type="date" value={date.toISOString().split("T")[0]} onchange={onChangeDate} />
  </label>
  <label>
    Ate Healthy?
    <input
      type="checkbox"
      checked={activeDay.eat}
      onchange={() => (activeDay.eat = !activeDay?.eat)}
    /></label
  >
  <label>
    Good judgement with Alcohol?
    <input
      type="checkbox"
      checked={activeDay.alcohol}
      onchange={() => (activeDay.alcohol = !activeDay?.alcohol)}
    /></label
  >
  <label>
    3 liters of water?
    <input
      type="checkbox"
      checked={activeDay.water}
      onchange={() => (activeDay.water = !activeDay?.water)}
    /></label
  >
  <label>
    45 Minutes of Exercise?
    <input
      type="checkbox"
      checked={activeDay.exercise}
      onchange={() => (activeDay.exercise = !activeDay?.exercise)}
    /></label
  >
  <label>
    10 Pages of a book?
    <input
      type="checkbox"
      checked={activeDay.book}
      onchange={() => (activeDay.book = !activeDay?.book)}
    /></label
  >
</div>

<style>
  label {
    font-size: 1.2em;
    display: block;
    text-align: center;
    margin-bottom: 1.2em;
    font-weight: bold;
  }

  input[type="date"] {
    display: block;
    width: 100%;
  }
</style>
