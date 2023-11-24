import Image from "next/image"
import "./header.scss"

export function Header() {
 return(
 <div className="header">
  <div>
      <h1>Hi, i´m Renan Hugentobler</h1>
      <h2>Software Developer</h2>
      </div>
      <Image
                  src="/pf.jpg"
                  alt="Perfil Logo"
                  width={325}
                  height={300}
                  priority
                />  
         
         </div>
     

)
}