import styles from "../styles/Bottom.module.css"
import Image from 'next/image'
import { useState } from "react"

interface Props {
    author: string;
    date: string;
}

export default function Bottom({ author, date }: Props) {
    const [active, setIsActive] = useState<boolean>(false)
    const bottomStyle = {
        padding: active ? "0" : "1rem 2rem 1.5rem 2rem"
    }

    const activeMobileStyle = {
        backgroundColor: active ? "hsl(217, 19%, 35%)" : "white",
    }

    function handleClick() {
        setIsActive(prevValue => !prevValue)
    }
    return (
        <div className={styles.bottom} style={bottomStyle}>
            {!active ?
                <>
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
                    <div className={styles.shareIconCircle} onClick={handleClick}>
                        <Image
                            className={styles.shareIcon}
                            src="/images/icon-share.png"
                            alt="share-image"
                            width={15}
                            height={13}
                        />
                    </div>
                </>
                :
                <>
                    <div className={styles.activeMobile} style={activeMobileStyle}>
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
                        <div className={styles.shareIconCircleActive} onClick={handleClick}>
                            <Image
                                className={styles.shareIconActiv}
                                src="/images/icon-share.png"
                                alt="share-image"
                                width={15}
                                height={13}
                            />
                        </div>
                    </div>

                    <div className={styles.activeDesktop}>
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
                        <div className={styles.shareIconCircleActive} onClick={handleClick}>
                            <Image
                                className={styles.shareIconActiv}
                                src="/images/icon-share.png"
                                alt="share-image"
                                width={15}
                                height={13}
                            />
                        </div>
                        <div className={styles.socials}>
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
                            <div className={styles.triangleDown}></div>
                        </div>
                    </div>
                </>
            }
        </div >
    )
}