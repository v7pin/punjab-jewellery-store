  import React from 'react';

  const Home = () => {
    return (
      <section id="home" className="relative flex justify-center items-center min-h-screen">
        <div className="container mx-auto flex justify-start items-center p-0 md:p-15">
          {/* This div will only show on mobile screens */}
          <div className=" md:hidden w-full h-[60vh] flex items-center justify-center px-5 text-center bg-white bg-opacity-50">
            <div className="text-[#b48c56">
              <h3 className="text-xl sm:text-2xl font-[Bebas Neue]">
                "Discover the Beauty of Simplicity: Elegant Jewellery for Every Occasion."
              </h3>
              <div className="mt-4">
                <button className="px-5 py-2.5 bg-[#b48c56] text-white text-lg font-[Belleza] transition duration-500 ease-in-out transform hover:scale-110">
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </div>
        <video autoPlay loop muted playsInline className="absolute top-0 right-0 bottom-0 w-full h-auto" id="myVideo">
          <source src="Punjab_Jewelers_main.mp4" type="video/mp4" />
        </video>
      </section>
    );
  };

  export default Home;
