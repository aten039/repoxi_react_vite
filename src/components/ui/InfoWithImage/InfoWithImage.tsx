import { Link } from "react-router"
import style from "./InfoWithImage.module.css"

export default function InfoWithImage() {
  return (
    <div>
        <div className={style.content_info_neon}>

            <div className={style.personalized}>
                <div className={style.sombra}></div>
                <div className={style.text}>
                    <h3>Diseños Personalizados</h3>
                    <p>Transformamos tus ideas en diseños de neón únicos y llamativos.</p>
                    
                    <p>Expresa tu identidad!</p>
                    <p>Expresa tu marca!</p>
                    <p>Expresa una idea!</p>
                </div>    
            </div>
            
            <div className={style.content_text}>
                <h3>Cotiza tu neon personalizado</h3>
                <p>No pierdas la oportunidad de darle estilo a tu negocio</p>
                <Link to={'/create_neon'} className="button">cotizar</Link>
            </div>

            <div className={style.materials}>
                <div className={style.sombra}></div>
                <div className={style.text}>
                    <h3>La calidad es nuestra prioridad</h3>
                    <p>Utilizamos técnicas de fabricación avanzadas y materiales de primera calidad para garantizar la durabilidad y el rendimiento de nuestros letreros de neón.</p>
                </div>
            </div>

            <div className={style.content_text}>
                <h3>Descubre nuestros neones</h3>
                <p>La mejor calidad y los mejores diseños, ven y descubrelos</p>
                <Link to={'/neon'} className="button">descubrir</Link>
            </div>
        </div>
    </div>
  )
}
