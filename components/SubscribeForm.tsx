"use client";

import axios from "axios";
import { robotoMonoFont, montserratFont } from "@/utilities/fonts";
import { useState } from "react";

export default function FormComponent() {
  const [userType, setUserType] = useState<string | null>(null);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    // userType is here

    try {
      // Make a POST request to your serverless function
      const userTypeFinal = userType ? userType : "Not Specified";
      const response = await axios.post("/api/subscribe", {
        firstName,
        lastName,
        email,
        userTypeFinal,
      });

      // Handle the response (e.g., show a success message)
      console.log("Form submission successful:", response.data);
    } catch (error) {
      // Handle errors
      console.error("Form submission failed:", error);
    }
  };

  return (
    <div className='flex flex-col gap-16 mx-auto'>
      <h1
        className={`${robotoMonoFont.className} text-3xl md:text-4xl font-thin`}
      >
        Interested? Subscribe to Our Email List
      </h1>
      <form
        onSubmit={handleSubmit}
        className={`text-white text-lg ${montserratFont.className} flex flex-col gap-6 mx-auto w-full border-[#FE5DA8] border rounded-xl p-8`}
      >
        <div className='relative h-20 flex flex-col gap-3'>
          <input
            className='w-full z-10 absolute bottom-0 left-0 peer bg-transparent rounded-xl pl-2 py-2 border border-[#DDDDDD]'
            type='text'
            name='firstName'
            required
          />
          <label
            htmlFor='firstName'
            className='absolute left-2 bottom-2 peer peer-valid:bottom-14 peer-focus:bottom-14 transition-all duration-500 ease-in-out'
          >
            First Name
          </label>
        </div>

        <div className='relative h-20 flex flex-col gap-3'>
          <input
            className='w-full z-10 absolute bottom-0 left-0 peer bg-transparent rounded-xl pl-2 py-2 border border-[#DDDDDD]'
            type='text'
            name='lastName'
            required
          />
          <label
            htmlFor='lastName'
            className='absolute left-2 bottom-2 peer peer-valid:bottom-14 peer-focus:bottom-14 transition-all duration-500 ease-in-out'
          >
            Last Name
          </label>
        </div>

        <div className='relative h-20 flex flex-col gap-3'>
          <input
            className='w-full z-10 absolute bottom-0 left-0 peer bg-transparent rounded-xl pl-2 py-2 border border-[#DDDDDD]'
            type='text'
            name='email'
            required
          />
          <label
            htmlFor='email'
            className='absolute left-2 bottom-2 peer peer-valid:bottom-14 peer-focus:bottom-14 transition-all duration-500 ease-in-out'
          >
            Email
          </label>
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor='userType'>Which Best Describes You?</label>
          <div className='grid grid-cols-2'>
            <label className='flex items-center'>
              <input
                type='radio'
                name='userType'
                value='Investor'
                className='hidden'
                onClick={() => {
                  setUserType("Investor");
                  console.log(userType);
                }}
                required
              />
              <span
                className={`${
                  userType === "Investor" ? "bg-blue-500" : ""
                } transition duration-100 ease-out w-6 h-6 rounded-full border border-gray-400 mr-2 flex items-center justify-center`}
              ></span>
              Investor
            </label>
            <label className='flex items-center'>
              <input
                type='radio'
                name='userType'
                value='Curious Mind'
                className='hidden'
                onClick={() => {
                  setUserType("Curious Mind");
                  console.log(userType);
                }}
                required
              />
              <span
                className={`${
                  userType === "Curious Mind" ? "bg-blue-500" : ""
                } transition duration-100 ease-out w-6 h-6 rounded-full border border-gray-400 mr-2 flex items-center justify-center`}
              ></span>
              Curious Mind
            </label>
          </div>
        </div>

        <button
          className={`bg-[#FE5DA8] w-fit mx-auto px-5 py-3 ${montserratFont.className} hover:opacity-70 font-light text-xl text-black`}
          type='submit'
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
