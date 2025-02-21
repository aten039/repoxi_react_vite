import style from './policy.module.css'

export default function RefundPolicy() {
  return (
    <div>
        <h1 className={style.tittle}>Politica de Reembolso.</h1>

        <div className={style.content}>
            <p>En Repoxi nos comprometemos a ofrecer productos de la más alta calidad y servicios excepcionales a nuestros valiosos clientes. Entendemos que pueden surgir circunstancias imprevistas que requieran ajustes en sus pedidos. Por ello, hemos establecido una política de reembolso que refleja nuestro compromiso de brindar soluciones satisfactorias en tales situaciones.</p>
            <p>Reembolso No Monetario:</p>
            <p>Queremos informar a nuestros clientes que, no ofrecemos reembolsos de dinero  por la compra de nuestros letreros de neón. En lugar de ello, proporcionamos un mes gratis  de servicio técnico  por cualquier acontecimiento que suceda con su letrero neón.</p>
        </div>
    </div>
  )
}
