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
            
            <div>Algo</div>

            <div className={style.materials}>
                <div className={style.sombra}></div>
                <div className={style.text}>
                    <h3>La calidad es nuestra prioridad</h3>
                    <p>Utilizamos técnicas de fabricación avanzadas y materiales de primera calidad para garantizar la durabilidad y el rendimiento de nuestros letreros de neón.</p>
                </div>
            </div>
                
            
        </div>
    </div>
  )
}
