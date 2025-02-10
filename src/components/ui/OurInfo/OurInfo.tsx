import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from "./OurInfo.module.css"
import {faComments, faCreditCard, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function OurInfo() {
  return (
    <div>
      <h3 className={style.title}>Conocenos</h3>
        <div className={style.content}>
            <div className={style.icon}>
                <FontAwesomeIcon icon={faComments} className={style.icon_awesome}/>
                <h3 className={style.icon_title}>Quienes somos?</h3>
                <p className={style.icon_description}>¡Bienvenido a Repoxi!</p>
                <p className={style.icon_description}>Somos una empresa apasionada por el arte y la creatividad, especializada en la fabricación y diseño de letreros de neón que cautivan miradas y destacan cualquier espacio.</p>
            </div>
            <div className={style.icon}>
                <FontAwesomeIcon icon={faCreditCard} className={style.icon_awesome}/>
                <h3 className={style.icon_title}>Metodos de pago</h3>
                <p className={style.icon_description}>Ofrecemos una variedad de métodos de pago para adaptarnos a tus preferencias y necesidades.</p>
                <p className={style.icon_description}>Opciones de Pago Seguras y Confiables.</p>
            </div>
            <div className={style.icon}>
                <FontAwesomeIcon icon={faEnvelope} className={style.icon_awesome}/>
                <h3 className={style.icon_title}>Contactanos </h3>
                <p className={style.icon_description}>¿Necesitas Ayuda? ¡Contáctanos!
                    Si tienes alguna pregunta sobre nuestros métodos de pago o necesitas ayuda para completar tu compra, nuestro equipo de atención al cliente está aquí para ayudarte.</p>
            </div>
      </div>
    </div>
  )
}
