var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},t={},i=n.parcelRequire536b;null==i&&((i=function(n){if(n in e)return e[n].exports;if(n in t){let i=t[n];delete t[n];let o={id:n,exports:{}};return e[n]=o,i.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(n,e){t[n]=e},n.parcelRequire536b=i);var o;i.register("vNK0r",(function(n,e){var t,i,o,a,r;t=n.exports,i="getBundleURL",o=()=>r,a=n=>r=n,Object.defineProperty(t,i,{get:o,set:a,enumerable:!0,configurable:!0});var c=null;function s(n){return(""+n).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(){return c||(c=function(){try{throw new Error}catch(e){var n=(""+e.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(n)return s(n[0])}return"/"}()),c}})),o=i("vNK0r").getBundleURL()+"piedracolor.ceac76b7.png";var a;a=i("vNK0r").getBundleURL()+"tijeracolor.60f16dd8.png";var r;r=i("vNK0r").getBundleURL()+"papel1.dcfeae33.png";const c={data:{currentGame:{computerPlay:"",myPlay:""},history:[],listeners:[]},init(){const n=localStorage.getItem("saved-state");null!=JSON.parse(n)&&(this.data.history=JSON.parse(n))},getState(){return this.data},setState(n){this.data=n;for(const n of this.listeners)n()},suscribe(n){this.listeners.push(n)},setMove(n){const e=c.getState();e.currentGame.myPlay=n;let t=Math.floor(3*Math.random());console.log(t,"random"),0==t&&(e.currentGame.computerPlay="tijeras"),1==t&&(e.currentGame.computerPlay="piedra"),2==t&&(e.currentGame.computerPlay="papel"),this.pushToHistory(e.currentGame.myPlay,e.currentGame.computerPlay)},getScore(){let n=0,e=0,t=c.data.history;console.log(t);for(const i of t)"ganaste"==this.whoWins(i.myPlay,i.computerPlay)&&n++,"perdiste"==this.whoWins(i.myPlay,i.computerPlay)&&e++;return{myScore:n,computerScore:e}},pushToHistory(n,e){const t=c.getState();t.history.push({myPlay:n,computerPlay:e}),localStorage.setItem("saved-state",JSON.stringify(t.history))},whoWins(n,e){if("piedra"==n){if("papel"==e)return"perdiste";if("tijeras"==e)return"ganaste";if("piedra"==e)return"empataste"}if("tijeras"==n){if("papel"==e)return"ganaste";if("piedra"==e)return"perdiste";if("tijeras"==e)return"empataste"}if("papel"==n){if("tijeras"==e)return"perdiste";if("piedra"==e)return"ganaste";if("papel"==e)return"empataste"}}};var s;s=i("vNK0r").getBundleURL()+"fondo.37dc9bd6.png";var l;l=i("vNK0r").getBundleURL()+"ganaste.b762816a.png";var d;d=i("vNK0r").getBundleURL()+"perdiste.165bd5c5.png";var p;p=i("vNK0r").getBundleURL()+"empatepng.8d8ad703.png";const m=[{path:/\/welcome/,component:function(n){const e=document.createElement("div");e.innerHTML='\n    <section class= "section">\n    <div class="container-title">\n    <custom-text  variant="title">Piedra, Papel o Tijera</custom-text>\n    </div>\n    <div class="container-button">\n    <button-comp class="button">Comenzar</button-comp>\n    </div>\n    <div class = "contenedor-ppt">\n    <custom-tijera variant="small" class="elementos"></custom-tijera>\n    <custom-piedra variant="small" class="elementos" ></custom-piedra>\n    <custom-papel variant = "small" class="elementos" ></custom-papel>\n    </div>\n    </section>\n    ';const t=document.createElement("style");return t.innerHTML=`\n             * {\n            box-sizing: border-box;\n         }\n         body {\n          margin: 0;\n         }\n  \n         .contenedor-ppt {\n         display: flex;\n         flex-direction: row;\n         margin: 0px;\n        }\n        @media (min-width: 700px){\n           .contenedor-ppt{\n              display:flex;\n              flex-direction: row;\n              justify-content: flex-end;\n           }\n        }\n  \n        .elementos {\n         padding: 10px;\n         position: relative;\n         top: 40px;\n         }\n            .container-title {\n         margin: 30px 20px;\n             }\n        .container-button {\n         min-width: 320px;\n         padding: 10px;\n            align-items: center;\n            justify-content: center;\n         }\n         .section {\n            background-image:url(${s});\n            display: flex;\n            height: 100vh;\n         flex-direction: column;\n            justify-content: center;\n        align-items: center;\n         }\n         @media (min-width: 700px){\n            .section{\n               background-image:url(${s});\n               display:flex;\n               height: 100vh;\n               flex-direction:column;\n               justify-content:space-around;\n               align-items:center;\n\n            }\n         }\n        .container {\n         display: flex;\n         flex-direction: row;\n            padding: 20px;\n         }\n  \n    `,e.appendChild(t),e.querySelector(".button").addEventListener("click",(()=>{n.goTo("/instructions")})),e}},{path:/\/instructions/,component:function(n){const e=document.createElement("div");e.innerHTML='\n        <section class = "section">\n        <div class="container-title">\n        <custom-text variant="body">Presioná jugar\n        y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</custom-text>\n        </div>\n        <div class="container-button">\n        <button-comp class="button">¡Jugar!</button-comp>\n        </div>\n        <div class="contenedor-ppt">\n        <custom-tijera class="elementos"></custom-tijera>\n        <custom-piedra class="elementos"></custom-piedra>\n        <custom-papel class="elementos"></custom-papel>\n        </div>\n        </section>\n    ';const t=document.createElement("style");return t.innerHTML=`\n        * {\n            box-sizing: border-box;\n        }\n        body {\n            margin: 0;\n         }\n  \n        .contenedor-ppt {\n            display: flex;\n            flex-direction: row;\n            margin: 0px;\n         }\n         @media (min-width:700px){\n             .contenedor-ppt{\n                 display: flex;\n                 flex-direction: row;\n                 align-items: flex-end;\n\n             }\n         }\n  \n        .elementos {\n            padding: 10px;\n            position: relative;\n            top: 90px;\n        }\n        .container-title {\n            margin: 30px 20px;\n        }\n        .container-button {\n            min-width: 320px;\n            padding: 10px;\n            align-items: center;\n            justify-content: center;\n        }\n        .section {\n            background-image:url(${s});\n            display: flex;\n            min-height: 667px;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n        }\n        @media (min-width:700px){\n            .section{\n                background-image:url(${s});\n                height: 100vh;\n                display:flex;\n                flex-direction: column;\n                justify-content: space-around;\n\n            }\n        }\n  \n    \n    `,e.appendChild(t),e.querySelector(".button").addEventListener("click",(()=>{n.goTo("/play")})),e}},{path:/\/play/,component:function(n){const e=document.createElement("div");e.innerHTML='\n        <section class="section">\n        <div class="container-contador">\n        <contador-comp class ="contador"></contador-comp>\n        </div>\n        <div class="container">\n        <custom-tijera id = "pointer" class="elementos"></custom-tijera>\n        <custom-piedra id = "pointer" class="elementos"></custom-piedra>\n        <custom-papel id = "pointer" class="elementos"></custom-papel>\n        </div>\n        </section>\n        \n    ';const t=document.createElement("style");t.innerHTML=`\n         * {\n         box-sizing: border-box;\n        }\n         body {\n         margin: 0;\n         }\n        .section {\n            background-image:url(${s});\n            display: flex;\n         flex-direction: column;\n         justify-content: space-around;\n          min-width: 375px;\n         min-height: 667px;\n         \n        }\n        @media(min-width:700px){\n            .section{\n                background-image:url(${s});\n                height: 100vh;\n            }\n        }\n\n        .container-contador{\n            min-height: 200px;\n        }\n  \n        .container {\n         min-width: 370px;\n         min-height: 200px;\n         justify-content: space-around;\n          display: flex;\n          flex-direction: row;\n          align-items: flex end;\n         }\n         .elementos {\n             \n             position:relative;\n             top: 150px;\n\n         }\n    \n    `,console.log(c.getScore);const i=e.querySelectorAll("#pointer");let o=e.querySelector(".contador"),a=!1;return i.forEach((e=>{e.addEventListener("change",(e=>{a=!0;new CustomEvent("change",{detail:{myPlay:e.detail.myPlay}});c.setMove(e.detail.myPlay),n.goTo("/results")}))})),o.addEventListener("change",(e=>{console.log("entro al if",e),0==a&&n.goTo("/instructions")})),e.appendChild(t),e}},{path:/\/results/,component:function(n){const e=document.createElement("div"),t=document.createElement("style"),i=c.getState(),o=i.currentGame.myPlay,a=i.currentGame.computerPlay,r=document.createElement("div"),m=document.createElement("div");"piedra"==o&&(r.innerHTML='\n         <custom-piedra variant= "big" class= "my-play"></custom-piedra>\n         '),"papel"==o&&(r.innerHTML='\n         <custom-papel variant="big" class= "my-play"></custom-papel>\n         '),"tijeras"==o&&(r.innerHTML='\n        <custom-tijera variant="big" class="my-play"></custom-tijera>\n        '),"piedra"==a&&(m.innerHTML='\n        <custom-piedra variant= "big" class= "computer-play"></custom-piedra>\n        '),"papel"==a&&(m.innerHTML='\n        <custom-papel variant= "big" class= "computer-play"></custom-papel>\n        '),"tijeras"==a&&(m.innerHTML='\n        <custom-tijera variant= "big" class= "computer-play"></custom-tijera>\n        '),e.innerHTML=`\n        <div class = "container-all">\n        <div class="my-play"></div>\n        <div class="computer-play"></div>\n        <section class= "section">\n        <img class="imagen" src = "${l}"></img>\n        <custom-score></custom-score>\n        <div class= "container-button">\n        <button-comp class="button">Volver A Jugar</button-comp>\n        </div>\n        </section>\n        </div>\n    `,t.innerHTML=`\n        *{\n            box-sizing:border-box;\n        }\n        body{\n            margin:0;\n        }\n        \n        .section{\n            background-image:url(${s});\n            display: none;\n            flex-direction: column;\n            justify-content: space-evenly;\n            align-items: center;\n            min-width:375px;\n            min-height: 667px;\n            position: absolute;\n            top: 0px;\n            bottom: 0px;\n            right: 0px;\n            left: 0px;\n        }\n        .section-2{\n            background-color: #894949E5;\n            display:flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            min-width:375px;\n            min-height: 667px;\n            position: absolute;\n            top: 0px;\n            bottom: 0px;\n            right: 0px;\n            left: 0px;\n            display:none;\n        }\n        \n        .container-button{\n            padding: 20px;\n            min-width: 300px;\n        }\n        .my-play{\n            min-width: 157px;\n            min-height: 300px;\n            \n        }\n        .container-all{\n            background-image:url(${s});\n            display:flex;\n            flex-direction: column-reverse;\n            min-height:100vh;\n            justify-content: space-between;\n            align-items: center;\n        }\n        .computer-play{\n            transform: rotate(180deg);\n        }\n        .button{\n            width:100%;\n        }\n        \n    `;const u=setInterval((()=>1e3)),h=e.querySelector(".section"),g=e.querySelector(".imagen"),y=(e.querySelector("container-all"),e.querySelector(".section-2"));return console.log(y),setTimeout((()=>{clearInterval(u),"ganaste"==c.whoWins(c.getState().currentGame.myPlay,c.getState().currentGame.computerPlay)&&(h.style.display="flex",h.style.background="#888949E5",g.src=l),"perdiste"==c.whoWins(c.getState().currentGame.myPlay,c.getState().currentGame.computerPlay)&&(h.style.display="flex",h.style.background="rgba(137, 73, 73, 0.9)",g.src=d),"empataste"==c.whoWins(c.getState().currentGame.myPlay,c.getState().currentGame.computerPlay)&&(h.style.display="flex",h.style.background="rgba(255, 233, 0, 0.7)",g.src=p)}),1e3),e.querySelector(".computer-play").appendChild(m),e.querySelector(".my-play").appendChild(r),e.appendChild(t),e.querySelector(".button").addEventListener("click",(()=>{n.goTo("/instructions")})),e}},{path:/\/resultslose/,component:function(n){const e=document.createElement("div"),t=document.createElement("style");return e.innerHTML='\n        <section class= "section">\n        <custom-lose></custom-lose>\n        <custom-score></custom-score>\n        <div class= "container-button">\n        <button-comp class="button">Volver A Jugar</button-comp>\n        </div>\n        </section>\n    ',t.innerHTML="\n        *{\n            box-sizing:border-box;\n        }\n        body{\n            margin:0;\n        }\n        .section{\n            background-color: #894949E5;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            min-width:375px;\n            min-height: 667px;\n        }\n        .container-button{\n            padding: 20px;\n            min-width: 300px;\n        }\n        \n    ",e.appendChild(t),e.querySelector(".button").addEventListener("click",(()=>{n.goTo("/instructions")})),e}}];!function(){c.init(),function(){class n extends HTMLElement{constructor(){super(),this.render()}render(){let n=3;const e=this.attachShadow({mode:"open"}),t=document.createElement("div"),i=document.createElement("style");i.innerHTML="\n            .counter{\n                min-width:  60px;\n                min-height: 80px;\n                \n                display: flex;\n                align-items: center;\n                justify-content: center;\n                font-size: 100px;\n            }\n        ";const o=setInterval((()=>{if(t.innerHTML=`\n            <div class= "counter">${n}</div>\n        `,n<=0){clearInterval(o);const e=new CustomEvent("change",{detail:{numero:n}});this.dispatchEvent(e)}n--}),1e3);e.appendChild(t),e.appendChild(i)}}customElements.define("contador-comp",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.attachShadow({mode:"open"}),e=document.createElement("div"),t=document.createElement("style");e.innerHTML='\n                <img class="img" src="./ganar.png"> \n            ',t.innerHTML="\n                .img{\n                    width: 230px;\n                    height: 230px;\n                }\n            ",n.appendChild(e),n.appendChild(t)}}customElements.define("custom-win",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.attachShadow({mode:"open"}),e=document.createElement("div");e.innerHTML='\n                <img src="./perder.png"> \n            ',n.appendChild(e)}}customElements.define("custom-lose",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.getAttribute("variant")||"small",e=this.attachShadow({mode:"open"}),t=document.createElement("div"),i=document.createElement("style");t.innerHTML=`\n                <img variant="big" class="papel" src="${r}"> \n            `,i.innerHTML="\n            .big{\n                width: 157px;\n                height: 300px;\n            }\n            .small{\n                width: 110px;\n                height: 230px;\n            }\n            .papel{\n                width:100%;\n            }\n            ",t.querySelector(".papel").addEventListener("click",(n=>{const e=new CustomEvent("change",{detail:{myPlay:"papel"}});this.dispatchEvent(e)})),t.className=n,e.appendChild(t),e.appendChild(i)}}customElements.define("custom-papel",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.getAttribute("variant")||"small",e=this.attachShadow({mode:"open"}),t=document.createElement("div"),i=document.createElement("style");t.innerHTML=`\n                <img variant="big" class="tijeras" src=${a}> \n            `,i.innerHTML="\n            .big{\n                width: 157px;\n                height: 300px;\n            }\n            .small{\n                width: 110px;\n                height: 230px;\n            }\n            .tijeras{\n                width:100%;\n            }\n            ",t.querySelector(".tijeras").addEventListener("click",(n=>{const e=new CustomEvent("change",{detail:{myPlay:"tijeras"}});this.dispatchEvent(e)})),t.className=n,e.appendChild(t),e.appendChild(i)}}customElements.define("custom-tijera",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.getAttribute("variant")||"small",e=this.attachShadow({mode:"open"}),t=document.createElement("div"),i=document.createElement("style");t.innerHTML=`\n                <img variant= "big" class="piedra" src="${o}"> \n            `,i.innerHTML="\n                .big{\n                    width: 157px;\n                    height: 300px;\n                }\n                .small{\n                    width: 110px;\n                    height: 230px;\n                }\n                .piedra{\n                    width:100%;\n                }\n            ",t.querySelector(".piedra").addEventListener("click",(n=>{const e=new CustomEvent("change",{detail:{myPlay:"piedra"}});this.dispatchEvent(e)})),t.className=n,e.appendChild(t),e.appendChild(i)}}customElements.define("custom-piedra",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.getAttribute("variant")||"body",e=this.attachShadow({mode:"open"}),t=document.createElement("div"),i=document.createElement("style");i.innerHTML="\n            .title{\n                font-size: 80px;\n                font-weight: bold;\n                color: #009048;\n                padding:20px;\n\n            }\n            .body{\n                font-size: 40px;\n                \n            }\n        ",t.className=n,t.textContent=this.textContent,e.appendChild(t),e.appendChild(i)}}customElements.define("custom-text",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.attachShadow({mode:"open"}),e=document.createElement("div"),t=document.createElement("style"),i=c.getScore();e.innerHTML=`\n                <div class="container">\n                <h3 class="title">Score</h3>\n                <custom-text class="text" variant="body">Vos: ${i.myScore}</custom-text>\n                <custom-text class="text" variant="body">Maquina: ${i.computerScore}</custom-text>\n                </div> \n            `,t.innerHTML="\n                .container{\n                    display: flex;\n                    flex-direction: column;\n                    border: solid black 5px;\n                    border-radius: 2px;\n                    min-width: 250px;\n                    min-height: 210px;\n                }\n                .title{\n                    text-align: center;\n                    font-weight: 700;\n                    font-size: bold;\n\n                }\n                .text{\n                    text-align: right;\n                    padding: 10px;\n\n                }\n            ",n.appendChild(e),n.appendChild(t)}}customElements.define("custom-score",n)}(),function(){class n extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.attachShadow({mode:"open"}),e=document.createElement("button"),t=document.createElement("style");e.className="root",t.innerHTML="\n                .root{\n                    width: 100%;\n                    height: 87px;\n                    background-color: #006CFC;\n                    border: solid 4px blue;\n                    border-radius: 4px;\n                    padding: 20px;\n                }\n            ",e.textContent=this.textContent,n.appendChild(e),n.appendChild(t)}}customElements.define("button-comp",n)}();!function(n){function e(n){history.pushState({},"",n),t(n)}function t(t){console.log("el handle recibio una nueva ruta",t);for(const i of m)if(i.path.test(t)){const t=i.component({goTo:e});n.firstChild&&n.firstChild.remove(),n.appendChild(t)}}t(location.pathname.replace("/dwf-m5-parcel-server/","/welcome")),"/dwf-m5-parcel-server/"==location.pathname&&e("/welcome"),window.onpopstate=function(){t(location.pathname)}}(document.querySelector(".root"))}();
//# sourceMappingURL=index.bad48871.js.map
