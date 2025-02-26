import Modal from '@mui/material/Modal';
import style from './CardNeon.module.css'
import { useState } from 'react';

type Props = {
  title:string,
  img:string,
  price:string
}

export default function CardNeon({title, img, price}: Props) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className={style.card} onClick={handleOpen}>
        <div className={style.card_content}>
          <img className={style.img} src={"/img/neones/" + img} />
          <div className={style.content_text}>
            <h2 className={style.tittle}>{title}</h2>
            <p>A partir de: <span>{price}$</span></p>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        className={style.modal}
        onClick={handleClose}
      >
        <img className={style.img_modal} src={"/img/neones/" + img} />
      </Modal>
    </>
  )
}


