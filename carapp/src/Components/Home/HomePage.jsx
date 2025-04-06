import React, { useState } from "react";
import { Search, Calendar } from "lucide-react";
import Banner from "../../assets/HomePage/best-car-rental-app-banner.png";
import CarRentalPage from "./CarRentalPage ";
import WhyChooseUsSection from "./WhyChooseUsSection";
import PopularRentalDeals from "./PopularRentalDeals";
import ClientSay from "./ClientSay";
import google from "../../assets/HomePage/Car logos/Leanding page logo/Google.jpg";
import AppStore from "../../assets/HomePage/Car logos/Leanding page logo/AppStore.jpg"

const HomePage = () => {
  const [formData, setFormData] = useState({
    inputSearch: "",
    pickupDate: "",
    returnDate: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    // Perform search logic here
  };

  const inputFields = [
    {
      label: "Location",
      placeholder: "Search your location",
      type: "text",
      name: "inputSearch",
      icon: Search,
    },
    {
      label: "Pickup date",
      type: "date",
      name: "pickupDate",
      icon: Calendar,
    },
    {
      label: "Return date",
      type: "date",
      name: "returnDate",
      icon: Calendar,
    },
  ];

  return (
    <div className="bg-blue-50 min-h-screen overflow-hidden relative">
      {/* Background design element */}
      <div className="absolute right-0 top-0 w-2/3 h-full z-0"></div>

      {/* Main content container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero section */}
        <div className="flex flex-col md:flex-row items-center mt-8 md:mt-4">
          {/* Left column */}
          <div className="w-full md:w-1/2 pr-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Find, book and rent a car{" "}
              <span className="text-blue-500">Easily</span>
            </h1>
            <p className="text-gray-600 mb-8">
              Get a car wherever and whenever you need it with your iOS and
              Android device.
            </p>

            {/* App store buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              {/* Google Play */}
              <img src={google} alt="" className="w-28 h-10" />

              {/* App Store */}
              <img src={AppStore} alt="" className="w-32 h-11 mix-blend-multiply" />
            </div>
          </div>

          {/* Right column - Car image */}
          <div className="w-full md:w-1/2 mt-8 md:mt-10">
            <img
              src={Banner}
              alt="Blue sports car"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Search form */}
        <div className="bg-white rounded-lg shadow-lg p-2 flex flex-col md:flex-row mt-8 mb-12">
          {inputFields.map((field, index) => (
            <div
              key={index}
              className={`flex items-center p-3 ${
                index < inputFields.length - 1
                  ? "border-b md:border-b-0 md:border-r"
                  : ""
              } md:w-1/3`}
            >
              <div className="bg-gray-100 p-2 rounded-full mr-3">
                <field.icon size={20} className="text-gray-500" />
              </div>
              <div>
                <div className="text-sm text-gray-500">{field.label}</div>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder || ""}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="text-sm w-60 focus:outline-none"
                />
              </div>
            </div>
          ))}

          <div className="p-3 md:w-1/6">
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Other sections */}
      <CarRentalPage />
      <WhyChooseUsSection />
      <PopularRentalDeals />
      <ClientSay />
    </div>
  );
};

export default HomePage;
