import React from "react";

import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";

function CardContact({ name, lastname, email, phone, id, deleteHandler }) {
  return (
    <div className="flex justify-between items-center px-3 py-3 my-3 rounded-xl bg-yellow-400">
      <div className="flex items-center gap-3 text-left">
        <p>
          {name} {lastname}
        </p>
      </div>
      <div className="flex items-center gap-3 text-left">
        <MdAlternateEmail size={23} />
        <p>{email}</p>
      </div>
      <div className="flex items-center gap-3 text-left">
        <FaPhoneAlt size={23} />
        <p>{phone}</p>
      </div>
      <button
        onClick={() => deleteHandler(id)}
        className="flex items-center gap-3 text-left"
      >
        <AiTwotoneDelete size={23} />
      </button>
    </div>
  );
}

export default CardContact;
