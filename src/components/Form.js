import React, { Component } from "react"
import EntryForm from "./EntryForm"
import firebase from "firebase"
import "firebase/firestore"

export default class Form extends Component {
  state = {
    db: null,
  }
  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAtWu7xsWjI6FSEIasUeVtS3ze_9er8Ie4",
      authDomain: "gatsby-comps-page.firebaseapp.com",
      projectId: "gatsby-comps-page",
    })
    const db = firebase.firestore()
    this.setState({ db })
  }

  componentWillUnmount() {
    const unsubscribe = this.state.db;
    unsubscribe();
  }

  emailRef = React.createRef()
  firstNameRef = React.createRef()
  lastNameRef = React.createRef()
  phoneRef = React.createRef()
  pcodeRef = React.createRef()
  resStateRef = React.createRef()
  answerRef = React.createRef()
  tandcRef = React.createRef()

  createEntry = e => {
    e.preventDefault()
    this.state.db
      .collection("Entries")
      .add({
        email: this.emailRef.current.value,
        firstName: this.firstNameRef.current.value,
        lastName: this.lastNameRef.current.value,
        phone: this.phoneRef.current.value,
        pcode: this.pcodeRef.current.value,
        resState: this.resStateRef.current.value,
        answer: this.answerRef.current.value,
        tandc: this.tandcRef.current.value,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id)
        alert("Good Luck!")
      })
      .catch(function (error) {
        console.log("Error adding document:", error)
      })
    e.currentTarget.reset();
   }

  render() {
    return (
      <EntryForm>
        <form onSubmit={this.createEntry}>
          <input
            id="email"
            type="email"
            name="email"
            ref={this.emailRef}
            placeholder="Email address"
            required
          />
          <fieldset id="names">
            <input
              id="firstName"
              type="text"
              name="firstName"
              ref={this.firstNameRef}
              placeholder="First Name"
              required
            />
            <input
              id="lastName"
              type="text"
              name="lastName"
              ref={this.lastNameRef}
              placeholder="Last Name"
              required
            />
          </fieldset>

          <fieldset id="demo">
            <input
              id="phone"
              type="tel"
              name="phone"
              ref={this.phoneRef}
              placeholder="Phone Number"
              required
              minLength="8"
              maxLength="10"
            />
            <input
              id="pcode"
              type="num"
              name="pcode"
              ref={this.pcodeRef}
              placeholder="Post Code"
              required
              minLength="4"
              maxLength="4"
            />
            <select id="resState" name="resState" ref={this.resStateRef}>
              <option value="nsw">NSW</option>
              <option value="vic">VIC</option>
              <option value="qld">QLD</option>
              <option value="sa">SA</option>
              <option value="wa">WA</option>
              <option value="tas">TAS</option>
              <option value="nt">NT</option>
              <option value="act">ACT</option>
            </select>
          </fieldset>

          <textarea
            id="answer"
            name="answer"
            ref={this.answerRef}
            placeholder="Your answer in 25 words or less ..."
            rows="5"
            cols="30"
            required
          />

          <span>
            <span className="check">
              <input
                id="tandc"
                name="tandc"
                ref={this.tandcRef}
                type="checkbox"
                required
              />
            </span>
            <span className="text">
              <label htmlFor="tandc">Agree to the terms and conditions.</label>
            </span>
          </span>
          <button id="button" name="button" type="submit">
            Submit Your Entry
          </button>
        </form>
      </EntryForm>
    )
  }
}
