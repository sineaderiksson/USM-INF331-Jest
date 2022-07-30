import { render, fireEvent, screen } from "@testing-library/react";
import ListContacts from "../components/ListContacts";


test("Renders without crashing", () => {
  render(<ListContacts />);
});


//test block
test("increments counter", () => {
  // render the component on virtual dom
  render(<ListContacts />);

  const startState = [{[id=0, firstName="Lorem", surName0="Ipsum", surName1="Dolor", email="test@mail.com", telephone="090"], handleUpdateClick, handleDeleteClick}];

  //select the elements you want to interact with
  const counter = screen.getByTestId("counter");
  const incrementBtn = screen.getByTestId("increment");

  //interact with those elements
  fireEvent.click(incrementBtn);

  //assert the expected result
  expect(counter).toHaveTextContent("1");
});
