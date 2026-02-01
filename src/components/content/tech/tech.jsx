//NOT DONE:
// Need to check why the blue color is different

import style from './tech.module.css'
import { SubHeader } from '../../reusable/subheader/subheader.jsx'
import { MainHeader } from '../../reusable/mainheader/mainheader.jsx'

export const Tech = () => {

    return (
        <div className={style.techBox}>
            <MainHeader
                mainHeading="Tech"
                className={style.h1}
            />
            <div >
                <SubHeader
                    className={style.h2}
                    subHeading="HTML, CSS, Flexbox, JavaScript,
                    JSX, React, React Hooks, Zustand, Node.js, 
                    Mongo DB, Postman, Web Accessibility, APIs, 
                    mob-programming, pair-programming, GitHub"
                />
            </div>
        </div>
    )
}
