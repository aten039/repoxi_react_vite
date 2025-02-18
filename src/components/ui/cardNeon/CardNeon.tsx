import style from './CardNeon.module.css'

type Props = {
  title:string,
  img:string,

}

export default function CardNeon({title, img}: Props) {
  return (
    <>
      <div className={style.card}>
        <div className={style.card_content}>
          <img className={style.img} src={"/img/" + img} />
          <div className={style.content_text}>
            <h2 className={style.tittle}>{title}</h2>
            <p>A partir de: <span>20$</span></p>
          </div>
          
        </div>
        
      </div>
    </>
  )
}


