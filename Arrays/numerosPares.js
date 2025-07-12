const parImpar=50;
const numerosPares = [];
for(let i=0; i<=parImpar; i++){
    if(i % 2 === 0) {
        numerosPares.push(i);
    }
}
console.log(`Números pares de 0 a ${parImpar}:`, numerosPares.join(', '));