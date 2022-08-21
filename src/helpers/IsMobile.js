import Swal from "sweetalert2";

export const IsMobile = () => {
    let navegador = navigator.userAgent;
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        console.log("Mobile Device");
        Swal.fire("!Hola, Querido Estudiante!", 
        "Al cerrar este mensaje, podrás inscribirte en este maravilloso proyecto de egresados, nos da alegría saber que quieres ser parte de una generación DISTINTA",
        "info");
    } else {
        console.log("No Mobile Device");
    }
}
