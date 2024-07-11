import logo from "./logo.png";
import "./App.css";
import { Button } from "@mui/material";
import ToggleSections from "./Components/ToggleSections";
import ReferModal from "./Components/ReferModal";
import { useState } from "react";
import ReferCardSection from "./Components/ReferCardSection";
import ReferProcessCard from "./Components/ReferProcessCard";
import ReferBenefits from "./Components/ReferBenefits";
import ReferalFAQs from "./Components/ReferalFAQs";
import Support from "./Components/Support";
import Footer from "./Components/Footer";



function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <div className="banner roboto-regular">
        <p>Navigate your ideal career path with tailored expert advice</p>
        <a href="" >Contact Expert</a>
      </div> 
      <header>
        <div className="logo-section">
          <img src={logo} alt="logo" />
          <Button variant="contained">Courses</Button>
        </div>
        <nav>
          <div>
            <a onClick={handleOpen}>Refer & Earn</a>
          </div>
          <div>
            <a href="">Resources</a>
          </div>
          <div>
            <a href="">About Us</a>
          </div>
          <div>
          <Button variant="contained" sx={{ bgcolor: "#94a3b833", color:"black", fontSize:"12px"}} href="https://trial.accredian.com/" >Log in</Button>
          </div>
          <div>
          <Button variant="contained" sx={{ color: "", bgcolor:"#1A73E8", fontSize:"12px"}} href="https://trial.accredian.com/" >Try for free</Button>
          </div>
        </nav>
      </header>


      <ToggleSections />
      
      <ReferModal handleClose={handleClose} open = {open} />
      
      <ReferCardSection handleOpen={handleOpen} />
      
      <ReferProcessCard handleOpen={handleOpen} />

      <ReferBenefits handleOpen={handleOpen} />

      <ReferalFAQs />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
