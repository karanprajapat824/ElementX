import './../Css/Footer.css';
import { IoLogoInstagram, IoLogoFacebook,IoLogoYoutube,IoLogoGithub,IoLogoLinkedin } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";

const Footer = ()=>{
    return(
        <>
            <div className="footer">
                
                <div className='logo'>
                    ElementX
                    <div className='about-logo'>
                        "Powered by Elementx: Your source for ready-made HTML and CSS code snippets for stunning UI elements."     
                    </div>
                </div>
                
                <div style={{fontWeight : "bold"}}>Our Plateform Provide
                    <div className='services'>
                        <div>Cards</div>
                        <div>Forms</div>
                        <div>Buttons</div>
                        <div>Loaders</div>
                        <div>Check Boxes</div>
                        <div>Toggle Switches</div>
                        <div>Radio Buttons</div>
                    </div>
                </div>

                <div style={{display : "flex",flexDirection : "column"}}>

                <div style={{ display: "flex", flexDirection: "column", gap : "3vh"}}>
                    <div style={{ fontWeight: "bold", }} >Contact Us
                    <div className="contact-us">
                        <IoLogoInstagram />
                        <IoLogoFacebook />
                        <IoLogoYoutube />
                        <IoLogoGithub />
                        <IoLogoLinkedin />
                    </div>
                    </div>
                    <div style={{display : "flex",alignItems : "center",gap: "1vw"}}>
                            <MdAlternateEmail /> elementxgmail.com
                    </div>
                </div>

                <div style={{marginTop : "10vh"}}>
                    © 2024 Elementx. All rights reserved.
                </div>
                </div>
            </div>
        </>
    )

}

export default Footer;