const triggerDiv = document.getElementById("settings-btn");
const myMenu = document.getElementById("settings-tab");
const themeChanger = document.getElementById("theme-change");
const cards = document.querySelectorAll(".card");
const navCatTrigger = document.getElementById("categories");
const navCat = document.getElementById("category-tab");
const settingsTrigger = document.getElementById("set-sub");
const settingsSubMenu = document.getElementById("setting-sub");
const filterTrigger = document.getElementById("article-filter");
const filterMenu = document.getElementById("filter-tab");

triggerDiv.addEventListener("click", () => {
  myMenu.classList.toggle("hidden-settings");
  navCat.classList.add("hidden-categories");
  settingsSubMenu.classList.add("hidden-settings-sub");
  filterMenu.classList.add("hidden-filter");
});

settingsTrigger.addEventListener("click", () => {
  settingsSubMenu.classList.toggle("hidden-settings-sub");
  navCat.classList.add("hidden-categories");
  filterMenu.classList.add("hidden-filter");
  settingsSubMenu.classList.add("hidden-settings-sub");
});

navCatTrigger.addEventListener("click", () => {
  settingsSubMenu.classList.add("hidden-settings-sub");
  navCat.classList.toggle("hidden-categories");
  filterMenu.classList.add("hidden-filter");
  settingsSubMenu.classList.add("hidden-settings-sub");
});

filterTrigger.addEventListener("click", () => {
  navCat.classList.add("hidden-categories");
  settingsSubMenu.classList.add("hidden-settings-sub");
  filterMenu.classList.toggle("hidden-filter");
});
