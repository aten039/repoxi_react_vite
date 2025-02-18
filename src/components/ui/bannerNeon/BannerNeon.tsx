import { Link } from 'react-router'
import style from './bannerNeon.module.css'

export default function BannerNeon() {
  return (
    <>
        <div className={style.banner}>
            <img src="/img/plano.jpg" alt="banner neon" fetchPriority="high" />
            <div className={style.sombra}></div>
            <div className={style.content_text}>
                <p className={style.text_banner}>Letreros</p>
                <p className={style.text_info}>neon <span>personalizados</span></p>
                <p className={style.text_carac}>duraderos</p>
                <p className={style.text_carac}>facil instalacion</p>
                <p className={style.text_carac}>resistente al agua</p>
                <Link to='/discover_neon' className="button">Descubrir</Link>
            </div>
        </div>
    </>
  )
}
