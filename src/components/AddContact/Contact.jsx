import React, { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import Input from "./Input";

function Contact({ setContactList, contactList }) {
  const [contact, setContact] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState("");

  const changeHandler = (e) => {
    setContact((contact) => ({ ...contact, [e.target.name]: e.target.value }));
  };

  const addContactHandler = () => {
    if (
      !contact.email ||
      !contact.name ||
      !contact.phone ||
      !contact.lastname
    ) {
      setError("Pleas Enter Valid Data");
    } else {
      setError("");
      setContactList([...contactList, { ...contact, id: uuidv4() }]);
      setContact({
        name: "",
        lastname: "",
        email: "",
        phone: "",
      });
    }
  };

  useEffect(() => {
    localStorage.setItem("contactList", JSON.stringify(contactList));
  }, [contactList]);

  return (
    <div className="w-[80%] p-6 rounded-xl shadow-lg mt-8">
      <div className="grid grid-cols-2 gap-3">
        <Input
          placeholder="Name"
          type="text"
          name="name"
          state={contact.name}
          onChange={changeHandler}
        />
        <Input
          placeholder="Last Name"
          type="text"
          name="lastname"
          state={contact.lastname}
          onChange={changeHandler}
        />
        <Input
          placeholder="Email"
          type="email"
          name="email"
          state={contact.email}
          onChange={changeHandler}
        />
        <Input
          placeholder="Phone"
          type="number"
          name="phone"
          state={contact.phone}
          onChange={changeHandler}
        />
      </div>
      <button
        onClick={addContactHandler}
        className="w-full py-2 mt-5 rounded-lg bg-blue-800 text-white"
      >
        Add Contact
      </button>
      {error ? (
        <p className="w-1/2 py-1 bg-red-600 text-white rounded-lg mx-auto text-center mt-4">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default Contact;
