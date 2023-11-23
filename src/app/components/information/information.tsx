import { SectionTitle } from "../sectionTitle/sectionTitle"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Languages"/>
        <div className="languages-infos">
          <span>EN - Basic</span>
          <span>PT-BR - Native Speaker</span>
        </div>
        <SectionTitle text="Education"/>
        <div className="educational_info">
        <span></span>
          <span>System analysis and development</span>
        </div>
      </div>
    )
}