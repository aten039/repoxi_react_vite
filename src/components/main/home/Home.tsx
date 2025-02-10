import Banner from "../../ui/banner/Banner";
import Content_info from "../../ui/content_info/Content_info";
import OurInfo from "../../ui/OurInfo/OurInfo";
import style from './home.module.css'

export default function Home() {
  return (
    <div className={style.grid_template}>
     
     <div>
      <Banner/> 
     </div>
     <div>
      <Content_info/>
     </div>
      
      <div>
        <OurInfo/>
      </div>
      
        
    </div>
  )
}
