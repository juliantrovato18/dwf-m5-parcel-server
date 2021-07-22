import { state } from "../../state";
const fondo = require("url:../../../src/img/fondo.png");

export function initiPlayPage(params){
    const div = document.createElement("div");
    div.innerHTML= `
        <section class="section">
        <div class="container-contador">
        <contador-comp class ="contador"></contador-comp>
        </div>
        <div class="container">
        <custom-tijera id = "pointer" class="elementos"></custom-tijera>
        <custom-piedra id = "pointer" class="elementos"></custom-piedra>
        <custom-papel id = "pointer" class="elementos"></custom-papel>
        </div>
        </section>
        
    `
    const style = document.createElement("style");
    style.innerHTML= `
         * {
         box-sizing: border-box;
        }
         body {
         margin: 0;
         }
        .section {
            background-image:url(${fondo});
            display: flex;
         flex-direction: column;
         justify-content: space-around;
          min-width: 375px;
         min-height: 667px;
          background-image: url("//dist/fondo.png");
        }
        @media(min-width:700px){
            .section{
                background-image:url(${fondo});
                height: 100vh;
            }
        }

        .container-contador{
            min-height: 200px;
        }
  
        .container {
         min-width: 370px;
         min-height: 200px;
         justify-content: space-around;
          display: flex;
          flex-direction: row;
          align-items: flex end;
         }
         .elementos {
             
             position:relative;
             top: 150px;

         }
    
    `
    console.log(state.getScore);
    const pointEl = div.querySelectorAll("#pointer");
    const contador = div.querySelector(".contador");
    pointEl.forEach(element =>{
        element.addEventListener("change", (e:any)=>{
            const evento = new CustomEvent("change", {detail:{
            myPlay: e.detail.myPlay
        }})
        
        state.setMove(e.detail.myPlay)
        
        params.goTo("/results");
        })
    })
    
    
    div.appendChild(style);
    
    
    return div;
}