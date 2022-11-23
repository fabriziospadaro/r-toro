import "./stylesheets/dashboard.scss"
import React, { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Dahsboard from "./Dahsboard"
import NavigationManager from "../libs/NavigationManager";
import SupportModal from "./Components/SupportModal";
import 'bootstrap/dist/css/bootstrap.min.css';
import StoreManager from "../libs/StoreManager";

export const AppContex = React.createContext(null);
export default function Home() {
  const [navigation, setNavigation] = useState(<Dahsboard />)
  const [show, setShow] = useState(false);
  const [modalDisabled, setModalDisabled] = useState(false);

  useEffect(() => {
    StoreManager.get("isSupportModalDisabled", Boolean).then(v => {
      if (v === undefined || v === null)
        v = false;
      setModalDisabled(v);
    });
  }, [])

  NavigationManager.initialize(setNavigation);

  function stopShowingHandle() {
    StoreManager.set("isSupportModalDisabled", true);
    setModalDisabled(true);
    setShow(false);
  }

  return (
    <>
      <div className="header">
        <h3>eToro Plus</h3>
        <Navbar />
        <i onClick={() => NavigationManager.nagivateTo(<Dahsboard />)} className="fas fa-home"></i>
      </div>
      <AppContex.Provider value={{ show, setShow, stopShowingHandle }}>
        <div>{navigation}</div>
        {!modalDisabled && < SupportModal />}
      </AppContex.Provider>
    </>
  )
}
