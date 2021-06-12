import db, { auth, provider } from "../firebase";
import { SET_USER, SET_USER_DATA } from "../actions/actionTypes";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export const getData = (payload) => ({
  type: SET_USER_DATA,
  payload: payload,
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
        user: payload,
        url: payload.url,
        siteName: payload.siteName,
        email: payload.email,
        securePassword: payload.securePassword,
        notes: payload.notes,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        dispatch(getData(payload));
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };
}

export function getDataApi(payload) {
  console.log(payload);
  return (dispatch) => {
    let payload2;
    db.collection("userData")
      .where("actor.user", "==", payload.email)
      .get()
      .then((querySnapshot) => {
        payload2 = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          userData: doc.data(),
        }));
        dispatch(getData(payload2));
      })
      .catch((error) => {
        return alert(error.message);
      });
  };
}
