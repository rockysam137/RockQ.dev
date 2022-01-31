// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Baner from "../pages/baner.js"
const Gaya = {
  overflow: "hidden",
}
export default function Home() {
  return (
    <>
      <Baner style={Gaya} />
    </>
  )
}
