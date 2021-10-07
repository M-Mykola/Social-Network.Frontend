import "../App.css";
import React, { useState } from "react";
import { EditUser } from "../API/ApiRequest";
import TextField from "@material-ui/core/TextField";
import { isInvalidEmail, isInvalidName } from "../Validation/Validation";
import { Button } from "@material-ui/core";

function UpdateUser(data) {
  const user = data.location.state.item;
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [nameHasError, setNameErrorFlag] = useState(false);
  const [emailError, setEmailErrorFlag] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const HandleChangeName = (event) => {
    const nameValidation = isInvalidName(event.target.value);
    if (name && nameValidation) {
      setNameErrorFlag(true);
      setNameErrorMessage(nameValidation.errorMessage);
    } else {
      setNameErrorMessage("");
      setNameErrorFlag(false);
    }
    setName(event.target.value);
  };

  const HandleChangeEmail = (event) => {
    const emailValidation = isInvalidEmail(event.target.value);
    if (email && emailValidation) {
      setEmailErrorFlag(true);
      setEmailErrorMessage(emailValidation.errorMessage);
    } else {
      setEmailErrorMessage("");
      setEmailErrorFlag(false);
    }
    setEmail(event.target.value);
  };

  const update = async () => {
    try {
      await EditUser(name, email, user._id);
    } catch (e) {
      console.error(e);
    }
    return;
  };

  return (
    <div className={"editUserForm"}>
      <div className="editInput">
        <TextField
          error={nameHasError}
          label={"Name:"}
          value={name}
          onChange={(e) => HandleChangeName(e)}
          helperText={nameErrorMessage}
        />
      </div>
      <div className="input-container">
        <TextField
          error={emailError}
          label={"Email:"}
          value={email}
          onChange={(e) => HandleChangeEmail(e)}
          helperText={emailErrorMessage}
        />
      </div>
      <div className="button-container">
        <Button onClick={update} variant="contained">
          Click to update and save user
        </Button>
      </div>
    </div>
  );
}
export default UpdateUser;
