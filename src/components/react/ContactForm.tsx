import React from "react";

export default function ContactForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [message, setMessage] = React.useState("");

  const whatsappNumber = "+233594599267";

  const sendWhatsappMessage = () => {
    // construct a messge for wa.me API with the help of template literals
    const textMessage = `Hi, I am ${name}. With email: ${email} and number: ${number}. I wanted to reach out to you with this message from your website: ${message}`;

    // encode the message for URL
    const encodedMessage = encodeURI(textMessage);

    // construct the URL
    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // open the URL in a new tab
    window.open(url, "_blank");

    // reset the form
    setName("");
    setEmail("");
    setNumber("");
    setMessage("");
  };

  return (
    <form className="flex flex-col gap-5 md:gap-8">
      <p className="text-white text-xl md:text-2xl">Fill The Form</p>

      <h1 className="text-white text-3xl md:text-5xl font-bold">
        Get In Touch
      </h1>

      <input
        type="text"
        placeholder="Your Name"
        className="bg-white text-lg md:text-xl py-2 px-4 rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Your Email"
        className="bg-white text-lg md:text-xl py-2 px-4 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="number"
        placeholder="Your Number"
        className="bg-white text-lg md:text-xl py-2 px-4 rounded"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <textarea
        placeholder="Your Message"
        className="bg-white text-lg md:text-xl py-2 px-4 rounded"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <div>
        <button
          type="submit"
          className="bg-brand-700 text-white text-lg md:text-xl py-2 px-5 rounded"
          onClick={(e) => {
            e.preventDefault();
            sendWhatsappMessage();
          }}
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
