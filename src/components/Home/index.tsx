import React from "react";
import styles from "./home.module.scss"
import Image from "next/image";
import Button from '@mui/material/Button';
import BarshaSkills from "../Skills";
const BarshaHome=()=>{
    return(
        <div id="home" className={styles.home}>
            <div className={styles.content}>
            <div className={styles.content_profilePic}> 
                <Image fill src={"/images/profilepic.jpeg"} alt={"profile pic"}/>
            </div>
            <div className={styles.content_profileName}>
                Hi, It's Barsha Singha
            </div>
            </div>
            <div className={styles.hireMe}> 
            <Button sx={{
                color:"white", background:"#f9873d" ,border:"transparent" , ":hover":{
                    background:"#f9873d"
                }, ":active":{
                    background:"#f9873d"
                }
            }} variant="outlined">Hire Me</Button>
            </div>
           <div  className={styles.skillsArrow}>
            <a href="#skills">
            <Image fill src={"/images/leftArrow.png"} alt={"profile pic"}/>

            </a>
           </div>
        </div>
    )
}
export default BarshaHome;