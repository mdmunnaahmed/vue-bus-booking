export default {
  setUser(state, payload) {
    (state.token = payload.token),
      (state.userId = payload.userId),
      (state.tokenExpiration = payload.tokenExpiration);
  },
  didAutoLogout(state) {
    state.didAutoLogout = true;
  },
  updateUser(state, payload) {
    state.userInfo = payload;
  },
};
