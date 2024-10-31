import { type Day, type Progress } from './progress-store.svelte';

export class LocalStorageService {

  private STORAGE_KEY="75soft";
  // getProgress returns all the progress items in local storage
  getProgress(): Progress {
    const raw = window.localStorage.getItem(this.STORAGE_KEY);
    if (!raw) {
      return {items: {}};
    }
    return JSON.parse(raw) as Progress;
  }

  saveProgress(progress: Progress) {
    window.localStorage.setItem(this.STORAGE_KEY, JSON.stringify(progress));
  }
}
