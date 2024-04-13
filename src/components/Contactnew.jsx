import React, { useState } from "react";

const ContactUs = () => {
  const [contactNumber, setContactNumber] = useState("");

  const handleNumberChange = (e) => {
    setContactNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Number submitted:", contactNumber);
    setContactNumber(""); // Clear the input after submission
  };

  return (
    <div className="bg-[url('/path/to/your/background/image')] bg-cover bg-no-repeat p-5">
      <div className="container mx-auto">
        <div className="text-center py-12 bg-[#f2d2a3] mx-5 md:mx-0 rounded-lg">
          <h2 className="text-4xl font-bold mb-4">
            Get in Touch for Inquiries
          </h2>
          <p className="text-lg mb-8">
            Have questions or need further information? Leave your number and
            our team will call you back.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex justify-center items-center gap-4 mb-12"
          >
            <input
              type="tel"
              placeholder="ENTER YOUR NUMBER"
              value={contactNumber}
              onChange={handleNumberChange}
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="text-white bg-[#302725] hover:bg-[#453831] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="flex flex-wrap justify-between mt-8 px-5 md:px-0">
          <div className="w-full md:w-1/4 p-2">
            <div className="flex flex-col items-start">
              <h2 className="text-2xl font-semibold mb-4">Our Information</h2>
              <p className="mb-2">Punjab, India</p>
              <p className="mb-2">+91 xxxxxxxxxx</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 p-2">
            <div className="flex flex-col items-start">
              <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
              <a
                href="#"
                className="mb-2 text-gray-700 hover:text-[#b48c56] transition-colors"
              >
                Featured
              </a>
              <a
                href="#"
                className="mb-2 text-gray-700 hover:text-[#b48c56] transition-colors"
              >
                Gallery
              </a>
              <a
                href="#"
                className="mb-2 text-gray-700 hover:text-[#b48c56] transition-colors"
              >
                Collections
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[#b48c56] transition-colors"
              >
                Newest
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4 p-2">
            <div className="flex flex-col items-start">
              <h2 className="text-2xl font-semibold mb-4">Social Media</h2>
              <a
                href="#"
                className="mb-2 text-gray-700 hover:text-[#b48c56] transition-colors"
              >
                <ion-icon name="logo-facebook" className="mr-2"></ion-icon>{" "}
                Facebook
              </a>
              <a
                href="#"
                className="mb-2 text-gray-700 hover:text-[#b48c56] transition-colors"
              >
                <ion-icon name="logo-instagram" className="mr-2"></ion-icon>{" "}
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[#b48c56] transition-colors"
              >
                <ion-icon name="logo-twitter" className="mr-2"></ion-icon>{" "}
                Twitter
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4 p-2">
          <div className="map mb-12 overflow-hidden rounded-lg shadow-lg">
      <iframe
        title="Our Location in Punjab"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83967172376!2d74.84238191703053!3d31.52036960000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045a5ecde3b1%3A0x4007a7f1bd16aa0!2sPunjab%2C%20India!5e0!3m2!1sen!2sus!4v1662044332349!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
