import Banner from "../../ui/banner/Banner";
import Content_info from "../../ui/content_info/Content_info";
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
      
      
      
        
    </div>
  )
}
