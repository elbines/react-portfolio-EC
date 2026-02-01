import style from './contact.module.css'
import { MainHeader } from "../../reusable/mainheader/mainheader"

export const Contact = () => {
    return (
        <div className={style.contactBox}>
            <MainHeader
                className={style.h1}
                mainHeading="Let's talk"
            />
            <div className={style.innerBox}>
                <img
                    className={style.imgMe}
                    src="/images/portrait.png"
                    alt="Portrait"
                />

                <div className={style.contactInfoBox}>
                    <div className={style.contactInfo}>
                        <p>Elba cacan</p>
                        <p>+47 402 47 323</p>
                        <p>elbacacan@gmail.com</p>
                    </div>
                    {/* 
                    <div className={style.socialMedia}>
                        <a
                            href="https://github.com/navn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={style.githubLink}
                        >
                            <img
                                src="/images/github.png"
                                alt="GitHub"
                                className={style.githubIcon}
                            />
                        </a>
                    </div>*/}
                </div>
            </div>
        </div>
    )
}
