import React, { useState } from "react";
import axios from "axios";

//Style
import "./Login.scss";

//Components

import CheckBoxToggle from "../../components/checkBoxToggle/CheckBoxToggle";
import TextInputBorder from "../../components/inputs/TextInputBorder";
import HeaderText from "../../components/main-content/header-text/HeaderText";
import Alert from "../../components/alert/Alert";
import FilledButton from "../../components/buttons/filledButton/FilledButton";

export const Login = () => {
  //state
  const [alert, setAlert] = useState({
    showAlert: false,
    alertText: "",
    alertType: ""
  });

  let onSubmit = () => {
    let input = document.getElementById("emailInput");
    let password = document.getElementById("passwordInput");

    input = input.value;
    password = password.value;

    axios
      .get(
        `http://localhost:8080/api/v1/user/?username=${input}&password=${password}`
      )
      .then(response => {
        if (response.data !== "") {
          sessionStorage.setItem("user", JSON.stringify(response.data));
          window.location.href = "http://localhost:3000/";
        } else {
          setAlert({
            showAlert: true,
            alertText: "Invalid credentials!",
            alertType: "warning"
          });
        }
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
    <div className="login-container">
      <Alert
        show={alert.showAlert}
        text={alert.alertText}
        alertType={alert.alertType}
      />

      <div style={{ width: "50%" }}>
        <HeaderText>Login</HeaderText>
        <TextInputBorder
          type="text"
          placeholder="Email"
          // ref={node => (input = node)}
          id="emailInput"
        ></TextInputBorder>
        <TextInputBorder
          type="password"
          placeholder="Password"
          // ref={node => (password = node)}
          id="passwordInput"
        ></TextInputBorder>
        <CheckBoxToggle label="Remember me" />
        <FilledButton callback={onSubmit}>Login</FilledButton>
      </div>
    </div>
  );
};

export default Login;
