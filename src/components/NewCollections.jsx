import React from "react";
import { FiPhone } from "react-icons/fi"; // Icon for phone
import "./NewCollections.css"; // Ensure your CSS file has the necessary styles
import { useState } from "react";

const NewCollections = () => {
  const items = [
    { id: 1, imgSrc: "j15.jpeg", title: "Ambar" },
    { id: 2, imgSrc: "j11.jpeg", title: "Safira" },
    { id: 3, imgSrc: "j26.jpeg", title: "Topaz" },
    { id: 4, imgSrc: "j7.jpeg", title: "Pearl" },
  ];

  const [isContactModalOpen, setisContactModalOpen] = useState(false);

  const handleContactClick = () => {
    setisContactModalOpen(true);
  };

  const handleCloseModal = () => {
    setisContactModalOpen(false);
  };

  return (
    <section id="newcollections" className="py-24 bg-white   mb-20">
      <div className="container mx-auto">
      <div className="title flex flex-col items-center justify-center mb-10">
          <div className="w-24 h-0.5 bg-[#b48c56] mt-2 mb-8 "></div>
          <h2 className="text-4xl font-medium font-bebas text-center mb-4 uppercase relative tracking-widest">
            Newest
          </h2>
        </div>
        <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="new-collection-card box bg-white rounded-lg shadow-2xl border-t-2 border-l-2 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
            >
              <div className="p-6">
                <div className="label-new bg-customBrown text-white py-1 px-3 inline-block mb-4">
                  New
                </div>{" "}
                {/* Replace with your image tag if needed */}
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="my-4 h-56 w-full object-cover"
                />
                <h1 className="text-3xl font-light mb-4 text-center">
                  {item.title}
                </h1>
                <button
                  className="bg-customBrown hover:bg-customBrownDark text-white w-full py-3 px-4 rounded-lg transition-opacity duration-300 ease-in-out"
                  onClick={handleContactClick}
                >
                  <FiPhone className="inline mr-2" /> Contact Us
                </button>
              </div>
            </div>
          ))}
          {isContactModalOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
              onClick={handleCloseModal}
            >
              <div
                className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-3xl font-semibold mb-4 text-center">
                  Contact Us
                </h2>
                <p className="mb-6 text-center text-gray-600">
                  Please call us at:
                </p>
                <div className="flex justify-center items-center space-x-3 mb-8">
                  <FiPhone size={24} className="text-customBrown" />
                  <span className="text-xl font-medium">+91 xxxxxxxxxx</span>
                </div>
                <button
                  className="mt-4 bg-customBrown hover:bg-customBrownDark text-white font-bold py-2 px-6 rounded-lg focus:outline-none w-full transition duration-300 ease-in-out transform hover:-translate-y-1 active:translate-y-0"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewCollections;
