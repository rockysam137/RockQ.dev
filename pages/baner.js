import Image from "next/image"
import ban from "../styles/baner.module.css"
import Bg from "../public/Prm.png"
const Baner = () => {
  return (
    <div>
      <div className={ban.Baner}>
        <div className={ban.B__left}>
          <p>PortFolio</p>
        </div>
        <div className={ban.B__right}>
          <Image className={ban.Gambar} src={Bg} alt="picturee" />
        </div>
        <div className={ban.title}>
          <p>Nama saya Rocky, saya
            seorang antusias dalam dunia program
            saya sangat menyukain computer programing
          </p>
        </div>
        <div className={ban.content}>
          <p>mengahdapi masalah setaip hari itu sudah
            biasa, Pessan Error itu sudah mendarah daging di saya
          </p>
        </div>
      </div>
    </div>
  )
}
export default Baner
