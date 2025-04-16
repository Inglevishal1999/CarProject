import { useState, useEffect } from 'react';
import Toyota from "../assets/HomePage/Car logos/Leanding page logo/Toyota.jpg";
import Hyundai from "../assets/HomePage/Car logos/Leanding page logo/Hyundai.jpg";

const Dashboard = () => {
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    memberSince: 'January 2025',
    profileImage: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [activeRentals, setActiveRentals] = useState([]);
  const [rentalHistory, setRentalHistory] = useState([]);
  const [upcomingBookings, setUpcomingBookings] = useState([]);

  useEffect(() => {
    setActiveRentals([
      {
        id: 1,
        car: 'Toyota Camry',
        carImage: Toyota,
        pickupDate: 'April 15, 2025',
        returnDate: 'April 18, 2025',
        status: 'Active',
      },
      {
        id: 2,
        car: 'Hyundai Elantra',
        carImage: Hyundai,
        pickupDate: 'April 16, 2025',
        returnDate: 'April 20, 2025',
        status: 'Active',
      },
    ]);

    setRentalHistory([
      {
        car: 'Honda Accord',
        rentalPeriod: 'March 10-15, 2025',
        status: 'Completed',
      },
      {
        car: 'Chevrolet Malibu',
        rentalPeriod: 'February 20-25, 2025',
        status: 'Completed',
      },
    ]);

    setUpcomingBookings([
      {
        car: 'BMW 3 Series',
        rentalPeriod: 'April 20-25, 2025',
        price: '$280',
      },
      {
        car: 'Audi A4',
        rentalPeriod: 'May 1-5, 2025',
        price: '$350',
      },
    ]);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    console.log('Saving profile:', profile);
    setIsEditing(false);
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (storedProfile) {
      setProfile((prev) => ({
        ...prev,
        firstName: storedProfile.firstName || '',
        lastName: storedProfile.lastName || '',
      }));
    }
  }, []);
  
  return (
    <div className="max-w-8xl mx-auto px-4 md:mt-2 sm:px-6 lg:px-8 py-10 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Side - Rentals */}
        <div className="md:col-span-2 space-y-8">
          {/* Active Rentals */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
              <span className="w-2 h-6 bg-green-500 rounded-full mr-3"></span>
              Active Rentals
            </h2>
            {activeRentals.length > 0 ? (
              activeRentals.map((rental) => (
                <div key={rental.id} className="border-b border-gray-100 pb-5 mb-5 last:border-0 last:mb-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                      <div className="h-48 w-full overflow-hidden rounded-lg bg-gray-50">
                        <img src={rental.carImage} alt={rental.car} className="h-full w-full object-cover" />
                      </div>
                    </div>
                    <div className="sm:w-2/3 sm:pl-6 space-y-2">
                      <h3 className="font-medium text-lg text-gray-800">{rental.car}</h3>
                      <div className="flex items-center text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm">Pickup: {rental.pickupDate}</p>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm">Return: {rental.returnDate}</p>
                      </div>
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium mt-2">
                        {rental.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-6">No active rentals</p>
            )}
          </div>

          {/* Rental History */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
              <span className="w-2 h-6 bg-gray-400 rounded-full mr-3"></span>
              Rental History
            </h2>
            {rentalHistory.length > 0 ? (
              rentalHistory.map((rental, index) => (
                <div key={index} className="border-b border-gray-100 pb-5 mb-5 last:border-0 last:mb-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                      <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      </div>
                    </div>
                    <div className="sm:w-2/3 sm:pl-6 space-y-2">
                      <h3 className="font-medium text-lg text-gray-800">{rental.car}</h3>
                      <div className="flex items-center text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm">Rental Period: {rental.rentalPeriod}</p>
                      </div>
                      <span className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium mt-2">
                        {rental.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-6">No rental history</p>
            )}
          </div>
        </div>

        {/* Right Side - Profile + Bookings */}
        <div className="space-y-8">
          {/* Profile */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
              <span className="w-2 h-6 bg-blue-500 rounded-full mr-3"></span>
              Profile
            </h2>
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 bg-gray-100 rounded-full overflow-hidden mb-4 border-2 border-gray-200">
                {profile.profileImage ? (
                  <img src={profile.profileImage} alt="Profile" className="h-full w-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="text-center w-full">
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      name="firstName"
                      value={profile.firstName}
                      onChange={handleInputChange}
                      className="block mb-2 border border-gray-300 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={profile.lastName}
                      onChange={handleInputChange}
                      className="block border border-gray-300 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Last Name"
                    />
                  </>
                ) : (
                  <>
                    <h3 className="font-medium text-xl text-gray-800">{profile.firstName} {profile.lastName}</h3>
                    <p className="text-sm text-gray-500 mt-1">Member since {profile.memberSince}</p>
                  </>
                )}
              </div>
            </div>

            <div className="space-y-4">
              {isEditing ? (
                <button
                  onClick={handleSave}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-medium"
                >
                  Save Changes
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-medium"
                >
                  Edit Profile
                </button>
              )}

              {isEditing && (
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Change Profile Picture</label>
                  <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 text-center bg-gray-50">
                    <input
                      type="file"
                      onChange={handleProfileImageChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12" />
                      </svg>
                      <p className="text-sm text-gray-500">Click to upload an image</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Upcoming Bookings */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
              <span className="w-2 h-6 bg-blue-400 rounded-full mr-3"></span>
              Upcoming Bookings
            </h2>
            {upcomingBookings.length > 0 ? (
              upcomingBookings.map((booking, index) => (
                <div key={index} className="border-b border-gray-100 py-4 last:border-0">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-gray-800">{booking.car}</h3>
                      <p className="text-sm text-gray-500 flex items-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {booking.rentalPeriod}
                      </p>
                    </div>
                    <p className="text-lg font-semibold text-blue-600">{booking.price}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-6">No upcoming bookings</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;