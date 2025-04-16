const RentalDeals = () => {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Special Rental Deals</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((deal) => (
            <div key={deal} className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-48 bg-gray-200 rounded-md mb-4"></div>
              <h2 className="text-xl font-semibold mb-2">Weekend Special #{deal}</h2>
              <p className="text-gray-600 mb-4">Get 20% off on weekend rentals for selected vehicles</p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-bold">$40/day</span>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default RentalDeals;