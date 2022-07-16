import React, { useState } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import LoggedIn from "./components/state/LoggedIn";
import Status from "./components/Status";
import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import User from "./components/context/User";

function App() {
  const [inputValue, setInputValue] = useState("");
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Antony",
      last: "Chiramel",
    },
    {
      first: "DG",
      last: "Rohan",
    },
    {
      first: "Harishankar",
      last: "S",
    },
  ];

  return (
    <>
      {/* <Greet name="Antony" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Antony Chiramel</Heading>
      </Oscar>
      <Button
        handleClick={() => {
          console.log("Button Clicked");
        }}
        handleClickWithEvent={(event, id) => {
          console.log("Button Clicked with Event: ", event, id);
        }}
      />
      <Input
        value={inputValue}
        handleChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} /> */}
      {/* <LoggedIn />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </>
  );
}

export default App;
