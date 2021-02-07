import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";

// var firebaseConfig = {
//   apiKey: "AIzaSyBRIcvigaT1hlB5wFZRDUnGNBgLUPdpkhM",
//   authDomain: "once-more-with-feeling-b6975.firebaseapp.com",
//   projectId: "once-more-with-feeling-b6975",
//   storageBucket: "once-more-with-feeling-b6975.appspot.com",
//   messagingSenderId: "166815563135",
//   appId: "1:166815563135:web:567181d8d7f9e31d2b6e4a",
//   measurementId: "G-5GBV8ZCH3D"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
