import { SpotifyService } from "./SpotifyService.js";

export class SpotifyController {
  constructor(token) {
    this.spotifyService = new SpotifyService(token);
    this.trackElement = document.getElementById("topTracks");
    this.artistElement = document.getElementById("topArtists");
    this.trackHeaders = ["Name", "Artist(s)", "Album", "Image"];
    this.artistHeaders = ["Name", "Genre(s)", "Followers", "Image"];
  }

  async renderUserData() {
    // Get user info
    let user = await this.spotifyService.getCurrentUser();
    // Render
    let content = document.getElementById("loginMessage");
    content.innerHTML = `Welcome ${user.display_name}`;
    let emailLine = document.getElementById("userEmail");
    emailLine.innerHTML = `Your email is: ${user.email}`;
  }
  
  async renderTopTracksData() {
    // Get top tracks
    let tracks = await this.spotifyService.getTopTracks();
    // Setup table
    let thead = this.trackElement.createTHead();
    let row = thead.insertRow();
    this.trackHeaders.forEach(h => {
      let th = document.createElement("th");
      let text = document.createTextNode(h);
      th.appendChild(text);
      row.appendChild(th);
    });
    tracks.items.forEach(async track => {
      // Track Name
      let row = this.trackElement.insertRow();
      let cell = row.insertCell();
      let text = document.createTextNode(track.name);
      cell.appendChild(text);
      // Artists
      cell = row.insertCell();
      let artists = track.artists.map(artist => {return artist.name}).join(', ');
      text = document.createTextNode(artists);
      cell.appendChild(text);
      // Album Name
      cell = row.insertCell();
      text = document.createTextNode(track.album.name);
      cell.appendChild(text);
      // Image
      let albumImage = await this.spotifyService.getAlbumImage(track.album.href);
      cell = row.insertCell();
      var img = document.createElement('img');
      img.src = albumImage[albumImage.length - 1].url;
      img.height = 60;
      img.width = 60;
      cell.appendChild(img);
    });
  }

  async renderTopArtistsData() {
    // Get top tracks
    let artists = await this.spotifyService.getTopArtists();
    // Setup table
    let thead = this.artistElement.createTHead();
    let row = thead.insertRow();
    this.artistHeaders.forEach(h => {
      let th = document.createElement("th");
      let text = document.createTextNode(h);
      th.appendChild(text);
      row.appendChild(th);
    });
    artists.items.forEach(artist => {
      // Artist Name
      let row = this.artistElement.insertRow();
      let cell = row.insertCell();
      let text = document.createTextNode(artist.name);
      cell.appendChild(text);
      // Genres
      cell = row.insertCell();
      let genres = artist.genres.join(', ');
      text = document.createTextNode(genres);
      cell.appendChild(text);
      // Followers
      cell = row.insertCell();
      text = document.createTextNode(artist.followers.total);
      cell.appendChild(text);
      // Image
      cell = row.insertCell();
      var img = document.createElement('img');
      img.src = artist.images[artist.images.length - 1].url;
      img.height = 60;
      img.width = 60;
      cell.appendChild(img);
    });
  }
}