import styles from "../styles/Bottom.module.css"
import Image from 'next/image'
interface Props {
    author: string;
    date: string;
}
export default function Bottom({ author, date }: Props) {
    return (
        <div className={styles.bottom}>
            <Image
                className={styles.avatar}
                src="/images/avatar-michelle.jpg"
                alt="avatar-img"
                width={175}
                height={175}
            />
            <div className={styles.bottomInfo}>
                <p className={styles.author}>
                    {author}
                </p>
                <p className={styles.date}>
                    {date}
                </p>
            </div>
            <div className={styles.shareIconCircle}>
                <Image
                    className={styles.shareIcon}
                    src="/images/icon-share.png"
                    alt="share-image"
                    width={15}
                    height={13}
                />
            </div>
            {/* <div className={styles.activeBottom}>
                <p className={styles.share}>
                    share
                </p>
                <Image
                    className={styles.icon}
                    src="/images/icon-facebook.png"
                    alt="facebook-image"
                    width={20}
                    height={20}
                />
                <Image
                    className={styles.icon}
                    src="/images/icon-twitter.png"
                    alt="twitter-image"
                    width={20}
                    height={17}
                />
                <Image
                    className={styles.icon}
                    src="/images/icon-pinterest.png"
                    alt="pinterest-image"
                    width={20}
                    height={20}
                />
                <div className={styles.shareIconCircleActive}>
                    <Image
                        className={styles.shareIconActiv}
                        src="/images/icon-share.png"
                        alt="share-image"
                        width={15}
                        height={13}
                    />
                </div>
            </div> */}
        </div >
    )
}