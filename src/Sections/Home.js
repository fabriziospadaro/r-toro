import "./stylesheets/dashboard.scss"
import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Dahsboard from "./Dahsboard"
import NavigationManager from "../libs/NavigationManager"
export default function Home() {
  const [navigation, setNavigation] = useState(<Dahsboard />)
  NavigationManager.initialize(setNavigation);

  return (
    <>
      <div className="header">
        <h3>Roid-Toro</h3>
        <Navbar />
      </div>
      <div>{navigation}</div>
    </>
  )
}
