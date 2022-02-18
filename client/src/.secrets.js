export const secrets = {
  CLIENT_ID: "YOUR SPOTIFY ID",
  REDIRECT_LINK: "YOUR SERVER/LOCALHOST",
  AUTH_URL_LINK: `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=response_type=code&redirect_uri=${$REDIRECT_LINK}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`,
};
