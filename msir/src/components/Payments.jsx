// src/components/Payments.jsx
import { useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";

function Payments() {
  const location = useLocation();
  const navigate = useNavigate();
  const { estimatedMoney, wasteData } = location.state || {};
  const [showonlinepayouts,setshowonlinepayouts]=useState(false);

  const handlePaymentOption = (option) => {
    if (option === "online") {
      setshowonlinepayouts(true)
      // Handle online payment options
      // For demonstration purposes
      // alert("Redirecting to online payment options");
    } else {
      // Handle cash payment
      alert("Cash payment option selected");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Withdraw Summary</h1>

      <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Receipt Summary</h2>
        <p className="text-lg font-semibold mb-2">Estimated Money: ₹{estimatedMoney.toFixed(2)}</p>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-2">Recycled Waste:</h3>
          {Object.keys(wasteData).map((type) => (
            <p key={type} className="text-base">{type}: {wasteData[type]} kg</p>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <Button onClick={() => handlePaymentOption("cash")} className="w-full">Cash Withdraw</Button>
        <Button variant="outline" onClick={() => handlePaymentOption("online")} className="w-full ">Online Withdraw</Button>
        
        {/* If online payment is selected */}
        { showonlinepayouts&& ( // Replace `false` with a condition to show online payment options
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Select Withdraw Method</h3>
            <div className="space-y-2">
              <Button className="w-full">PhonePe</Button>
              <Button className="w-full">Google Pay</Button>
              <Button className="w-full">Paytm</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Payments;
