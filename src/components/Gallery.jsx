import React from "react";

const Gallery = () => {
  const galleryItems = [
    { id: 1, imgSrc: "s18.jpg", description: "Jewellery Description 1" },
    { id: 2, imgSrc: "s19.jpg", description: "Jewellery Description 2" },
    { id: 3, imgSrc: "s11.jpg", description: "Jewellery Description 3" },
    { id: 1, imgSrc: "s18.jpg", description: "Jewellery Description 1" },
    { id: 2, imgSrc: "s19.jpg", description: "Jewellery Description 2" },
    { id: 3, imgSrc: "s11.jpg", description: "Jewellery Description 3" },
    { id: 1, imgSrc: "s18.jpg", description: "Jewellery Description 1" },
    { id: 2, imgSrc: "s19.jpg", description: "Jewellery Description 2" },
    { id: 3, imgSrc: "s11.jpg", description: "Jewellery Description 3" },
    { id: 3, imgSrc: "s11.jpg", description: "Jewellery Description 3" },
  ];

  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto sm:px-4">
        <div className="title flex flex-col items-center justify-center mb-10">
          <div className="w-28 h-0.5 bg-[#b48c56] mt-2 mb-8 "></div>
          <h2 className="text-3xl font-medium font-cardo mb-6 text-center uppercase relative tracking-wider">
            Gallery
          </h2>
        </div>
        <div className="gallery-container flex flex-wrap justify-center gap-10">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="gallery-item w-2/12 p-4  max-sm:w-full max-sm:mx-10 bg-white box-shadow rounded-lg transition-transform hover:scale-105 transition-duration-300  max-"
            >
              <img
                src={item.imgSrc}
                alt={`Jewellery ${item.id}`}
                className="rounded-md object-cover h-64 w-full mb-4"
              />
              <p className="text-center text-sm italic">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
