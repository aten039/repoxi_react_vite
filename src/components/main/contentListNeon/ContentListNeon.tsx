
import { Link } from 'react-router'
import Banner from '../../ui/banner/Banner'
import CardNeon from '../../ui/cardNeon/CardNeon'
import style from './ContentListNeon.module.css'

type Neon = {
  title:string,
  img:string,
  price:string
}

export default function ContentListNeon() {


  const neones: Neon[] = [
    {
      title:"Alzada fucsia",
      img:"alzada.jpg",
      price:""
    },
    {
      title:"happy birthday blanco cálido",
      img:"happy1.jpg",
      price:"55"
    },
    {
      title:"happy birthday blanco frio",
      img:"happy3.jpg",
      price:"55"
    },
    {
      title:"Nails fucsia",
      img:"nails.jpg",
      price:"50"
    },
    {
      title:"Sonrie a la vida",
      img:"sonrie.jpg",
      price:"50"
    },
    {
      title:"si te gusta, usalo",
      img:"si_gusta.jpg",
      price:"45"
    },
    {
      title:"Logo mdf vinil 60cm",
      img:"abby.jpg",
      price:"50"
    },
    {
      title:"Logo mdf vinil 50cm",
      img:"rosbely.jpg",
      price:"45"
    },
    {
      title:"Haz magia",
      img:"magia.jpg",
      price:"40"
    },
    {
      title:"vida dulce, dulce vida",
      img:"pinerolo.jpg",
      price:"45"
    },
    {
      title:"Street Shop",
      img:"street2.jpg",
      price:"45"
    },
  ] 

  const mitad = Math.ceil(neones.length / 2);
  const firstMitad = neones.slice(0, mitad); 
  const secondMitad = neones.slice(mitad);
   
  return (
    <>
        <Banner/>
        <div className={style.content_main}>
          <h1 className={style.tittle}>Explora nuestra colección de neones.</h1>
          <div className={style.content}>
            {
              firstMitad.map((neon)=>{
                return(<CardNeon title={neon.title} price={neon.price} img={neon.img} />)
              })
            }
            
          </div>
          <div className={`${style.content_text } ${style.content_one}`}>
                <h3>Cotiza tu neon personalizado</h3>
                <p>No pierdas la oportunidad de darle estilo a tu negocio</p>
                <Link to={'/create_neon'} className="button">cotizar</Link>
          </div>
          <div className={style.content}>
            {
              secondMitad.map((neon)=>{
                return(<CardNeon title={neon.title} price={neon.price} img={neon.img} />)
              })
            }
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
