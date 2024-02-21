import React, { useState } from "react";
import Contact from "./components/AddContact/Contact";
import ContactList from "./components/ContactList/ContactList";
import Header from "./components/Header";

function App() {
  const [contactList, setContactList] = useState([]);

  return (
    <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
      <Header />
      <Contact setContactList={setContactList} contactList={contactList} />
      <ContactList contactList={contactList} setContactList={setContactList} />
    </div>
  );
}

export default App;
