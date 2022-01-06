export const loggedInSelector = (state) => state.auth.loggedIn;
export const authSelector = (state) => state.auth;

export default {
  loggedInSelector,
  authSelector,
};
