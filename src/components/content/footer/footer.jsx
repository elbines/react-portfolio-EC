//NOT DONE:
//I want it to roll wihtout any text breaks

import style from './footer.module.css';

export const Footer = () => {
    return (
        <div className={style.footerBand}>

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
            </div>
            {/*<p className={style.footerText}>
                Elba Cacan · Web Development · Elba Cacan · Web Development ·
                Elba Cacan · Web Development · Elba Cacan · Web Development ·
                Elba Cacan · Web Development · Elba Cacan · Web Development ·
            </p>*/}
        </div>
    );
};
