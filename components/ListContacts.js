import React from "react";

const ListContacts = ({ contact, handleUpdateClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.firstName}</td>
      <td>{contact.surName0}</td>
      <td>{contact.surName1}</td>
      <td>{contact.email}</td>
      <td>{contact.telephone}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleUpdateClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ListContacts;
