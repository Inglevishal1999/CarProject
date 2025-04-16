const BecomeRenter = () => {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Become a Renter</h1>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <p className="mb-6">
            Join our network of car owners and start earning money by renting out your vehicle when you're not using it.
          </p>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Benefits:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Earn extra income</li>
              <li>Full insurance coverage</li>
              <li>Flexible scheduling</li>
              <li>Free vehicle maintenance</li>
            </ul>
          </div>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
            Apply Now
          </button>
        </div>
      </div>
    );
  };
  
  export default BecomeRenter;