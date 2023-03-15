import { useState } from 'react'
import './Desktop.css'


function Desktop() {
  
 
   
  
  
  return (
    <div className="desktop">
  
      <div className="icons-dekstop">
        <div className="icon-desktop">
            <a href="#chrome-pop-up">
                <img src="src\assets\image\5131-tOo-Postedetravail.png" alt=""/><span>Poste de travail</span>
            </a>
        </div>
       <div className="icon-desktop">
            <a href="#"><img src="src\assets\image\pngeg.png" alt=""/><span>Internet explorer</span></a>
        </div>
        <div className="icon-desktop">
            <a href="#"><img src="src\assets\image\5130-tOo-Mesdocuments.png" alt=""/><span>Dossier</span></a>
        </div>
        <div className="icon-desktop">
            <a href="#"><img src="src\assets\image\5124-tOo-Corbeillepleine.png" alt=""/><span>Corbeille</span></a>
        </div>
        <div className="icon-desktop">
            <a href="#"><img src="src\assets\image\pngegg.png" alt=""/><span>Word</span></a>
        </div>
      </div>
    </div>

  )
}

export default Desktop
