function totalAPagar(cantTickets, categoria) {
    const valorTicket= 200;
    let total= cantTickets * valorTicket;

    switch(categoria) {
        case "Estudiante":
            total= total - (total * 80 / 100)
            break;
        case "Trainee":
            total= total - (total * 50 / 100)
            break;    
        case "Junior":
            total= total - (total * 15 / 100)
            break;
    }
    return total
}

let boton= document.getElementById("botonResumen")

boton.addEventListener("click", ()=>{
    let cantidad= document.getElementById("cantidad").value 
    let categoria= document.getElementById("categoria").value

    let valor= totalAPagar(cantidad, categoria)

    let divMensaje= document.getElementById("liveAlertPlaceholder")
    divMensaje.textContent= "Total a pagar: $" + valor
    


})