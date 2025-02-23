import { Outlet, useLocation } from "react-router";
import style from './layout.module.css'
import { useEffect, useState } from "react";
import SocialRed from "../ui/SocialRed/SocialRed";
import { NavLink } from "react-router";
import { Analytics } from "@vercel/analytics/react";

export default function Layout() {

  const [menuVisible, setMenuVisible] = useState(window.innerWidth>991 ? true : false);
  const [menu, setmenu] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  useEffect(()=>{
    let prevScrollPos = window.pageYOffset
    const handleScroll = ()=>{

      let actualScroll = window.pageYOffset
      let isScroll = prevScrollPos >= actualScroll
      setmenu(isScroll)
      
      prevScrollPos = actualScroll
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  console.log(document.querySelector('body'))
  useEffect(()=>{
    if(menuVisible){
      document.querySelector('body')?.classList.add('active_scroll')
    }else{
      document.querySelector('body')?.classList.remove('active_scroll')
    }
  }, [menuVisible])

  
  

  const handleClick = ()=>{
    const value = menuVisible?false:true
    setMenuVisible(value)
  } 

  return (
    <>
      <Analytics/>
      <div className={style.space} ></div>
      
      <header className={menu?`${style.header} ${style.visible_menu}`:`${style.header} ${style.invisible_menu}`}>
        <a href="./" className={`${style.logo} ${style.color_transition}`}>repoxi</a>
        <nav >
            <img onClick={handleClick} className={`${style.menu_img}`} src="/img/menu.png" alt="menu"/>
            <nav className={menuVisible?`${style.active} ${style.menu}`:`${style.deactive} ${style.menu}`}>
                <NavLink  className={({isActive})=>isActive?`${style.menu_a} ${style.color_transition} ${style.menuActive}`:`${style.menu_a} ${style.color_transition}`} to="./">Inicio</NavLink>
                {/* <Link className="menu-publicidad" to="/publicity">Publicidad</Link> */}
                <NavLink  className={({isActive})=>isActive?`${style.menu_a} ${style.color_transition} ${style.menuActive}`:`${style.menu_a} ${style.color_transition}`} to="/discover_neon">Descubre Nuestros Neones</NavLink>
                <NavLink className={({isActive})=>isActive?`${style.menu_a} ${style.color_transition} ${style.menuActive}`:`${style.menu_a} ${style.color_transition}`} to="/create_neon">Cotiza Tu Neón</NavLink>
                <NavLink  className={({isActive})=>isActive?`${style.menu_a} ${style.color_transition} ${style.menuActive}`:`${style.menu_a} ${style.color_transition}`} to="/neon">Nuestros neones</NavLink>
            </nav>
        </nav>
      </header>
      
      

      <main>
        <Outlet/>
      </main>

      <footer className={style.footer}>
        <div className={style.footer_content}>
            <div className="">
                <p className={style.rr}>Derechos Reservados Repoxi &copy;</p> 
                <div className={style.policy}>

                  <NavLink  className={({isActive})=>isActive?`${style.color_transition} ${style.menuActive}`:`${style.color_transition}`} to="/warranty">Política de garantía</NavLink>
                  <NavLink  className={({isActive})=>isActive?`${style.color_transition} ${style.menuActive}`:`${style.color_transition}`} to="/refund">Política de reembolso</NavLink>
                  <NavLink  className={({isActive})=>isActive?`${style.color_transition} ${style.menuActive}`:`${style.color_transition}`} to="/contact">Contacto</NavLink>
                  <NavLink  className={({isActive})=>isActive?`${style.color_transition} ${style.menuActive}`:`${style.color_transition}`} to="/shipping">Política de envíos</NavLink>

                </div>
            </div>
            <div>
                <p>Información de Contacto:</p>
                <div className="redes-sociales">
                  <SocialRed/>
                </div>
            </div>
        </div>
        <div  id="dragonBytes" className={style.dragon}>Create by: <a className="text-orange-400 font-bold" href="https://www.instagram.com/dragon_bytes_web/" target="_blank" rel="noopener noreferrer">Dragon Bytes</a></div>
      </footer>
    </>
    
  )
}
