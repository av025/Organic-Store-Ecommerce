import styles from "../styles/navbar.module.css";
import content from "../content/content.json"
import headerLogo from "../assets/images/organic-store-logo.svg";
function Navbar() {
    return <nav className={styles.test}> 
    <div>
        <img src={headerLogo} alt={content.header.applicationName} />
    </div>

        <ul>
            {content.header.headerNavbar.map((navItems) => {
                return <li key={navItems}>
                    {navItems}
                </li>
            } )}
        </ul>
    </nav>
}

export default Navbar;

