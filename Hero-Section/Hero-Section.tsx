import styles from "./Hero-Section.module.css"

const HeroSection = () => {
    return (
        <div className={styles.hero}>
            <h2> Hi I am Sadaf Mustafa </h2>
            <p> I am passionate about web development, specializing in Typescript and Next.js.</p>
            <p> 
                check out my work on{' '}
                <a href="https://github.com/SadafMustafa981" target="_blank">
                 Github
                </a>{' '}
            </p>
        </div>
    );
}


export default HeroSection;