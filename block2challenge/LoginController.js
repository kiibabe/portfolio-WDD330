export class SpotifyAuth {
  constructor() {
    this.token = null;
    this.clientId = "6421d27b5cf94b49a275c78c46437f15";
    this.redirectUrl = "http://localhost:8081";
    this.scope = 'user-read-private user-read-email user-top-read';
  }

  startAuth() {
    let url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${this.clientId}&scope=${this.scope}&redirect_uri=${this.redirectUrl}`;
    window.location = url;
  }

  getAuthToken() {
    try {
      let separatedUrl = window.location.href.split("#");
      if (separatedUrl.length > 1) {
        let queryParams = separatedUrl[1];
        let accessToken = queryParams.split("&")[0].replace("access_token=", "");
        if (accessToken) {
          this.token = accessToken;
        }
      } else {
        console.log("User not authed.")
      }
    } catch (error) {
      console.log(error);
    }
  }
}