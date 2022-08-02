// const navToggle = document.querySelector(".nav-toggle");
// const navMenu = document.querySelector(".nav-menu");

// navToggle.addEventListener("click",() => {
//     navMenu.classList.toggle("nav-menu_visible")
// });
let ubicacionInicial = window.pageYOffset;
// function menu(){
//     console.log(window.pageYOffset);
// }

// banner del inicio
let ancho = document.documentElement.clientWidth;  
if (ancho <= 768){   
    document.getElementsByClassName("section-div2ul")[0].style.display ="block";
    document.getElementsByClassName("section-div2ul")[0].style.width ="100%"; 
    document.getElementsByClassName("videoConten")[0].style.width ="100%";
    document.getElementsByClassName("contenidoimg")[0].style.width ="100%";
    
    document.getElementsByClassName("contenidoimg")[0].style.height ="80vh";
    document.getElementsByClassName("slide")[0].style.height ="80vh";
};
window.addEventListener("resize",function(){
    // console.log(ancho,"ancho");
    if (ancho <= 768){   
        document.getElementsByClassName("section-div2ul")[0].style.display ="block";
        document.getElementsByClassName("section-div2ul")[0].style.width ="100%";
        document.getElementsByClassName("videoConten")[0].style.width ="100%";
        document.getElementsByClassName("contenidoimg")[0].style.width ="100%";
        
        document.getElementsByClassName("contenidoimg")[0].style.height ="80vh";
        document.getElementsByClassName("slide")[0].style.height ="80vh";
        progreso();
    }else{
        document.getElementsByClassName("section-div2ul")[0].style.display ="flex";
        document.getElementsByClassName("section-div2ul")[0].style.width ="200%";
        document.getElementsByClassName("videoConten")[0].style.width ="100%";
        document.getElementsByClassName("contenidoimg")[0].style.width ="100%";
        progreso();
    } 
});

window.addEventListener("scroll",function(){   
   
    progreso();
    // menu();
})
function progreso(){
    let scroll = document.documentElement.scrollTop;
    let ancho2 = document.documentElement.clientWidth;
    // console.log(ancho2, "ancho2");  
    let alto = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // let progreso =  Math.round((scroll/alto)*100);
    let progreso =  (scroll/alto)*100;

    // console.log(`${progreso}%`);
    // document.getElementsByClassName("barra")[0].getElementsByClassName.width = `${progreso}%`;
    let  d= document.getElementsByClassName("barra")[0].style.width = progreso + "%";
    
    if (progreso>1){
        if (ancho2 >= 768){

            // let ancho = document.documentElement.clientWidth; 
            document.getElementsByClassName("section-div2ul")[0].style.display ="flex";
            document.getElementsByClassName("videoConten")[0].style.width ="40%";
            document.getElementsByClassName("videoConten")[0].style.transition = "0.7s";
            document.getElementsByClassName("contenidoimg")[0].style.width ="60%";
            document.getElementsByClassName("section-div2ul")[0].style.width ="100%";
            // document.getElementsByClassName("contenidoimg")[0].style.transition = "0s";
            
        }
    } else if(ancho2 <= 768) {
        document.getElementsByClassName("section-div2ul")[0].style.display ="block";
        document.getElementsByClassName("section-div2ul")[0].style.width ="100%";
        document.getElementsByClassName("videoConten")[0].style.width ="100%";
        document.getElementsByClassName("contenidoimg")[0].style.width ="100%";
        
        document.getElementsByClassName("contenidoimg")[0].style.height ="80vh";
        document.getElementsByClassName("slide")[0].style.height ="80vh";
    }else{
        document.getElementsByClassName("section-div2ul")[0].style.display ="flex";
        document.getElementsByClassName("section-div2ul")[0].style.width ="200%";
        document.getElementsByClassName("videoConten")[0].style.width ="100%";
        document.getElementsByClassName("contenidoimg")[0].style.width ="100%";

    }
} 

// efectos de scroll
ScrollReveal().reveal('.efectoScroll', {
    duration : 13000,
    delay: 4000
    });
ScrollReveal().reveal('.efectoAparecer', {
    duration : 5000 
    });
ScrollReveal().reveal('.efectoScrollTop',{
    duration : 7000,
    origin : 'top',
    distance : '3rem',
    interval: 1000
});
ScrollReveal().reveal('.efectoScrollRight',{
    duration : 7000,
    origin : 'right',
    distance : '3rem',
    interval: 1000
});
ScrollReveal().reveal('.efectoScrollBottom',{
    duration : 7000,
    origin : 'bottom',
    distance : '3rem',
    interval: 1000
});
ScrollReveal().reveal('.efectoScrollLeft',{
    duration : 7000,
    origin : 'left',
    distance : '3rem',
    interval: 1000
}); 

// galleria modal 

  
  // logica para GALERIA DE MAS SERVICIOS 
  const imagenes = document.querySelectorAll('.img-galeria');
  console.log(imagenes);
  const imagenesLight = document.querySelector('.agregar-imagen');
  const contenedorLight = document.querySelector('.imagen-light');

  const close = document.querySelector('.close');


  imagenes.forEach(imagen =>{
      imagen.addEventListener('click', ()=>{
        console.log(imagen.getAttribute('src'));
          aparecerImagen(imagen.getAttribute('src'))
      })
  })

  const aparecerImagen = (imagen)=>{
      imagenesLight.src = imagen
      contenedorLight.classList.toggle('show');
      imagenesLight.classList.toggle('showImage');
      close.style.opacity = '1';
  }

  contenedorLight.addEventListener('click',(e)=>{
      if(e.target !== imagenesLight ){
          contenedorLight.classList.toggle('show');
          imagenesLight.classList.toggle('showImage');
          close.style.opacity = '1';
      }
  })