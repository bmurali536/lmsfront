import './css/Footer.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

function Footer(){
    return(
        <>
        <footer class="top">
            <div className='footer_image'>
           </div>
            <div class="links">
                <div class="links-column">
                    <h2>School</h2>
                    <p>ABILITY MODEL SCHOOL</p>
                    <a href="">Read More <KeyboardDoubleArrowRightRoundedIcon/></a>
                    <div className='social_icons_div'>
                        <div class="socials"><WhatsAppIcon sx={{ fontSize: 40, color:"red" }} /></div>
                        <div class="socials"><FacebookIcon sx={{ fontSize: 40, color:"red" }} /></div>
                        <div class="socials"><InstagramIcon sx={{ fontSize: 40, color:"red" }} /></div>
                            </div>
                    
                    
                    
                </div>
               
                <div class="links-column column2">
                    <h2>School Achievements</h2>
                    <a href="About"><KeyboardArrowRightRoundedIcon sx={{ color:'red'}}/>Extracurricular Success:
                    </a>
                    <a href="Aout"><KeyboardArrowRightRoundedIcon sx={{ color:'red'}}/>Sports and Athletics:
                    </a>
                    <a href="About"><KeyboardArrowRightRoundedIcon sx={{ color:'red'}}/>School Library
                    </a>
                    <a href="About"><KeyboardArrowRightRoundedIcon sx={{ color:'red'}}/>Technology and Media:
                    </a>
                  </div>
            
                <div class="links-column">
                    <h2>Contact Us</h2>
                    <p> ABILITY MODEL SCHOOL<br></br> 
                    Flat no:501, Near vignan School,<br></br> Venkatarayanagar, Nijampet,<br></br> Hyderabad, Telangana -500090</p>
                ​
                    <p> +91 8019426810 </p>
                    <p>+91 8019426812</p>

                    <p>  info@mysite.com</p>
                </div>
               
            </div>
        </footer>
        
        </>
    );
}
export default Footer;