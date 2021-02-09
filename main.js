window.addEventListener('load', function(){

    var img=[];
    img[0]="imagenes/slide/img1.jpg";
    img[1]="imagenes/slide/img2.jpg";
    img[2]="imagenes/slide/img3.jpg";

    var indice = 0;

    function slideImagenes(){
        
        document.slide.src = img[indice];

        if(indice < 2){
            indice++;
        }else{
            indice=0;
        }  
    }
    setInterval(slideImagenes, 3000);
});

document.getElementById("Enviar").onclick = function(){

    if(document.getElementById("Nombre").value !="" && document.getElementById("nombre").value !=null &&
        document.getElementById("Email").value != "" && document.getElementById("email").value != null &&
        document.getElementById("Mensaje").value!="" && document.getElementById("mensaje").value!=null &&
        document.getElementById("Telefono").value!="" && document.getElementById("celular").value!=null) {

        console.log("Su nombre es: " + document.getElementById("Nombre").value);
        console.log("Su telefono es: " + document.getElementById("Telefono").value);
        console.log("Su email es: " + document.getElementById("Email").value);
        console.log("Su mensaje es: " + document.getElementById("Mensaje").value);
        alert("Se ha enviado su mensaje.")
    } else{
        alert("Por favor rellene todos los campos.")
    }
}