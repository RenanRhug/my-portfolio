import { Experience } from './components/experience/experience'
import { Header } from './components/header/header'
import { EmailIcon } from './components/icons/email-icon'
import { GitIcon } from './components/icons/git-icon'
import { InstaIcon } from './components/icons/insta-icon'
import { LinkedinIcon } from './components/icons/linkedin-icon'
import {Info} from './components/information/information'
import { SocialBtns } from './components/social-btns/social-btns'

import "./styles/home.scss"
export default function Home() {
  return (
    <main className="container">
     <Header/>
     <Experience/>
     <Info/>
      <div className="buttons">
      <SocialBtns/>
      <button className='btn-primary'>Contact me <EmailIcon/></button>
      </div>
      
    </main>
  )
}
