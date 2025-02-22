import Banner from "../../ui/banner/Banner";
import BannerNeon from "../../ui/bannerNeon/BannerNeon";
import ColorBanner from "../../ui/colorBanner/ColorBanner";
import Content_info from "../../ui/content_info/Content_info";
import OurInfo from "../../ui/OurInfo/OurInfo";
import PanelQuestion from "../../ui/panelQuestion/PanelQuestion";
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
      <div>
        <BannerNeon/>
      </div>
      
      <div className={style.question}>
        <PanelQuestion/>
      </div>
      
      <div>
        <ColorBanner/>
      </div>
    </div>
  )
}
