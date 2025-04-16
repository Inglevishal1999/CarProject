const HowItWorks = () => {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-12">How RENTCARS Works</h1>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <div className="h-64 bg-gray-200 rounded-lg"></div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">1. Search for a Car</h2>
              <p className="text-gray-700">
                Browse our extensive collection of vehicles. Filter by location, date, and car type to find the perfect match for your needs.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row-reverse items-center mb-12">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pl-8">
              <div className="h-64 bg-gray-200 rounded-lg"></div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">2. Book & Pay Securely</h2>
              <p className="text-gray-700">
                Choose your vehicle and book instantly. Our secure payment system ensures your transaction is safe and hassle-free.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <div className="h-64 bg-gray-200 rounded-lg"></div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">3. Pick Up & Enjoy</h2>
              <p className="text-gray-700">
                Meet the car owner or use our contactless pickup option. Get the keys and enjoy your journey with full insurance coverage.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HowItWorks;