import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js"
import "./index.css"

export default function App() {
  return <div>
    <Navbar/>
    <Hero/>
    <div className = "appFlex">
      {data.map(i => (
        <div key = {i.id}>
          <Card item = {i}/>
        </div>
      ))}
    </div>
  </div>
}