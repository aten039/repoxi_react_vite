import style from './colorBanner.module.css'

export default function ColorBanner() {
  return (
    <>
        <h1 className={style.tittle}>¿Como elegir tu color?</h1>
        <div className={style.content}>
            <div className={style.colors}>
                <div className={ `${style.circle} ${style.rosado}`} id="rosado"></div>
                <div className={ `${style.circle} ${style.amarillo}`} id="amarillo"></div>
                <div className={ `${style.circle} ${style.morado}`} id="morado"></div>
                <div className={ `${style.circle} ${style.azul}`} id="azul"></div>
                <div className={ `${style.circle} ${style.cyan}`} id="cyan"></div>
                <div className={ `${style.circle} ${style.blanco}`} id="blanco"></div>
                <div className={ `${style.circle} ${style.verde}`} id="verde"></div>
                <div className={ `${style.circle} ${style.rojo}`} id="rojo"></div>
                <div className={ `${style.circle} ${style.naranja}`} id="naranja"></div>
            </div>
            <div className={style.text}>
                <p>El color de tu letrero de neón es clave para transmitir la personalidad de tu negocio y captar la atención de tus clientes.  Aquí te dejamos algunos consejos para elegir el tono ideal:
                </p>
                <p>🎨 Define la identidad de tu marca<br/>Cada color comunica una emoción. ¿Quieres un ambiente vibrante y enérgico? Opta por rojo o naranja. ¿Prefieres algo sofisticado y moderno? El blanco o azul son excelentes opciones.
                </p>
                <p>👀 Piensa en la visibilidad<br/>El contraste es fundamental. Si tu pared es oscura, colores brillantes como amarillo o rosa neón destacarán mejor. Para fondos claros, los tonos azules o morados pueden ser más llamativos.
                </p>
                <p>🏪 Considera la iluminación del espacio<br/> 
                    Si tu negocio tiene mucha luz natural, los colores más intensos como verde o rojo resaltarán mejor. Para ambientes con luz tenue, los tonos azules y púrpuras crean un efecto más elegante y relajante.
                </p>
            </div>
        </div>
    
    </>
  )
}
