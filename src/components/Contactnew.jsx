import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaTimesCircle,
} from "react-icons/fa";

const ContactUs = () => {
  const [contactNumber, setContactNumber] = useState("");

  const handleNumberChange = (e) => {
    setContactNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Contact Number submitted:", contactNumber);
    setContactNumber(""); // Clear the input after submission
  };

  return (
    <footer className="bg-[url('bg3.png')] bg-no-repeat bg-cover" id="contactus">
      <section id="footer" className="flex flex-col items-center p-5">
        <div className="content w-full md:w-11/12 max-sm:w-full max-sm:flex-col bg-[#f2d2a3] flex flex-col md:flex-row md:items-center md:justify-between p-10">
          <div className="left w-full max-sm:w-full md:w-1/2">
            <h1 className="text-4xl font-medium tracking-widest font-bebas mb-5 max-sm:text-2xl">
              Get in touch for inquiries
            </h1>
            <p className="font-belleza text-lg max-sm:text-base ">
              Have questions or need further information? Leave your number and
              our team will call you back.
            </p>
          </div>
          <div className="right w-full max-sm:w-full max-sm:mt-2 md:w-1/5 mt-5 max-sm:mx-5 mx-40 md:mt-0">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row md:items-center  max-sm:flex-col "
            >
              <input
                type="tel"
                placeholder="ENTER YOUR NUMBER"
                value={contactNumber}
                onChange={handleNumberChange}
                className="mb-3 md:mb-0 md:mr-3 p-3 px-16 border-none outline-none max-sm:px-6 "
                pattern="[0-9]{10}"
                title="Ten digit contact number"
              />
              <button
                type=""
                className="p-3 bg-[#302725] text-white cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        {/* Additional Info and Map Sections */}
        <div className="flex flex-wrap justify-between mt-8 md:px-0 ">
          {/* Info Sections */}
          <div
            className="w-full md:w-1/2 py-4 flex justify-start  items-start px-48 space-x-12"
            style={{ paddingLeft: "0px" }}
          >
            <div className="w-1/3 px-16 py-2 max-sm:w-full" style={{ paddingLeft: "0px" }}>
              <div
                className="flex flex-col items-start flex-1 flex-nowrap"
                style={{ paddingLeft: "10px", paddingRight: "50px" }}
              >
                <h2 className="text-lg font-semibold mb-4">Our Information</h2>
                <p className="mb-2">Punjab, India</p>
                <p>+91 xxxxxxxxxx</p>
              </div>
            </div>

            <div className="w-1/3 px-4 py-2 max-sm:w-full">
              <div className="flex flex-col items-start">
                <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                <a
                  href="#"
                  className="mb-2 transition-colors text-gray-700 hover:text-[#b48c56]"
                >
                  Featured
                </a>
                <a
                  href="#"
                  className="mb-2 transition-colors text-gray-700 hover:text-[#b48c56]"
                >
                  Gallery
                </a>
                <a
                  href="#"
                  className="mb-2 transition-colors text-gray-700 hover:text-[#b48c56]"
                >
                  Collections
                </a>
                <a
                  href="#"
                  className="transition-colors text-gray-700 hover:text-[#b48c56]"
                >
                  New Arrivals
                </a>
              </div>
            </div>

            <div className="w-1/3 px-4 py-2 max-sm:w-full">
              <div className="flex flex-col items-start">
                <h2 className="text-lg font-semibold mb-4">Social Media</h2>
                <div className="flex flex-col items-center space-y-2">
                  <a
                    href="https://facebook.com"
                    className="text-3xl text-[#4267B2] my-2"
                  >
                    <FaFacebookSquare />
                  </a>
                  <a
                    href="https://instagram.com"
                    className="text-3xl text-[#C13584] my-2"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://twitter.com"
                    className="text-3xl text-[#1DA1F2]"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full md:w-1/2 p-2 mt-4 max-sm:w-full max-sm:px-16 ">
            <h2 className="text-xl font-semibold mb-4">Our Location</h2>
            <div className="map mb-12 w-full overflow-hidden rounded-lg shadow-md">
              <iframe
                title="Our Location in Punjab"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83967172376!2d74.84238191703053!3d31.52036960000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045a5ecde3b1%3A0x4007a7f1bd16aa0!2sPunjab%2C%20India!5e0!3m2!1sen!2sus!4v1662044332349!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#b48c56] h-0.5 my-5"></div>
        <p className="text-lg text-[#302725] uppercase">
          All rights reserved | Punjab Jewellery Store
        </p>
      </section>
    </footer>
  );
};

export default ContactUs;
