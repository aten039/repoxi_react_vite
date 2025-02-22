import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import style from './panelQuestion.module.css'

export default function PanelQuestion() {
  return (
    <>  
        <h1 className={style.tittle}>Preguntas frecuentes</h1>
        <div className={style.content}>
            <Disclosure>
                <DisclosureButton className={style.panel}>
                    ¿Puedo personalizar mi letrero con cualquier diseño o texto?
                </DisclosureButton>
                <DisclosurePanel className={style.disclosure_panel}>
                ¡Sí! Puedes personalizar tu letrero con cualquier palabra, frase, logo o símbolo. Tenemos una amplia variedad de colores, fuentes y tamaños para adaptarnos a tu estilo.
                </DisclosurePanel>
            </Disclosure>
            <Disclosure>
                <DisclosureButton className={style.panel}>
                    ¿Pueden usarse en exteriores?
                </DisclosureButton>
                <DisclosurePanel className={style.disclosure_panel}>
                Sí, las tiras de neon flex son resistentes al agua , pero recomendamos comunicarnos si es para exterior y nosotros sellamos las entradas de cables así no estará expuestos al agua y puedas usar tu letrero en exterior sin ningún problema .

                </DisclosurePanel>
            </Disclosure>
            <Disclosure>
                <DisclosureButton className={style.panel}>
                    ¿Cómo se instalan?
                </DisclosureButton>
                <DisclosurePanel className={style.disclosure_panel}>
                    Nuestros letreros traen huecos , con ramplus y tornillos se colocan a la pared , si quiueres darle un toque mas 3D se recomienda separadores de acrilico que se instalan de la misma manera  . También puedes colgarlo con cadenas.
                </DisclosurePanel>
            </Disclosure>
            <Disclosure>
                <DisclosureButton className={style.panel}>
                    ¿Cuánto tardan en fabricarse y enviarse?
                </DisclosureButton>
                <DisclosurePanel className={style.disclosure_panel}>
                    El tiempo de producción es de 4 a 5 días hábiles, y el envío varía según la ubicación, pero suele tardar entre 2 y 3 días adicionales.
                </DisclosurePanel>
            </Disclosure>
            <Disclosure>
                <DisclosureButton className={style.panel}>
                    ¿Cuál es el precio de un letrero de neón?
                </DisclosureButton>
                <DisclosurePanel className={style.disclosure_panel}>
                Depende del tamaño, diseño y complejidad, pero ofrecemos opciones para todos los presupuestos con la mejor calidad y precio garantizado.
                </DisclosurePanel>
            </Disclosure>
            <Disclosure>
                <DisclosureButton className={style.panel}>
                    ¿Tienen garantía?
                </DisclosureButton>
                <DisclosurePanel className={style.disclosure_panel}>
                    Sí, todos nuestros letreros incluyen garantía para que compres con confianza. Si hay algún problema, lo solucionamos rápidamente
                </DisclosurePanel>
            </Disclosure>
            <Disclosure>
                <DisclosureButton className={style.panel}>
                    ¿Cuánto dura un letrero de neón LED?
                </DisclosureButton>
                <DisclosurePanel className={style.disclosure_panel}>
                    Los letreros de neón LED pueden durar entre 30,000 y 50,000 horas, dependiendo del uso y mantenimiento.
                </DisclosurePanel>
            </Disclosure>
        </div>
        
    </>
  )
}
