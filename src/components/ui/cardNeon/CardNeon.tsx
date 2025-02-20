import style from './CardNeon.module.css'

type Props = {
  title:string,
  img:string,
  price:string
}

export default function CardNeon({title, img, price}: Props) {
  return (
    <>
      <div className={style.card}>
        <div className={style.card_content}>
          <img className={style.img} src={"/img/neones/" + img} />
          <div className={style.content_text}>
            <h2 className={style.tittle}>{title}</h2>
            <p>A partir de: <span>{price}$</span></p>
          </div>
          
        </div>
        
      </div>
    </>
  )
}


