let plantilla = document.querySelector("template")  
let contenedor = document.querySelector("main")

function update() {
  contenedor.innerText="";
fetch("https://63d158563f08e4a8ff95f787.mockapi.io/menu")
  .then(response => response.json())
  .then(data => {
      
    data.forEach( function(el){
        let wrap = document.createElement("section");

        wrap.classList.add("alergias");
    
        if (el.allergens.includes("Gluten")) {
          wrap.classList.add("gluten");
        }
    
        if (el.allergens.includes("Lacteo")) {
          wrap.classList.add("lacteo");
        }
    
        if (el.allergens.includes("Vegano")) {
          wrap.classList.add("vegano");
        }
        
        let nuevoplato = plantilla.content.cloneNode(true);
        nuevoplato.querySelector("img").src = el.picture;
        nuevoplato.querySelector("h4").innerText = el.name;
        nuevoplato.querySelector("p").innerText = el.ingredients;
        wrap.appendChild(nuevoplato);        
        
        contenedor.appendChild(wrap);  
      });
    
  })
  .catch( err => {
      alert("hubo error")
  });
}

update();