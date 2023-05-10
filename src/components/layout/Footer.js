import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import styles from "./Footer.module.css" 

function Footer() {
    return (
    <footer className={styles.container}>
        <ul className={styles.list}>
            <li className={styles.item}><a href="https://www.instagram.com/weslleyrds_/"target="blank"><FaInstagram/></a></li>
            <li className={styles.item}><a href="https://twitter.com/westrofps" target="blank"><FaTwitter/></a></li>
            <li className={styles.item}><a href="https://www.linkedin.com/in/weslley-castro-da-silva/" target="blank"><FaLinkedin/></a></li>
            <li className={styles.item}><a href="https://github.com/WeslleyCastro" target="blank"><FaGithub/></a></li>
        </ul>
        <p className={styles.copy_right}><span>Costs</span> &copy; 2023</p>
    </footer>
    )
}

export default Footer