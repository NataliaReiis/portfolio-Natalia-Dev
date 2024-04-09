

import { useEffect } from "react";
import {/*  useInView */ } from "react-intersection-observer";

import ScrollReveal from 'scrollreveal';

import Navbar from "../components/Navbar"
import TagsInfos from "../components/home/TagsInfos";
import Projects from "../components/project/Projects"
import MyServices from "../components/home/MyServices"
import Recommendation from "../components/home/Recommendations";
import EndCall from "../components/home/EndCall"
import Banner from "../components/home/Banner"


export default function Home() {

/*   const boxVariant = {
    visible: {opacity:1, scale:1, x: 0, transition: {
      duration: 1
    }},
    hidden:{opacity:0, scale: 0, x: 200}
  };

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {  
      if (inView){
        control.start("visible");
      }else{
        control.start("hidden")
      }
    }, [control, inView]); */
    
    useEffect(() => {
      const animations = () => {
        const scrollAni = ScrollReveal({
          origin: "bottom",
          distance: "100px",
          duration: 2000,
          reset: false,
        })
        scrollAni.reveal(`
        .tagsInfos,.projects,.services,.recommendation,.endCall
        `,
        {interval: 500}
        );

      }
      animations()
    }, []);

    window.setTimeout(() => {
      const home = document.getElementsByClassName("home-container");
      home[0].computedStyleMap.transform = "none";
      const nav = document.getElementsByTagName("header");
      nav[0].style.transform = "none";
    }, 1500);
  return (
    <>
    <Navbar/>
      <Banner />
      <TagsInfos />
      <Projects />
      <MyServices />
      <Recommendation />
      <EndCall/>
    </>
  );
}
