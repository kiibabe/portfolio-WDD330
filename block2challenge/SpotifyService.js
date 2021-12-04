import { makeRequest } from "./utilities.js";

export class SpotifyService {
  constructor(token){
    this.baseUrl = "https://api.spotify.com/v1/";
    this.token = token;
  }

  async getCurrentUser() {
    let requestUrl = this.baseUrl + "me";
    try {
      let res = await makeRequest(requestUrl, "GET", null, this.token);
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  async getTopTracks() {
    let requestUrl = this.baseUrl + "me/top/tracks?time_range=long_term&limit=10";
    try {
      let res = await makeRequest(requestUrl, "GET", null, this.token);
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  async getTopArtists() {
    let requestUrl = this.baseUrl + "me/top/artists?time_range=long_term&limit=10";
    try {
      let res = await makeRequest(requestUrl, "GET", null, this.token);
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  async getAlbumImage(url) {
    try {
      let res = await makeRequest(url, "GET", null, this.token);
      return res.images;
    } catch (error) {
      console.log(error);
    }
  }
}