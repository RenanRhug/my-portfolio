import { Header } from './components/header/header'

import "./styles/home.scss"
export default function Home() {
  return (
    <main className="container">
     <Header/>
      <div className="experience">
        <h3>Experience</h3>
        <p>Text</p>
      <div className="experiece-time">

      </div>
      <div className="infos">
        <h3>Languages</h3>
        <div className="languages-infos">
          <span>EN - Basic</span>
          <span> PT-BR - Native Speaker</span>
        </div>
        <h3>Education</h3>
        <div className="educational_info">
          <span>System analysis and development</span>
        </div>
        <span></span>
      </div>
      <div className="buttons">
        <div className="social"></div>
      </div>
      <button>Contact me</button>
      </div>
    </main>
  )
}
