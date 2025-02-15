import Banner from "../../ui/banner/Banner";
import CreateNeon from "../../ui/CreateNeon/CreateNeon";
import QuoteNeon from "../../ui/quoteNeon/QuoteNeon";
import style from './createNeonContent.module.css'

export default function CreateNeonContent() {
  return (
    <div>
        <Banner/>
        <div className={style.margin_bottom}>
          <CreateNeon/>
        </div>
        
        <div>
          <QuoteNeon/>
        </div>
        
    </div>
  )
}
