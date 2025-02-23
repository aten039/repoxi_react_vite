import React, { useState } from 'react'
import style from './CreateNeon.module.css'

export default function CreateNeon() {

    const [neon, setNeon] = useState({
        text:"Personaliza tu neon con repoxi",
        color:"rosado",
        font:"mgSerif",
        on:true
    })

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>)=>{
        
        const newNeon = {
            ...neon,
            text:e.target.value
        }
        setNeon(newNeon)
    }
    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>)=>{
        const newNeon = {
            ...neon,
            font:e.target.value
        }
        setNeon(newNeon)
    }
    const handleChangeClick = (e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
        const target = e.target as HTMLElement
        const newNeon = {
            ...neon,
            color:target.id
        }
        setNeon(newNeon)
    }
    const handleClickOn = ()=>{
        const newNeon = {
            ...neon,
            on: neon.on ? false: true
        }
        setNeon(newNeon)

    }
    const sendMesagge = ()=>{
        const url=`https://api.whatsapp.com/send?phone=584120418065&text=Hola%2C%20repoxi.%20Quiero%20una%20cotizaci%C3%B3n!%0A%0ATexto%3A${neon.text}%0AColor%3A${neon.color}%0Afont%3A${neon.font}`
        window.open(url)
    }

  return (
    <>
        <section >
            <h2 className={style.title}>Crea Tu Neón</h2>
            <div className={style.form_container}>

                <div className={style.form_piece}>
                    <form className={style.form_neon}>
                        <div>
                            <label className={style.text} htmlFor="text">Introduce tu texto</label>
                            <input
                            type="text"
                            id="text"
                            name="text"
                            className={style.text}
                            onChange={handleChangeInput}
                            maxLength={40}
                            />
                        </div>
                        <div>
                            <label className={style.text} htmlFor="fuentes">Elije la fuente</label>
                            <select className={style.fuentes} name="fuentes" id="fuentes" onChange={handleChangeSelect}>
                                <option className={style.Anatomia} value="Anatomia">Anatomia</option>
                                <option className={style.AmsterdamOneSlant} value="AmsterdamOneSlant">Amsterdam One Slant</option>
                                <option className={style.Ananda} value="Ananda">Ananda</option>
                                <option className={style.Poppins_Regular} value="Poppins-Regular">PoppinsRegular</option>
                                <option className={style.ProcreateSignature} value="ProcreateSignature">Procreate Signature</option>
                                <option className={style.Sallome} value="Sallome">Sallome</option>

                            </select>
                        </div>
                        <div>
                            <label className={style.text}>Elije tu color</label>
                            <ul className={style.circle_container}>
                                <div className={ `${style.circle} ${style.rosado}`} id="rosado" onClick={handleChangeClick}></div>
                                <div className={ `${style.circle} ${style.amarillo}`} id="amarillo" onClick={handleChangeClick}></div>
                                <div className={ `${style.circle} ${style.morado}`} id="morado" onClick={handleChangeClick}></div>
                                <div className={ `${style.circle} ${style.azul}`} id="azul" onClick={handleChangeClick}></div>
                                <div className={ `${style.circle} ${style.cyan}`} id="cyan" onClick={handleChangeClick}></div>
                                <div className={ `${style.circle} ${style.blanco}`} id="blanco" onClick={handleChangeClick}></div>
                                <div className={ `${style.circle} ${style.verde}`} id="verde" onClick={handleChangeClick}></div>
                                <div className={ `${style.circle} ${style.rojo}`} id="rojo" onClick={handleChangeClick}></div>
                                <div className={ `${style.circle} ${style.naranja}`} id="naranja" onClick={handleChangeClick}></div>
                            </ul>
                        </div>
                        <div>
                        <input type="submit" className="button" value="Cotiza Tu Neon" id="boton-form" onClick={sendMesagge}/>
                        </div>
                        
                    </form>
                </div>
                <div className={`${style.neon_create} ${style.form_piece}` }>
                    <h3 className={`${style[`${neon.font}`]} ${style.text_neon}`} data-color={neon.on? neon.color:""}>{neon.text}</h3>
                    <button className={style.widget}>
                        <div className={neon.on ?`${style.on} ${style.widget_content}`: `${style.off} ${style.widget_content}`} title="boton encendido y apagado" onClick={handleClickOn}></div>
                    </button>
                </div>
                
            </div>
        </section>
    </>
  )
}
