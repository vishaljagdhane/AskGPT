import React from "react";
import TopBar from "./TopBar";

export default function ChatboatLandingpage() {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      
      {/* TOP BAR */}
      <div style={{ height: "60px" }}>
     <TopBar/>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, display: "flex" }}>
        
        {/* LEFT SIDEBAR – 10% */}
        <div style={{ width: "20%" }}>
          <h1>Left Sidebar (10%)</h1>
        </div>

        {/* DASHBOARD – 40% */}
        <div style={{ width: "40%" }}>
          <h1>Dashboard (40%)</h1>
        </div>

        {/* CHATBOT AREA – 50% */}
        <div style={{ width: "50%" }}>
          <h1>Chatbot Area (50%)</h1>
        </div>

      </div>
    </div>
  );
}
