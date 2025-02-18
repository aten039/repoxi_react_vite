
import { Link } from 'react-router'
import Banner from '../../ui/banner/Banner'
import CardNeon from '../../ui/cardNeon/CardNeon'
import style from './ContentListNeon.module.css'

export default function ContentListNeon() {
  return (
    <>
        <Banner/>
        <div className={style.content_main}>
          <h1 className={style.tittle}>Explora nuestra colección de neones.</h1>
          <div className={style.content}>
            <CardNeon title='sonrie que la vida es bella' img='sonrie.jpg'/>
            <CardNeon title='sonrie' img='alzada.jpg'/>
            <CardNeon title='sonrie' img='sonrie.jpg'/>
            <CardNeon title='sonrie' img='pinerolo.jpg'/>
            <CardNeon title='sonrie' img='si_gusta.jpg'/>
            <CardNeon title='sonrie' img='magia.jpg'/>
            <CardNeon title='sonrie' img='sonrie.jpg'/>
          </div>
          <div className={`${style.content_text } ${style.content_one}`}>
                <h3>Cotiza tu neon personalizado</h3>
                <p>No pierdas la oportunidad de darle estilo a tu negocio</p>
                <Link to={'/create_neon'} className="button">cotizar</Link>
          </div>
          <div className={style.content}>
            <CardNeon title='sonrie' img='si_gusta.jpg'/>
            <CardNeon title='sonrie' img='magia.jpg'/>
            <CardNeon title='sonrie' img='sonrie.jpg'/>
          </div>
          <div className={style.content_text}>
                <h3>Descubre nuestros neones</h3>
                <p>La mejor calidad y los mejores diseños, ven y descubrelos</p>
                <Link to={'/discover_neon'} className="button">descubrir</Link>
          </div>
          
        </div>
       
         
    </>
  )
}
