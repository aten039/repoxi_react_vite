import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./socialRed.module.css"

export default function SocialRed() {
  return (
    <>
      <div className={style.content_icon}>
        <a href={import.meta.env.VITE_FACEBOOK_URL} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} className={style.icon_awesome}/></a>
        <a href={import.meta.env.VITE_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className={style.icon_awesome}/></a>
        <a href={import.meta.env.VITE_WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} className={style.icon_awesome}/></a>
      </div>
    </>
    
  )
}
