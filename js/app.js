    let header = document.querySelector("header").children;
    
    let btnFav = header[1];
    let btnCeliaco = header[2];
    let btnVegano = header[3];
    let btnLactosa = header[4];

    btnCeliaco.addEventListener("click", ocultarGluten);

    function ocultarGluten(){
        let gluten = document.querySelector(".gluten");
        gluten.style.backgroundColor="red"
    };
