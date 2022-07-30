import React from "react";

const UpdateContact = ({
  updateContactData,
  handleUpdateContactChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="firstName"
          required="required"
          placeholder="First Name"
          value={updateContactData.firstName}
          onChange={handleUpdateContactChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="surName0"
          required="required"
          placeholder="First Surname"
          value={updateContactData.surName0}
          onChange={handleUpdateContactChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="surName1"
          required="required"
          placeholder="Second surname"
          value={updateContactData.surName1}
          onChange={handleUpdateContactChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          name="email"
          required="required"
          placeholder="E-mail"
          value={updateContactData.email}
          onChange={handleUpdateContactChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="telephone"
          required="required"
          placeholder="Phone Number"
          value={updateContactData.telephone}
          onChange={handleUpdateContactChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="submit" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default UpdateContact;
