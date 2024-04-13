import React, { useState } from "react";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

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
    <footer
      className="bg-[url('bg3.png')] bg-no-repeat bg-cover"
      id="contactus"
    >
      <section id="footer" className="flex flex-col items-center p-5">
        <div className="content w-full md:w-11/12 bg-[#f2d2a3] flex flex-col md:flex-row items-center justify-between p-10">
          <div className="left w-full md:w-1/2 mb-5 md:mb-0">
            <h1 className="text-4xl font-medium tracking-widest font-bebas mb-5 ">
              Get in touch for inquiries
            </h1>
            <p className="font-belleza text-lg  ">
              Have questions or need further information? Leave your number and
              our team will call you back.
            </p>
          </div>
          <div className="right w-full md:w-1/5 mt-5 md:mt-0 md:mr-20">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row items-center "
            >
              <input
                type="tel"
                placeholder="ENTER YOUR NUMBER"
                value={contactNumber}
                onChange={handleNumberChange}
                className="mb-3 md:mb-0 md:mr-3 p-3 px-6 border-none outline-none"
                pattern="[0-9]{10}"
                title="Ten digit contact number"
              />
              <button
                type="submit"
                className="p-3 bg-[#302725] text-white cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 mt-10 hidden md:block ">
          {/* Outer Flex Container for all Sections */}
          <div className="flex flex-wrap justify-between items-start">
            {/* Inner Flex Container for Info and Links */}
            <div className="flex-1">
              {/* Info Sections Container */}
              <div className="flex flex-wrap justify-between align-middle lg:justify-start lg:space-x-10">
                {/* Information Section */}
                <div className="info-section flex-auto lg:flex-1 px-2 py-2">
                  <h2 className="text-lg font-semibold mb-4">
                    Our Information
                  </h2>
                  <p className="mb-2">Punjab, India</p>
                  <p>+91 xxxxxxxxxx</p>
                </div>

                {/* Quick Links Section */}
                <div className="quick-links flex-auto lg:flex-1 px-2 py-2 ">
                  <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                  <ScrollLink
        to="featured"
        smooth={true}
        duration={500}
        className="block mb-2 transition-colors text-gray-700 hover:text-[#b48c56] cursor-pointer"
      >
        Featured
      </ScrollLink>
      <ScrollLink
        to="gallery"
        smooth={true}
        duration={500}
        className="block mb-2 transition-colors text-gray-700 hover:text-[#b48c56] cursor-pointer"
      >
        Gallery
      </ScrollLink>
      <ScrollLink
        to="collections"
        smooth={true}
        duration={500}
        className="block mb-2 transition-colors text-gray-700 hover:text-[#b48c56] cursor-pointer"
      >
        Collections
      </ScrollLink>
      <ScrollLink
        to="new-arrivals" // Make sure to use the correct id for the section
        smooth={true}
        duration={500}
        className="block transition-colors text-gray-700 hover:text-[#b48c56] cursor-pointer"
      >
        New Arrivals
      </ScrollLink>
                </div>

                {/* Social Media Section */}
                <div className="social-media flex-auto lg:flex-1 px-2 py-2">
                  <h2 className="text-lg font-semibold mb-4 text-center">
                    Social Media
                  </h2>
                  <div className="flex flex-col space-y-4 items-center">
                    <a
                      href="https://facebook.com"
                      className="text-3xl text-[#4267B2]"
                    >
                      <FaFacebookSquare />
                    </a>
                    <a
                      href="https://instagram.com"
                      className="text-3xl text-[#C13584]"
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
            <div className="map-section flex-1 mt-8 lg:mt-0 lg:ml-8">
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
        </div>
        {/* Mobile-specific Div */}
        {/* Mobile-specific Div */}
        <div className="container mx-auto px-4 mt-10 block md:hidden">
          {/* Mobile Outer Flex Container */}
          <div className="flex flex-col items-center">
            {/* Mobile Inner Flex Container for Info and Links */}
            <div className="w-full">
              {/* Mobile Info Sections Container */}
              <div className="flex flex-col space-y-6 items-center">
                {/* Information Section */}
                <div className="info-section w-full px-2 py-2 text-center">
                  <h2 className="text-lg font-semibold mb-4">
                    Our Information
                  </h2>
                  <p className="mb-2">Punjab, India</p>
                  <p>+91 xxxxxxxxxx</p>
                </div>

                {/* Quick Links Section */}
                <div className="quick-links w-full px-2 py-2 text-center">
                  <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                  <ScrollLink
                    to="featured"
                    smooth={true}
                    duration={500}
                    className="block mb-2 transition-colors text-gray-700 hover:text-[#b48c56] cursor-pointer"
                  >
                    Featured
                  </ScrollLink>
                  <ScrollLink
                    to="gallery"
                    smooth={true}
                    duration={500}
                    className="block mb-2 transition-colors text-gray-700 hover:text-[#b48c56] cursor-pointer"
                  >
                    Gallery
                  </ScrollLink>
                  <ScrollLink
                    to="collections"
                    smooth={true}
                    duration={500}
                    className="block mb-2 transition-colors text-gray-700 hover:text-[#b48c56] cursor-pointer"
                  >
                    Collections
                  </ScrollLink>
                  <ScrollLink
                    to="new-arrivals" // Make sure to use the correct id for the section
                    smooth={true}
                    duration={500}
                    className="block transition-colors text-gray-700 hover:text-[#b48c56] cursor-pointer"
                  >
                    New Arrivals
                  </ScrollLink>
                </div>

                {/* Social Media Section */}
                <div className="social-media w-full px-2 py-2">
                  <h2 className="text-lg font-semibold mb-4 text-center">
                    Social Media
                  </h2>
                  <div className="flex justify-center space-x-4">
                    <a
                      href="https://facebook.com"
                      className="text-3xl text-[#4267B2]"
                    >
                      <FaFacebookSquare />
                    </a>
                    <a
                      href="https://instagram.com"
                      className="text-3xl text-[#C13584]"
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

            {/* Mobile Map Section */}
            <div className="map-section w-full mt-8">
              <h2 className="text-xl font-semibold mb-4 text-center">
                Our Location
              </h2>
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
        </div>

        <div className="w-full bg-[#b48c56] h-0.5 my-5"></div>
        <p className="text-sm  text-[#302725] uppercase md:text-xl">
          All rights reserved | Punjab Jewellery Store
        </p>
      </section>
    </footer>
  );
};

export default ContactUs;
