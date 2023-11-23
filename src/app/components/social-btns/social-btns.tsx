import { GitIcon } from "../icons/git-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";

import "./social-btns.scss"

interface SocialBtsProps {

}
export function SocialBtns(props : SocialBtsProps){
    return(
        <div className="social">
            <a href="https://www.instagram.com/renanrhug/">
                <InstaIcon/>
                </a>
            <a href="https://github.com/RenanRhug">
                <GitIcon/>
            </a>
            <a href="https://www.linkedin.com/in/renan-rainicheski-hugentobler-372b43238/">
                <LinkedinIcon/>
            </a>
        </div>
    )
}