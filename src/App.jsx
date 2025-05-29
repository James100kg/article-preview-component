import React from "react"
import drawersImg from "./images/drawers.jpg"
import avatar from "./images/avatar-michelle.jpg"
import { SocialMediaLinksIcon } from "./SocialMediaLinksIcon"

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="panel bg-white w-[650px] rounded-lg flex">
        <img className="w-[300px] rounded-lg" src={drawersImg}></img>
        <div className="p-6">
          <h2 className="text-base font-bold leading-snug text-slate-700 mb-4">Shift the overall look and feel by adding these wonderful touches to furniture in your home</h2>
          <p className="text-sm text-slate-500 leading-relaxed mb-4">Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uniniviting. I've got some simple tips to help you make any room feel complete.</p>
          <div className="flex">
            <img className="w-10 h-10 rounded-full mr-2" src={avatar}></img>
            <div>
              <h3 className="text-sm font-bold text-slate-700">Michelle Appleton</h3>
              <p className="text-sm text-slate-400">28 Jun 2020</p>
            </div>
            <SocialMediaLinksIcon /> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default App