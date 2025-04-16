import React from 'react';
import leftAdui from "../../assets/HomePage/Car logos/audi.png";

const WhyChooseUsSection = () => {
  return (
    <div className="w-full bg-blue-50 py-12">
      <div className="max-w-8xl mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left side - Car Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center h-[250px] md:h-[450px] relative mb-8 md:mb-0">
          <img 
            src={leftAdui} 
            alt="Luxury Audi Sports Car" 
            className="w-[90%] max-w-[500px] object-contain mix-blend-multiply"
          />
        </div>

        {/* Right side - Content */}
        <div className="w-full md:w-1/2 md:pl-12">
          <div className="inline-block bg-blue-100 text-blue-600 px-6 py-2 rounded-lg mb-4">
            WHY CHOOSE US
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            We offer the best experience with our rental deals
          </h2>

          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm4 5V6a4 4 0 00-8 0v1h8zm-5 9a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Best price guaranteed</h3>
                <p className="text-gray-600 mt-1">Find a lower price? We'll refund you 100% of the difference.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Experienced driver</h3>
                <p className="text-gray-600 mt-1">Don't have a driver? No worries, we have many experienced drivers for you.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4h3.5a1 1 0 01.8.4L9.8 8H16a1 1 0 011 1v1.6l-3.2 4.8A1 1 0 0113 16H3c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">24 hour car delivery</h3>
                <p className="text-gray-600 mt-1">Book your car anytime and we will deliver it directly to you.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">24/7 technical support</h3>
                <p className="text-gray-600 mt-1">Have a question? Contact Rentcars support anytime you face a problem.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
