function removeLoadingScreen() {
  const loader = document.getElementsByClassName("loader")[0];
  const title = document.getElementsByClassName("title")[0];
  const body = document.body;
  loader.classList.add("hidden");
  body.classList.add("flex");
  title.classList.remove("height100");
}


window.onload = function () {
  const main = document.getElementsByClassName("main-item");
  const secondary = document.getElementsByClassName("secondary");
  const display = document.getElementsByClassName("Bottom")

};


