import style from './content_info.module.css'

export default function Content_info() {
  return (
    <div className={style.bg}>
        <h2 className={style.title}>Haz Crecer Tu Negocio.</h2>
    
        <div className={style.content}>

            <div>
                <p className={style.content_text}>En repoxi trabajamos para darte el mejor servicio. Nuestras soluciones se basan en:</p>
                <ul className={style.content_icon}>
                    <li>
                        <div className={style.icon}>
                            <img src="/img/innovacion.png" alt="icono palabra"/>
                        </div>
                        <p>Innovación</p>
                    </li>

                    <li>
                        <div className={style.icon}>
                            <img src="/img/creeatividad.png" alt="icono palabra"/>
                        </div>
                        <p>Creatividad</p>
                    </li>

                    <li>
                        <div className={style.icon}>
                            <img src="/img/confianza.png" alt="icono palabra"/>
                        </div>
                        <p>Confianza</p>
                    </li>
                    
                </ul>
                
                <p className={style.pie_text}>El mundo conocera tu marca.</p>
                
            </div>
        
            <div>
                <img src="/img/foto_laptop.jpg" alt="imagen laser" className={style.image}/>
                <p className={style.pie_text}>Haz realidad tus ideas.</p>
            </div>
        
        </div>
    
    </div>
  )
}
