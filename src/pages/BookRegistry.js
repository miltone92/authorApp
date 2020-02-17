import React, { useState } from "react";

//Dependencies
import axios from "axios";

//Components
import Section from "../components/main-content/section/Section";
import TextInputBorder from "../components/inputs/TextInputBorder";
import HeaderText from "../components/main-content/header-text/HeaderText";
import FilledButton from "../components/buttons/filledButton/FilledButton";
import Alert from "../components/alert/Alert";

export const BookRegistry = () => {
  //state
  const [alert, setAlert] = useState({
    showAlert: false,
    alertText: "",
    alertType: ""
  });

  let getData = () => {
    let title = document.getElementById("bookTitleInput").value;
    let author = document.getElementById("bookAuthorInput").value;

    postToApi(title, author);
  };

  let postToApi = (title, author) => {
    let user = JSON.parse(sessionStorage.getItem("user"));
    // let jws = user.jwt;

    axios
      .post(
        "http://localhost:3000/routes/books/",
        {
          title: title,
          author: author
        },
        // {
        //   headers: {
        //     jws: jws
        //   }
        // }
      )
      .then(response => {
        setAlert({
          showAlert: true,
          alertText: "Book has been registered!",
          alertType: "success"
        });
      })
      .catch(e => {
        setAlert({
          showAlert: true,
          alertText: "Error!",
          alertType: "error"
        });
      });
  };

  return (
    <div>
      <Alert
        show={alert.showAlert}
        text={alert.alertText}
        alertType={alert.alertType}
      />
      <Section>
        <HeaderText>Register Book</HeaderText>
        <TextInputBorder
          type="text"
          placeholder="Book title"
          id="bookTitleInput"
        ></TextInputBorder>
        <TextInputBorder
          type="text"
          placeholder="Book author"
          // ref={node => (password = node)}
          id="bookAuthorInput"
        ></TextInputBorder>
        <FilledButton callback={getData}>Add book!</FilledButton>
      </Section>
    </div>
  );
};

export default BookRegistry;
