
import style from './introduction.module.css';
import { SubHeader } from '../../reusable/subheader/subheader.jsx';
import { MainHeader } from '../../reusable/mainheader/mainheader.jsx';
export const Introduction = ({ arrow }) => {


    return (
        <div className={style.introBox}>
            <div className={style.imgWrapper}>
                <img className={style.imgMe} src="/images/portrait.png" alt="Portrait" />
            </div>
            <h2 className={style.h2}>
                Hi, I'm Elba Cacan
            </h2>
            <MainHeader
                mainHeading="Web Developer"
                className={style.h1}
            />
            <p className={style.introText}> I have a background from the public sector, with experience working with complex services and systems. This has shaped how I approach users, workflows and implementation.
                I have expanded my skill set to include frontend and backend web development, and I enjoy working on functional, user-focused digital solutions. </p>
            <button
                className={style.arrow}
                aria-label="Scroll to next section"
            >
                <span className={style.arrowIcon}></span>
            </button>
        </div>
    )
}




