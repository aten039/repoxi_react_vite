import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialRed from "../SocialRed/SocialRed";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import style from "./QuoteNeon.module.css"

export default function QuoteNeon() {
  return (
    <>  
        <div className={style.content}>
            <h3 className={style.title}>Puedes Cotizar Tu Neón Aqui</h3>
            <div className="informacion contenedor-contacto">
                    <div className="icono">
                        <FontAwesomeIcon icon={faEnvelope} className={style.icon_awesome}/>
                        <h3 className={style.subtitle}>Contactanos </h3>
                        <p className={style.description}>¿Necesitas Ayuda? ¡Contáctanos!</p>
                        <p className={style.description}>Si tienes alguna pregunta sobre nuestros métodos de pago o necesitas ayuda para completar tu compra, nuestro equipo de atención al cliente está aquí para ayudarte. No dudes en ponerte en contacto con nosotros y estaremos encantados de proporcionarte la asistencia que necesites.</p>
                        <div>
                            <SocialRed/>
                        </div>
                    </div>
            </div>
        </div>
        
    </>
  )
}
