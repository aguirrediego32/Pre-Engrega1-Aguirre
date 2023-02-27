/*Este es un sistema que emula una máquina de reciclar botellas. Tenemos 3 opciones:
1. INGRESAR BOTELLAS en el cual se pregunta al usuario cuantas botellas va a ingresar.
Luego el sistema va arrojando números aleatorios simulando pesar dichas botellas(de 1 a 3000).
Existen 3 valores dependiendo el peso.
Menor o igual a 500gr 50$.
Mayor o igual a 501 y menor o igual a 1500 125$.
Mayor a 1500 200$

2. CONSULTAR SALDO, nos indica el saldo que se va acumulando con la recaudación de las botellas

3. SALIR que nos saca del sistema.
*/ 
let opcion 
let valorBotella
let saldo = 0

function menu(){
    opcion = parseInt(prompt("Seleccione una de las siguientes opciones: \n 1.Ingresar botellas \n 2.Consultar saldo \n 3.Salir"))
}

function procesarOpcion(unaOpcion) {
   
    switch(unaOpcion) {
        case 1:
           ingresarBotellas()
           reciclarBotellas()
            break
        case 2:
            alert("Su saldo es: " + saldo + "$")
            reciclarBotellas()
            break
        case 3:
            alert("Esta saliendo del sistema, muchas gracias por usar la app")
            break
    }
}

function ingresarBotellas() {
    let cantidad = parseInt(prompt("Indique cuantas botellas va a ingresar"))
    pesarBotellas(cantidad)
}


function pesarBotellas(cant) {
    for(i=1;i< cant + 1; i++){
        peso = parseInt(Math.random() * 3000)
        alert("La botella número " + i + " pesa " + peso + " gramos" )
        cotizarBotella(peso)
    }
}

function cotizarBotella(unaBotella) {
    if(unaBotella <= 500){
        valorBotella = 50
        alert("El precio de la botella es: " + valorBotella + "$")
       
    }else if(unaBotella >= 501 && unaBotella <= 1500){
        valorBotella = 125
        alert("El precio de la botella es: " + valorBotella + "$")
       
    }else{
        valorBotella = 200
        alert("El precio de la botella es: " + valorBotella + "$")
        
    }
    saldo += valorBotella 
}

function reciclarBotellas(){
    menu()
    while(opcion != 1 && opcion != 2 && opcion != 3){
        alert("Opción invalida")
        menu()
    }

    procesarOpcion(opcion)
}

reciclarBotellas()