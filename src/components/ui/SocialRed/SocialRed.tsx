import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./socialRed.module.css"

export default function SocialRed() {
  return (
    <>
      <div className={style.content_icon}>
        <FontAwesomeIcon icon={faFacebook} className={style.icon_awesome}/>
        <FontAwesomeIcon icon={faInstagram} className={style.icon_awesome}/>
        <FontAwesomeIcon icon={faWhatsapp} className={style.icon_awesome}/>
      </div>
    </>
    
  )
}
