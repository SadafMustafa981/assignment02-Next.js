import styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.heading}>Welcome in My Next.js Website</h1>
        </div>
    );
}

export default Header;