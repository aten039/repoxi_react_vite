import style from './policy.module.css'

export default function ShippingPolicy() {
  return (
    <div>
        <h1 className={style.tittle}>Política de envíos.</h1>
        <div className={style.content}>
            <p>Queridos clientes de Repoxi,</p>
            <p>Nos complace informarles que  ofrecemos opciones de envío rápido y confiable a través de MRW , zoom y tealca  para que sus productos lleguen a su destino de manera segura y oportuna.</p>
            <p>Envios a través de otras empresas deben ser cotizados en nuestras redes de contactos.</p>
        </div>
    </div>
  )
}
