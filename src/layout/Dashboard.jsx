import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";
import PartDecode from "../pages/PartDecode";
import S54Sensor from "../pages/S54Sensor";
import S5Xmonitor from "../pages/S5Xmonitor";
import DataSheet from "../pages/DataSheet";
import ActuatorSizing from "../pages/ActuatorSizing";
import ValveConfig from "../pages/ValveConfig";



const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("Home");
    // Function to render the corresponding component based on the active tab
  const renderView = () => {
    switch (activeTab) {
    
      case "Home":
        return <Home/>;
      case "Actuator Sizing":
        return <ActuatorSizing setActiveTab={setActiveTab} />;
      case "S98Part":
        return <ValveConfig/>
      case "Part# Decode":
        return <PartDecode/>;
      case "SS4 Sensor":
        return <S54Sensor/>;
      case "SSX Monitor":
        return <S5Xmonitor />;
      case "Data Sheet":
        return <DataSheet/>
      default:
        return <ActuatorSizing setActiveTab={setActiveTab}  />;
    }
  };
    return (
        <div className="flex h-screen">
            {/*Sidebar Component */}
            <Sidebar setActiveTab={setActiveTab} activeTab={activeTab}  />
            
            {/*Main Content Area */}
            <div className="flex-1 overflow-auto">
                {/* Header */}
                <header className="shadow-sm AdminHeader">
                    <div className="flex items-center justify-between px-8 py-4">
                        <h1 className="text-2xl font-bold"></h1>

                    </div>

                </header>
                {/* Content Area */}
                <main className="p-8">{renderView()}</main>

            </div>

        </div>

);
};
export default Dashboard;