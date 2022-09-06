import Nav from "./Nav"
import Menu from "./Menu"
import Footer from "./Footer"
import Head from "next/head"

export default function Layout({ children, menu, menuSet }) {
    return (
        <div className="overflow-hidden">
            <Head>
                <meta charSet="utf-8" />
                <link rel="icon" href="/images/logo.svg" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* <meta name="theme-color" content="#89163B" /> */}
                <meta name="author" content="Angala Fintech" />
                <meta name="description" content="Angala fintech website" />
                <link rel="apple-touch-icon" href="/images/logo.svg" />
                <title>Angala Fintech</title>
            </Head>


            <Menu isMenu={menu} menuSetter={menuSet} />
            <Nav menuSetter={menuSet} isMenu={menu} />
            <div>
                {children}
            </div>
            <Footer menu={menu} />
        </div>
    )
}