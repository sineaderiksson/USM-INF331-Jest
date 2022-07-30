import "./App.css";
import React, { useState, Fragment } from "react";
import data from "./init-data.json";
import { nanoid } from "nanoid";

import ListContacts from "./components/ListContacts";
import UpdateContact from "./components/UpdateContact";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addContactData, setAddContactData] = useState({
    firstName: "",
    surName0: "",
    surName1: "",
    email: "",
    telephone: "",
  });

  const [updateContactData, setUpdateContactData] = useState({
    firstName: "",
    surName0: "",
    surName1: "",
    email: "",
    telephone: "",
  });
  const [updateContactID, setUpdateContactID] = useState(null); //null as long as the user isn't changing the info of a contact

  const handleAddContactData = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newContactData = { ...addContactData };
    newContactData[fieldName] = fieldValue; //Update the part of the object with the new value.

    setAddContactData(newContactData);
  };

  const handleUpdateContactChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newContactData = { ...updateContactData };

    newContactData[fieldName] = fieldValue;

    setUpdateContactData(newContactData);
  };

  const handleAddContactSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(), // let's just hope we won't have ID collisions... hehe
      firstName: addContactData.firstName,
      surName0: addContactData.surName0,
      surName1: addContactData.surName1,
      email: addContactData.email,
      telephone: addContactData.telephone,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleUpdateContactSubmit = (event) => {
    event.preventDefault();

    const updatedContact = {
      id: updateContactID,
      firstName: updateContactData.firstName,
      surName0: updateContactData.surName0,
      surName1: updateContactData.surName1,
      email: updateContactData.email,
      telephone: updateContactData.telephone,
    };

    const newContacts = [...contacts];
    const index = contacts.findIndex(
      (contact) => contact.id === updateContactID
    );

    newContacts[index] = updatedContact;
    setContacts(newContacts);
    setUpdateContactID(null);
  };

  const handleUpdateClick = (event, contact) => {
    event.preventDefault();

    setUpdateContactID(contact.id);
    const formValues = {
      firstName: contact.firstName,
      surName0: contact.surName0,
      surName1: contact.surName1,
      email: contact.email,
      telephone: contact.telephone,
    };

    setUpdateContactData(formValues);
  };

  const handleCancelClick = () => {
    setUpdateContactID(null);
  };

  const handleDeleteClick = (contact) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex(
      (contact) => contact.id === updateContactID
    );

    newContacts.splice(index, 1); //remap the
    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <h1>Add Contact</h1>
      <form onSubmit={handleAddContactSubmit}>
        <input
          type="text"
          name="firstName"
          required="required"
          placeholder="First Name"
          onChange={handleAddContactData}
        />
        <input
          type="text"
          name="surName0"
          required="required"
          placeholder="First Surname"
          onChange={handleAddContactData}
        />
        <input
          type="text"
          name="surName1"
          required="required"
          placeholder="Second surname"
          onChange={handleAddContactData}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="E-mail"
          onChange={handleAddContactData}
        />
        <input
          type="text"
          name="telephone"
          required="required"
          placeholder="Phone Number"
          onChange={handleAddContactData}
        />
        <button type="submit" data-testid="add">
          Add
        </button>
      </form>

      <form onSubmit={handleUpdateContactSubmit}>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>First Surname</th>
              <th>Second Surname</th>
              <th>E-mail Address</th>
              <th>Phone Number</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {updateContactID === contact.id ? (
                  <UpdateContact
                    updateContactData={updateContactData}
                    handleUpdateContactChange={handleUpdateContactChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ListContacts
                    contact={contact}
                    handleUpdateClick={handleUpdateClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default App;
