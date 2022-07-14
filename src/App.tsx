import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
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
      <Greet name="Antony" messageCount={10} isLoggedIn={false} />
      {/* <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Antony Chiramel</Heading>
      </Oscar> */}
    </>
  );
}

export default App;
