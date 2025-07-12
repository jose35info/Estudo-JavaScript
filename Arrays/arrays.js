let frutas= ["Banana", "Pera", "Uva"];
frutas.push("Goiaba");

let totalFrutas=0;


for( let i= 0; i < frutas.length; i++){
    totalFrutas += frutas[i].length;
    console.log(` Fruta: ${frutas[i]}, Tamanho: ${frutas[i].length}`);
    
}

console.log(`${i}:Total de caracteres em todas as frutas: ${totalFrutas} ${frutas.length}`);
