export interface Day {
  eat: boolean;
  alcohol: boolean;
  water: boolean;
  exercise: boolean;
  book: boolean;
}

export interface Progress {
  items: Record<string, Day>;
}

export const emptyDay = {
  eat: false,
  alcohol: false,
  exercise: false,
  water: false,
  book: false
};

export let progress = $state<Progress>({
  items: {}
});

export const getDayKey = (date: Date) => date.toISOString().split("T")[0];

export const getDay = (date: Date): Day => {
    if (progress == null) {
      return emptyDay;
    }
    
    return progress.items[getDayKey(date)] || emptyDay;
}

