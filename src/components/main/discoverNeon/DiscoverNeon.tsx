import Banner from '../../ui/banner/Banner'
import InfoWithImage from '../../ui/InfoWithImage/InfoWithImage'
import SocialRed from '../../ui/SocialRed/SocialRed'
import style from './discoverNeon.module.css'

export default function DiscoverNeon() {
  return (
    <div>
        <Banner/>
        <section className={style.content}>
            <h1 className={style.title}>¿Quieres darle estilo a tu marca?</h1>
            <div className={style.content_info}>
                <div>
                    <h2 className={style.subtitle}>Un letrero neón es lo que necesitas!</h2>
                    <p className={style.text_info}>Nuestros neones rebosan de estilo y creatividad. Fabricados minuciosamente para lograr la mayor calidad posible. Tomamos tus ideas y las volvémos una realidad, exprésate a través de nuestros neones.</p>
                    <p className={style.text_descover}>Ven y descubrelos.</p>
                </div>
                
                <div>
                    <h2 className={style.subtitle_red}>Cotiza tu neón en:</h2>
                    <div className="redes-sociales">
                        <SocialRed/>
                    </div>
                </div>
               
            </div>
            
        </section>
        <InfoWithImage/>
    </div>
  )
}
