import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import style from './panelQuestion.module.css'

export default function PanelQuestion() {
  return (
    <>  
        <h1 className={style.tittle}>Preguntas frecuentes</h1>
        <div className={style.content}>
            <Disclosure>
                <DisclosureButton className={style.panel}>Is team pricing available?

                </DisclosureButton>
                <DisclosurePanel className={style.disclosure_panel}>
                    Yes! You can purchase a license that you can share with your entire team.
                </DisclosurePanel>
            </Disclosure>
            <Disclosure>
                <DisclosureButton className={style.panel}>Is team pricing available?

                </DisclosureButton>
                <DisclosurePanel className={style.disclosure_panel}>
                    Yes! You can purchase a license that you can share with your entire team.
                </DisclosurePanel>
            </Disclosure>
            <Disclosure>
                <DisclosureButton className={style.panel}>Is team pricing available?

                </DisclosureButton>
                <DisclosurePanel className={style.disclosure_panel}>
                    Yes! You can purchase a license that you can share with your entire team.
                </DisclosurePanel>
            </Disclosure>
            <Disclosure>
                <DisclosureButton className={style.panel}>Is team pricing available?

                </DisclosureButton>
                <DisclosurePanel className={style.disclosure_panel}>
                    Yes! You can purchase a license that you can share with your entire team.
                </DisclosurePanel>
            </Disclosure>
            <Disclosure>
                <DisclosureButton className={style.panel}>Is team pricing available?

                </DisclosureButton>
                <DisclosurePanel className={style.disclosure_panel}>
                    Yes! You can purchase a license that you can share with your entire team.
                </DisclosurePanel>
            </Disclosure>
            <Disclosure>
                <DisclosureButton className={style.panel}>Is team pricing available?

                </DisclosureButton>
                <DisclosurePanel className={style.disclosure_panel}>
                    Yes! You can purchase a license that you can share with your entire team.
                </DisclosurePanel>
            </Disclosure>
        </div>
        
    </>
  )
}
