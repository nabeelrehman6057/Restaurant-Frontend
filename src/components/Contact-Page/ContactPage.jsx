import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const ContactPage = () => {
  const [name, setName] = useState();
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitbtn = async (e) => {
    if (!name || !email || !subject || !message) {
      alert("Please Fill Full Contact Form");
    }

    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/contact/send",
        { name, email, subject, message },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Message Send successfully",
      });
      toast.success(data.message);
      setName("");
      setSubject("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="main bg-[#F9F9F7]  grid ">
        {/* Contact Heading */}
        <div className="Heading">
          <div className="container flex justify-center mx-auto max-w-screen-md">
            <div>
              <h1 className=" font-Playfair ipadAir:text-[100px] text-[40px] text-center">
                Contact Us
              </h1>
              <p className=" font-DMSans text-[18px] text-center">
                We consider all the drivers of change gives you the components
                <br /> you need to change to create a truly happens.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <section className="bg-white dark:bg-gray-700 items-center shadow-2xl rounded-3xl mx-8 my-8">
          <div className="py-8 lg:py-16 px-4  mx-auto max-w-screen-md">
            <form className="space-y-8">
              <div>
                <label
                  for="name"
                  className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Enter your Email"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className=" p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Write a subject"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  for="message"
                  className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your message
                </label>

                <textarea
                  id="message"
                  rows="6"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Write your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                onClick={submitbtn}
                className=" bg-red-600 rounded-full text-[20px] font-DMSans font-bold  text-white w-[190px] h-[55px] ipad:w-[400px] hover:bg-blue-500 hover:duration-500 duration-500  "
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
