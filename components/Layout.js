import Navbar from "@/components/Navbar";
import Link from "next/link";
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return(
        <>
            <Navbar/>
            <div className={styles.content}>
                {children}
            </div>
        </>
    )
}

export default Layout;
