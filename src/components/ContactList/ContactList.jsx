import React from "react";

import CardContact from "./CardContact";

function ContactList({ contactList, setContactList }) {
  
  const deleteHandler = (id) => {
    const newContentList = contactList.filter((content) => content.id !== id);
    setContactList(newContentList);
  };

  return (
    <div className="w-[80%] p-6 rounded-xl shadow-lg mt-8">
      <h2 className="text-3xl text-blue-800 my-3">Contact List</h2>
      {!contactList.length ? (
        <p className="text-center bg-gray-300 rounded-lg p-4 font-semibold">
          Cantact List Is Empty!
        </p>
      ) : null}
      <div>
        {contactList.map((contact) => (
          <CardContact
            key={contact.id}
            name={contact.name}
            lastname={contact.lastname}
            email={contact.email}
            phone={contact.phone}
            id={contact.id}
            deleteHandler={deleteHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default ContactList;
