import { React, useState, useRef, useEffect } from "react";
import shareIcon from "./images/icon-share.svg"
import facebookIcon from "./images/icon-facebook.svg"
import pinterestIcon from "./images/icon-pinterest.svg"
import twitterIcon from "./images/icon-twitter.svg"

export function SocialMediaLinksIcon() {
    const [show, setShow] = useState(false)
    const tabRef = useRef(null)
    const btnRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(event) {
            if (tabRef.current && !tabRef.current.contains(event.target) &&
                btnRef.current && !btnRef.current.contains(event.target)
            ) {
                setShow(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])  

    return (
        <>
        <button ref={btnRef} onClick={() => setShow(prev => !prev)} className="ml-auto bg-slate-200 hover:bg-slate-400 rounded-full w-8 h-8 flex items-center justify-center mt-1">
            <img className="" src={shareIcon}></img>
        </button>
        {show && (
        <div ref={tabRef} className="whole-tab relative">
        <div className="absolute bottom-12 -right-[15px] min-w-[230px] bg-slate-700 px-6 py-3 rounded-xl flex items-center gap-4 shadow-1g">
            <span className="text-xs tracking-widest text-slate-400">SHARE</span>
            <img className="cursor-pointer" onClick={() => window.open("https://www.facebook.com/")} src={facebookIcon}></img>
            <img className="cursor-pointer" onClick={() => window.open("https://x.com/")} src={twitterIcon}></img>
            <img className="cursor-pointer" onClick={() => window.open("https://www.pinterest.com/")} src={pinterestIcon}></img>
            <div className="pointer w-3 h-3 bg-slate-700 absolute -bottom-1 right-6 rotate-45"></div>
        </div>
        </div>)}
        </>
    )
}