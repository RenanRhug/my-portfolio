import Image from "next/image"
import { SectionTitle } from "../sectionTitle/sectionTitle"
import "./experience.scss"

export function Experience(){
    return(
        <div className="experience">
       <SectionTitle text="Experience"/>
        <p>I've been studying programming since 2020, taking various courses, and now in 2023, I'm starting my college degree in Systems Analysis and Development at Universidade do Vale do Rio dos Sinos. I've ventured into some personal projects that have brought me a lot of knowledge and practical solutions to various problems. 
          I'm always striving for the best optimization while maintaining clean and readable code.</p>
             <div className="experiece-time">
               <div className="experience-language">
                <Image
                  src="/react.png"
                  alt="React Logo"
                  width={40}
                  height={40}
                  priority
                /> 
                <div className="experience-unit">
                  <div className="experience-measure measure-1"><span>1 year</span></div>
                </div> 
               </div >
               <div className="experience-language">
               <Image
                  src="/js.png"
                  alt="JS Logo"
                  width={40}
                  height={40}
                  priority
                />  
                <div className="experience-unit">
                <div className="experience-measure measure-1"><span>1 year</span></div>
                </div>
                </div>
                <div className="experience-language">
                <Image
                  src="/node.png"
                  alt="Node Logo"
                  width={40}
                  height={40}
                  priority
                />  
                <div className="experience-unit">
                <div className="experience-measure measure-2">2 years</div>
                </div>
                </div>
                <div className="experience-language">
                <Image
                  src="/java.png"
                  alt="Java Logo"
                  width={40}
                  height={40}
                  priority
                /> 
                <div className="experience-unit">
                <div className="experience-measure measure-3">3 years</div>
                </div> 
                </div>
       </div>
      </div>
    )
}