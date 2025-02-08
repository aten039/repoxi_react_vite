import style from './banner.module.css'

export default function Banner() {
  return (
    <div className={style.banner}>
            <img src="/img/banner-colorido.jpg" alt="banner principal" fetchPriority="high" />
            <p className={style.text_banner}>Innovación que <br/><span>brilla</span><br/>Neón Flex</p>
    </div>
  )
}
