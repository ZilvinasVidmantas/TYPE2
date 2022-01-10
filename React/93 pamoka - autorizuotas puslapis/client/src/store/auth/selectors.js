export const loggedInSelector = (state) => state.auth.loggedIn;
export const authSelector = (state) => state.auth;
export const userSelector = (state) => state.auth.user;

export default {
  loggedInSelector,
  authSelector,
  userSelector,
};
