import React, { useState } from "react";
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";

const BookTablebtn = () => {
  // Define state variables for each form field
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [personCount, setPersonCount] = useState(1);

  // Handle form submission

  const handleReservation = async (e) => {
    if (!name || !date || !time || !phone || !personCount) {
      alert("Please Fill Full Reservation Form!");
    }

    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/reservation/send",
        { date, time, name, phone, personCount },
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
      setPhone("");
      setTime("");
      setDate("");
      setPersonCount(1);

      // navigate("/success");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="main bg-[#F9F9F7]">
        <div className="container flex justify-center mx-auto max-w-screen-md ">
          <div>
            <h1 className=" font-Playfair ipadAir:text-[100px] text-[40px] text-center">
              Book A Table
            </h1>
            <p className=" font-DMSans text-[18px] text-center">
              We consider all the drivers of change gives you the components
              <br /> you need to change to create a truly happens.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-700  items-center shadow-2xl rounded-3xl mx-8 my-8">
          <div className="py-8 lg:py-16 px-4  mx-auto max-w-screen-md grid ">
            <form action="#" className="space-y-8">
              <div>
                <label
                  for="date"
                  className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label
                  for="time"
                  className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Time:
                </label>
                <input
                  type="time"
                  id="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Enter your Email"
                  required
                />
              </div>
              <div>
                <label
                  for="name"
                  className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className=" p-3 w-full  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  for="phone"
                  className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Phone:
                </label>

                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="0300-0000000"
                ></input>
              </div>

              <div className="sm:col-span-2">
                <label
                  for="personCount"
                  className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Total Person:
                </label>

                <input
                  type="number"
                  id="personCount"
                  value={personCount}
                  min="1"
                  onChange={(e) => setPersonCount(e.target.value)}
                  className="block relative p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 "
                ></input>
              </div>
              <button
                type="submit"
                onClick={handleReservation}
                className=" bg-red-600 rounded-full text-[20px] font-DMSans font-bold  text-white w-[190px] h-[55px] ipad:w-[400px] hover:bg-blue-500 hover:duration-500 duration-500  "
              >
                Book A Table
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookTablebtn;
