import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import RecycleForm from "./components/RecycleForm";
import RecyclingTips from "./components/RecyclingTips";
import Footer from "./components/Footer";
import Payments from "./components/Payments";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <HowItWorks />
            <RecycleForm />
            <RecyclingTips />
          </>
        } />
        <Route path="/payments" element={
          <>
            <Hero /> {/* Optionally include Hero or any other common components */}
            <Payments />
          </>
        } />
      </Routes>
      <Footer /> {/* Footer can be included globally if needed on all pages */}
    </Router>
  );
}

export default App;
