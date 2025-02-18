
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
        </div>
       
        
    </>
  )
}
