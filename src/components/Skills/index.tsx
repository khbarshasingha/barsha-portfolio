import React from "react"
import styles from "./skills.module.scss"
import Image from "next/image";
import { fadeIn } from  'react-animations';


const sanityles = {
    fadeIn: {
      animation: `${fadeIn} 2s` ,
    //   animationName: fadeIn,
    },
  };
const BarshaSkills=()=>{
    return (
        <div className={styles.skills} id="skills">
            Skills here
            <div  className={styles.skillsArrow}>
            <a href="#home">
            <Image fill src={"/images/leftArrow.png"} alt={"profile pic"}/>

            </a>
           </div>
        </div>
    )
}

export  default BarshaSkills;