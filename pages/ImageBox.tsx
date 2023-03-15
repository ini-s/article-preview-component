import styles from "../styles/ImageBox.module.css"
import Image from 'next/image'
import drawerImg from "../public/images/drawers.jpg"

export default function ImageBox() {
    return (
        <Image
            className={styles.drawer}
            src={drawerImg}
            alt="drawer-image"
            priority
        />
    )
}