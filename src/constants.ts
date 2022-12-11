export const IMG_URL = "img";
export enum FILTERS {
  ALL = "All",
  ACTIVE = "Active",
  COMPLETED = "Completed",
}
export const ALL_FILTERS = [FILTERS.ALL, FILTERS.ACTIVE, FILTERS.COMPLETED];
export const LOCAL_STORAGE_KEY = "ToDo App";
export const IS_DEFAULT_DARK = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;
