import firebase, { firestore } from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyAtWu7xsWjI6FSEIasUeVtS3ze_9er8Ie4",
  authDomain: "gatsby-comps-page.firebaseapp.com",
  projectId: "gatsby-comps-page",
});
// Initialize Firebase

const db = firebase.firestore();
export { firebase };
export default db;
