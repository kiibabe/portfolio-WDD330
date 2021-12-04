import { SpotifyAuth } from "./LoginController.js";
import { SpotifyController } from "./SpotifyController.js";
import { StatsController } from "./StatsController.js";

const authModule = new SpotifyAuth();

authModule.getAuthToken();

if (authModule.token) {
  document.getElementById("login").setAttribute("hidden", true);
  document.getElementById("overlay").style.display = "block";
  document.getElementById("overlay").style. backgroundColor = "transparent";
  document.getElementById("content").removeAttribute("hidden");
  document.getElementById("stats").removeAttribute("hidden");
  document.getElementById("header").removeAttribute("hidden");
  document.getElementById("save").removeAttribute("hidden");
  document.getElementById("tracks").removeAttribute("hidden");
  document.getElementById("artists").removeAttribute("hidden");

  document.querySelector("body").style.background = "white";

  const spotifyController = new SpotifyController(authModule.token);
  spotifyController.renderUserData();
  spotifyController.renderTopTracksData();
  spotifyController.renderTopArtistsData();

  const statsController = new StatsController();
  document.getElementById("saveStats").onclick = () => {
    statsController.getStatsCanvas()
  };
}

document.getElementById("auth").onclick = () => {
  authModule.startAuth();
}