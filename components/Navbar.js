import Link from "next/link";
import styles from '../styles/Navbar.module.css'

const Navbar = () => {

    return(
        <>
            <header className={styles.header}>

                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <Link href={"/home"}>Home</Link>
                        </li>
                        <li>
                            <Link href={"/orders"}>Orders</Link>
                        </li>
                        <li>
                            <Link href={"/addOrders"}>Add Order</Link>
                        </li>
                        <li>
                            <Link href={"/about"}>About</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>

    )

}

export default Navbar;
