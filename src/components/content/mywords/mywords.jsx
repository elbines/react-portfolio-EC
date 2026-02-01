//NOT DONE:
//Not displaying this page as I have nothing to display, but will still make it ready

//import {useState, useEffect} from "react"
import style from './mywords.module.css'
import { SubHeader } from '../../reusable/subheader/subheader.jsx'
import { MainHeader } from '../../reusable/mainheader/mainheader.jsx'

export const MyWords = () => {

    return (
        <div>
            <div className={style.myWordsBox}>
                <MainHeader mainHeading="My Words" className={style.h1} />
                <div className={style.myWordsInner1}>
                    <SubHeader className={style.Article1} subHeading="Article 1">
                        <p className={style.commonP}>Text for Article 1</p>
                    </SubHeader>
                    <SubHeader className={style.Article2} subHeading="Article 2">
                        <p className={style.commonP}>Text for Article 2</p>
                    </SubHeader>
                </div>
                <div className={style.myWordsInner2}>
                    <SubHeader className={style.Article3} subHeading="Article 3">
                        <p className={style.commonP}>Text for Article 3</p>
                    </SubHeader>
                    <SubHeader className={style.Article4} subHeading="Article 4">
                        <p className={style.commonP}>Text for Article 4</p>
                    </SubHeader>
                </div>
            </div>
        </div>
    )
}
