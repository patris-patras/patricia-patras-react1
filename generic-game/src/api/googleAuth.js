// recipe
export const initializeGoogleAuth = async () => {
  return new Promise((resolve) => {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: 'email profile',
      });
    });
  });
};
