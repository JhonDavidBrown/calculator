
const panatalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");


botones.forEach(boton => {
    boton.addEventListener("click",()=>{
        const botonApretado = boton.textContent;

        if(boton.id === "limpiar"){
            panatalla.textContent= "0";
            return;
        }

        if(boton.id === "borrar"){
            if(panatalla.textContent.length === 1 || panatalla.textContent === "ERROR"){
                panatalla.textContent = "0";
        
            }else {
                panatalla.textContent = panatalla.textContent.slice(0,-1);
            }
            return;
        }

        if(boton.id=== "calcular"){
            try{
                panatalla.textContent = eval(panatalla.textContent);
            }catch{
                panatalla.textContent = "ERROR";
            }
            return;
        }

        if( panatalla.textContent === "0" || panatalla.textContent ==="ERROR"){
            panatalla.textContent = botonApretado;
        }else{
            panatalla.textContent += botonApretado;
        }
    })
})