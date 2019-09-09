import React from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebaseConfig.js";
import logo from "../logo.svg";
import API from "../utils/API.js";

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends React.Component {
  state = {
    LoggedInUser: false
  };

  /* INITIAL RENDER === this.props
FIREBASE PROPS
-user === null <Promise pending>

YOUR PROPS
 this.props.User (this.props.LoggedIn) === false
*/

  /* FIREBASE RESOLVES PROMISE === nextProps
FIREBASE PROPS
nextProps.user === google user information {
  displayName: "Some Name"
}


YOUR PROPS
 nextProps.User (this.props.LoggedIn) === false
*/

//this only works after a pull when you comment out this section
  componentWillReceiveProps(nextProps) {
    if (nextProps.user && nextProps.user.displayName !== this.props.User) {
      this.postUserAPI({
        email: nextProps.user.email,
        displayName: nextProps.user.displayName,
        uid: nextProps.user.uid
      });
    }
  }

  postUserAPI = user => {
    API.postUserByUID(user)
      .then(dbData => {
        this.props.updateGlobalState("User", dbData.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    /* 
    FIREBASE PROPS
    - user
    -signOut
    -signInWithGoogle

    YOUR PROPS
    -User aliased to LoggedIn
    */
    const { user, User: LoggedIn, signOut, signInWithGoogle } = this.props;

    return (
      <>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {LoggedIn && LoggedIn.uid}
            {user ? <p>Hello, {user.displayName}</p> : <p>Please sign in.</p>}
            {user ? (
              <button onClick={signOut}>Sign out</button>
            ) : (
              <button onClick={signInWithGoogle}>Sign in with Google</button>
            )}
          </header>
        </div>
      </>
    );
  }
}
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(Login);
