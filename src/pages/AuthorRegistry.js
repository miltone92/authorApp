import React, { useState } from "react";

//Dependencies
import axios from "axios";

//Components
import Section from "../components/main-content/section/Section";
import TextInputBorder from "../components/inputs/TextInputBorder";
import HeaderText from "../components/main-content/header-text/HeaderText";
import FilledButton from "../components/buttons/filledButton/FilledButton";
import Alert from "../components/alert/Alert";

export const AuthorRegistry = () => {
  //state
  const [alert, setAlert] = useState({
    showAlert: false,
    alertText: "",
    alertType: ""
  });

  let getData = () => {
    let fullName = document.getElementById("authorNameInput").value;
    postToApi(fullName);
  };

  let postToApi = fullName => {
    let user = JSON.parse(sessionStorage.getItem("user"));
    // let jws = user.jwt;

    axios
      .post(
        "http://localhost:3000/routes/authors/",
        {
          fullName: fullName
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
          alertText: "Author has been registered!",
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
        <HeaderText>Register Author</HeaderText>
        <TextInputBorder
          type="text"
          placeholder="Author name"
          id="authorNameInput"
        ></TextInputBorder>
        <FilledButton callback={getData}>Add author!</FilledButton>
      </Section>
    </div>
  );
};

export default AuthorRegistry;
