let timer;

export default {
  async signup(context, payload) {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyClfObqzsgrXQVSBl9GW26KJKLOJR9-G54`,
      {
        method: "POST",
        body: JSON.stringify({
          name: payload.name,
          password: payload.password,
          email: payload.email,
          returnSecureToken: true,
        }),
      }
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failded to authenticate"
      );
      throw error;
    }

    const expiresIn = responseData.expiresIn * 24 * 365;
    // const expiresIn = 5000
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem("token", responseData.idToken);
    localStorage.setItem("userId", responseData.localId);
    localStorage.setItem("tokenExpiration", expirationDate);

    timer = setTimeout(function () {
      context.dispatch("didAutoLogout");
    }, expiresIn);

    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },

  async login(context, payload) {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyClfObqzsgrXQVSBl9GW26KJKLOJR9-G54`,
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failded to authenticate"
      );
      throw error;
    }

    const expiresIn = responseData.expiresIn * 24 * 365;
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem("token", responseData.idToken);
    localStorage.setItem("userId", responseData.localId);
    localStorage.setItem("tokenExpiration", expirationDate);

    timer = setTimeout(function () {
      context.dispatch("didAutoLogout");
    }, expiresIn);

    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
    });
  },

  tryLogin(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const tokenExpiration = localStorage.getItem("tokenExpiration");
    const expiresIn = +tokenExpiration - new Date().getTime();
    if (expiresIn < 0) {
      return;
    }
    timer = setTimeout(function () {
      context.dispatch("didAutoLogout");
    }, expiresIn);

    if (token && userId) {
      context.commit("setUser", {
        token: token,
        userId: userId,
        tokenExpiration: null,
      });
    }
  },

  logout(context) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("tokenExpiration");

    clearTimeout(timer);

    context.commit("setUser", {
      token: null,
      userId: null,
    });
  },

  autoLogout(context) {
    context.dispatch("logout");
    context.commit("didAutoLogout");
  },

  async updateUser(context, payload) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    const userdata = {
      // For Customers
      name: payload.name,
      age: payload.age,
      gender: payload.gender,
      mobile: payload.mobile,
      email: payload.email,
    };

    const response = await fetch(
      `https://bus-booking-155ef-default-rtdb.asia-southeast1.firebasedatabase.app/users/${userId}.json?auth=` +
        token,
      {
        method: "PUT",
        body: JSON.stringify(userdata),
      }
    );

    // const responseData = await response.json()
    if (!response.ok) {
      // error
    }
    context.commit("updateUser", userdata);
  },

  async loadUser(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    const response = await fetch(
      `https://bus-booking-155ef-default-rtdb.asia-southeast1.firebasedatabase.app/users/${userId}.json?auth=` +
        token
    );
    const responseData = await response.json();
    if (!response.ok) {
      // response
    }
    if (responseData == null) {
      return;
    }
    const userInfo = {
      // For Customers
      name: responseData.name,
      age: responseData.age,
      gender: responseData.gender,
      mobile: responseData.mobile,
      email: responseData.email,
    };
    console.log(userInfo);
    context.commit("updateUser", userInfo);
  },
};
