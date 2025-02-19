import { Outlet, useLocation } from "react-router";
import style from './layout.module.css'
import { useEffect, useState } from "react";
import SocialRed from "../ui/SocialRed/SocialRed";
import { NavLink } from "react-router";

export default function Layout() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [menuVisible, setMenuVisible] = useState(window.innerWidth>991 ? true : false);

  const handleClick = ()=>{
    const value = menuVisible?false:true
    setMenuVisible(value)
  } 

  return (
    <>
      <div className={style.space} ></div>
      <header className={style.header}>
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

      <main >
        <Outlet/>
      </main>

      <footer className={style.footer}>
        <div className={style.footer_content}>
            <div className="">
                <p className={style.rr}>Derechos Reservados Repoxi &copy;</p> 
                <div className={style.policy}>

                    <a className={style.color_transition} href="/policy">Política de garantía</a>
                    <a className={style.color_transition} href="reembolso.html">Política de reembolso</a>
                    <a className={style.color_transition} href="contacto.html">Contacto</a>
                    <a className={style.color_transition} href="envios.html">Política de envíos</a>

                </div>
            </div>
            <div>
                <p>Información de Contacto:</p>
                <div className="redes-sociales">
                  <SocialRed/>
                </div>
            </div>
        </div>
        <div  id="dragonBytes" className={style.dragon}>Create by: <a className="text-orange-400 font-bold" href="https://www.instagram.com/dragon_bytes_web/">Dragon Bytes</a></div>
      </footer>
    </>
    
  )
}
