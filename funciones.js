// EDAD
let year=0;

year= Number(prompt("Ingrese su año de nacimiento"));

function getAge(year){
    let age;
    age=2023-year;
return age
}
let age= getAge(year);

alert("Su edad es: "+ age);

// Multiplicacion con sumas

function getMultiplicacion(n1,n2){
    let mult=0;

    for(let i=0;i<n1;i++)
    
    mult=mult+n2;

    return mult;
}

resultado = getMultiplicacion(3,2);
alert("El resultado de la multiplicacion es: "+ resultado)