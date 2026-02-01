//Go through skills and add/ delete once more

import style from './skills.module.css'
import { SubHeader } from '../../reusable/subheader/subheader.jsx'
import { MainHeader } from '../../reusable/mainheader/mainheader.jsx'

export const Skills = () => {
    const code = [
        "HTML 5", "CSS", "JavaScript ES6", "React",
        "Styled Components", "Zustand", "API", "Mongo DB",
        "Mongoose", "Authentication", "GitHub"
    ];

    const toolbox = [
        "Terminal", "Postman", "Compass", "Express", "Netlify", "Render", "Mongo DB Atlas", "Figma", "Slack"
    ];

    {/* 
    const upcoming = [
        "text ", "text2"
    ];
    */}

    const more = [
        "Product Description", "User Compatibility",
        "Scrum", "Agile Methodology"
    ];

    return (
        <div className={style.skillBox}>
            <MainHeader mainHeading="Skills" className={style.h1} />
            <div className={style.innerBox}>
                <div className={style.skillList}>
                    <SubHeader className={style.headerCode} subHeading="Code">
                        <ul className={style.commonP}>
                            {code.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </SubHeader>
                </div>
                <div className={style.skillList}>
                    <SubHeader className={style.headerToolbox} subHeading="Toolbox">
                        <ul className={style.commonP}>
                            {toolbox.map((tool, index) => (
                                <li key={index}>{tool}</li>
                            ))}
                        </ul>
                    </SubHeader>
                </div>
                {/* 
                <div className={style.skillList}>
                    <SubHeader className={style.headerUpcoming} subHeading="Certified">
                        <ul className={style.commonP}>
                            {upcoming.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </SubHeader>
                </div>
                */}
                <div className={style.skillList}>
                    <SubHeader className={style.headerMore} subHeading="More">
                        <ul className={style.commonP}>
                            {more.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </SubHeader>
                </div>
            </div>
        </div>
    );
};