document.addEventListener("DOMContentLoaded",function(){
const cube = document.getElementById('animatedCube');
const optionsContainer = document.getElementById("options");
const cube_three = document.getElementById("cube-three");
let animationPaused = false;

//Funcion que detiene y reactiva el movimiento del cubo

cube.addEventListener('click',()=>{
    console.log('Di click en el cubo')
    if(!animationPaused){
        console.log('Animacion pausada')
        cube.style.animationPlayState = "paused";
        optionsContainer.style.display = "flex";
        optionsContainer.style.flexDirection = "column"
        animationPaused = true;
        setTimeout(()=>{
            cube.style.animationPlayState = "running";
            animationPaused = false;
        },5000);
    }
})

//Función para
option1.addEventListener("click",()=>{
    console.log("Di Clic en la opción 1");
    window.location.href = "../pages/contact.html";
})
option3.addEventListener("click",()=>{
    console.log("Di Clic en la opción 3");
    window.location.href = "../pages/contact.html";
})
})
