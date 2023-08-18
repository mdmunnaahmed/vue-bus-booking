export default {
  async signup(context, payload) {
    const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyClfObqzsgrXQVSBl9GW26KJKLOJR9-G54`, {
      method: 'POST',
      body: JSON.stringify({
        name: payload.name,
        password: payload.password,
        email: payload.email,
        returnSecureToken: true
      })
    })
    const responseData = await response.json()

    if (!response.ok) {
      console.log(responseData);
      const error = new Error(responseData.message || 'Failded to authenticate')
      throw error
    }

    console.log(responseData);
    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    })
  },

  async login(context, payload) {
    const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyClfObqzsgrXQVSBl9GW26KJKLOJR9-G54`, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    })
    const responseData = await response.json()

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failded to authenticate')
      throw error
    }

    console.log(responseData);
    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    })
  }


}