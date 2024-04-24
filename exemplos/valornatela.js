let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
console.log(valores)
/*
for(let pos=0; pos<=Number.length; pos++){
    console.log(num[pos])
}
*/
for(let pos in valores){
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}