import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
// import "../styles/navbar.css"
// import "../styles/globals.css"
// import "../styles/navbar.css"

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleclick = () => setClick(!click)
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <div className="Nav">
        <div className="wraper">
          <div className="Logo">RockQ.dev</div>
          <ul className={click ? "list__items active" : "list__items"}>
            <li className="list"><Link className="link" href="/">Home</Link></li>
            <li className="list"><Link className="link" href="/blog">Blog</Link></li>
            <li className="list"><Link className="link" href="/about">About</Link></li>
          </ul>
          <div className="icon" onClick={handleclick}>
            <i className={click ? "fa-solid fa-xmark  " : "fa-solid fa-bars"}></i>
          </div>
        </div>
      </div>
    </div >
  )
}
export default Navbar
