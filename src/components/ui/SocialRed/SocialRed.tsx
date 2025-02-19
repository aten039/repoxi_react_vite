import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./socialRed.module.css"
import { Link } from "react-router";

export default function SocialRed() {
  return (
    <>
      <div className={style.content_icon}>
        <Link to={import.meta.env.VITE_FACEBOOK_URL}><FontAwesomeIcon icon={faFacebook} className={style.icon_awesome}/></Link>
        <Link to={import.meta.env.VITE_INSTAGRAM_URL}><FontAwesomeIcon icon={faInstagram} className={style.icon_awesome}/></Link>
        <Link to={import.meta.env.VITE_WHATSAPP_URL}><FontAwesomeIcon icon={faWhatsapp} className={style.icon_awesome}/></Link>
      </div>
    </>
    
  )
}
