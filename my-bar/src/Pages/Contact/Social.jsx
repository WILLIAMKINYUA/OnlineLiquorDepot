import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import'./Social.css'
const Social = () => {
    return (<section>
        <div className='box'>
        <div className='logo'><MdLocationOn size={64}/></div><p style={{color:"grey"}}>Address: 198 West 21th Street, Suite 721 Nairobi NY 10016</p></div>
        
        <div className='box'>
       <div className='logo'><BsFillTelephoneFill size={64}/></div><p style={{color:"grey"}}>Phone: + 1235 2355 98</p>
       </div>
       <div className='box'>
       <div className='logo'><SiMinutemailer size={64}/></div><p style={{color:"grey"}}>OnlineDrinkingStore.com</p>
          </div>
       <div className='box'>
       <div className='logo'><TbWorld size={64}/></div><p style={{color:"grey"}}>OnlineDrinkingStore.com</p>
          </div></section> );
}
 
export default Social;