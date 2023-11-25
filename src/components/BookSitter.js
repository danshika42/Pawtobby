import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function BookSitter() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xauwpl9",
        "template_lkh80rx",
        form.current,
        "Q1evFF5z5q1Ef-BYy"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="mb-12 mt-8">

      <form className="m-auto h-[420px] w-[30%] rounded-md shadow-xl flex flex-col justify-evenly p-8" ref={form} onSubmit={sendEmail}>
        <h1 className="mb-3 mt-4 text-2xl font-medium">Book</h1>
        <label className="text-sm font-medium">Name</label>
        <input required className='border border-gray-200 rounded-md py-1 px-2 mb-2' type="text" name="user_name" />
        <label className="text-sm font-medium">Email</label>
        <input required className='border border-gray-200 rounded-md py-1 px-2 mb-2' type="email" name="user_email" />
        <label className="text-sm font-medium">Message</label>
        <textarea required className='border border-gray-200 rounded-md mb-2 p-2' name="message" />
        <input className="mb-1 mt-2 cursor-pointer rounded-sm border border-[#f8a155] bg-[#f8a155] px-2 py-1 font-medium" type="submit" value="Send" />
      </form>
    </div>
  );
}

export default BookSitter;
