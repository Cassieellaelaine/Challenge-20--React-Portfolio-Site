import React, { useState } from 'react';

const Projects = () => {
    return (
        <div id="projects" class="contents-items">
                <h2><b>Projects</b></h2>
                
           <table>
           <tr><td><button>
            <a href="https://peaceful-tundra-22966-63361d2de1ad.herokuapp.com"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQ-OdYjeNTHrpuh7lMt5TR2DdySHXaz2sSA&usqp=CAU" class="float-right" /></a>
                <p>Peaceful Poetry App</p>
            </button></td></tr>
            <tr><td> <button>
                <a href="https://cassieellaelaine.github.io/Netflix-and-Chill-Generator/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSHrcK1JtoIBN0dwdl3W6gwCxmElt1TJQHTQ&usqp=CAU" class="float-right" /></a>
                <p>Netflix-and-Chill-Generator</p>
            </button></td></tr>
            <tr><td> <button>
                <a href="https://cassieellaelaine.github.io/Challenge-3_Friendly_Parakeet/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd4h1nuHJsNVpXy3CnCEikMTlLJCHnFr1TAg&usqp=CAU" class="float-right" /></a>
                <p>Password Generator</p>
            </button></td></tr>
            <tr><td> <button>
                <a href="https://pwa-text-editor-owens-5c07bb82e1fa.herokuapp.com/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIbCEXFd9VvAXuTZRJMgGwaz9xOosWHkHJDA&usqp=CAU" class="float-right" /></a>
                <p>PWA Text Editor</p>
            </button></td></tr>
           </table>
          
        </div>
       
  )
}

export default Projects;
