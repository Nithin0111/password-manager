import db, { auth, provider } from "../firebase";
import { SET_USER } from "../actions/actionTypes";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export function setUserApi() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
      })
      .catch((error) => {
        return alert(error.message);
      });
  };
}

export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

export function SignOutApi() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        return alert(error.message);
      });
  };
}

export function postDataApi(payload) {
  console.log(payload.user.email);
  return (dispatch) => {
    db.collection("userData")
      .add({
        actor: {
          user: payload.user.email,
        },
        url: payload.url,
        siteName: payload.siteName,
        email: payload.email,
        securePassword: payload.securePassword,
        notes: payload.notes,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };
}
