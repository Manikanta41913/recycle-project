// src/components/RecycleForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const rates = {
  paper: 11,
  iron: 25,
  plastic: 10,
  glass: 4,
};

function RecycleForm() {
  const [wasteData, setWasteData] = useState({
    paper: "",
    iron: "",
    plastic: "",
    glass: "",

  });
  const [estimatedMoney, setEstimatedMoney] = useState(null);
  const [paymentOption, setPaymentOption] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setWasteData({
      ...wasteData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEstimate = () => {
    const totalMoney = Object.keys(wasteData).reduce((total, type) => {
      return total + (parseFloat(wasteData[type]) || 0) * (rates[type] || 0);
    }, 0);
    setEstimatedMoney(totalMoney);
  };

  const handlePayment = () => {
    navigate("/payments", { state: { estimatedMoney, wasteData } });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="flex justify-center text-4xl text-green-600 font-bold mb-6">Recycle and Earn</h1>
      
      <div className="space-y-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Enter Recyclable Waste</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.keys(wasteData).map((type) => (
            <div key={type} className="flex flex-col">
              <label className="font-medium mb-2 capitalize">{type}</label>
              <input
                type="number"
                name={type}
                value={wasteData[type]}
                onChange={handleChange}
                className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter weight in kg"
              />
            </div>
          ))}
        </div>
        <Button onClick={handleEstimate} className="w-full mt-4">Estimate Money</Button>
      </div>

      {estimatedMoney !== null && (
        <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-md">
          <h2 className="text-xl font-semibold mb-2">Estimated Money</h2>
          <p className="text-lg font-semibold">₹{estimatedMoney.toFixed(2)}</p>
          <Button onClick={handlePayment} className="w-full mt-4">Proceed to Withdraw</Button>
        </div>
      )}
    </div>
  );
}

export default RecycleForm;
