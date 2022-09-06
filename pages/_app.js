import '../styles/globals.css'
import Layout from '../components/Layout'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const [menu, setMenu] = useState(false)

  function isMenu(home){
    if(home === "home"){
      setMenu(false)
      return
    }
    let newMenu = !menu
    setMenu(newMenu)
  }
  return (
    <Layout menu={menu} menuSet = {isMenu}>
      <Component {...pageProps} menu={menu} />
    </Layout>
  )
}

export default MyApp
