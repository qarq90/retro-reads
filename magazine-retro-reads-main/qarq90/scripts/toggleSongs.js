let seeMoreSongs = false;

const seeMore = () => {
  seeMoreSongs = !seeMoreSongs;
  const moreSongs = document.getElementsByClassName("hidden-songs");
  const toggleBtn = document.getElementsByClassName("toggleMoreSongs")[0];

  toggleBtn.textContent = seeMoreSongs ? "...See Less" : "See More...";

  for (let i = 0; i < moreSongs.length; i++) {
    if (seeMoreSongs === true) {
      moreSongs[i].classList.add("show-songs");
    } else {
      moreSongs[i].classList.remove("show-songs");
      moreSongs[i].classList.add("hidden-songs");
    }
  }
};
