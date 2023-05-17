import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { name, email, phone } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://react-http-b57fe-default-rtdb.firebaseio.com/users.json",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
    console.log(data);
  };

  return (
    <div className="h-96">
      <div className="text-3xl font-bold font-serif text-center mt-4">
        Contact Us
      </div>
      <form
        className="flex flex-col p-2 items-center mx-auto border rounded shadow w-1/3  mt-3"
        onSubmit={handleSubmit}
      >
        <div className="p-1 m-2 flex w-full justify-center">
          <label htmlFor="name" className="font-serif font-semibold mr-2">
            Enter Your Name:
          </label>
          <input
            type="text"
            id="name"
            className="w-1/2 border rounded"
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="p-1 m-2 flex w-full justify-center">
          <label htmlFor="email" className="font-serif font-semibold mr-24">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-1/2 border rounded"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className="p-1 m-2 flex w-full justify-center">
          <label htmlFor="phone" className="font-serif font-semibold mr-24">
            Phone:
          </label>
          <input
            type="text"
            id="phone"
            className="w-1/2 border rounded"
            placeholder="Phone"
            value={phone}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="p-2 bg-blue-400 text-white font-semibold rounded-lg m-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
