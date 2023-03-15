import styles from "../styles/Information.module.css"
import Bottom from "./Bottom"

export default function Information() {
    return (
        <>
            <div className={styles.info}>
                <h1 className={styles.heading1}>
                    Shift the overall look and feel by adding these wonderful
                    touches to furniture in your home
                </h1>
                <p className={styles.paragraph}>
                    Ever been in a room and felt like something was missing? Perhaps
                    it felt slightly bare and uninviting. I’ve got some simple tips
                    to help you make any room feel complete.
                </p>
            </div>
            <Bottom author="Michelle Appleton"
                date="28 Jun 2020"
            />
        </>
    )
}