let num = [5,7,8,9,6,3]
num.push(2)
num.sort()

    console.log(num)
    
   // for(let pos = 0; pos < num.length ; pos++){
       // console.log(`A posição ${pos} tem o valor ${num[pos]}`)
    //}
    for(let pos in num ){
        console.log(`Aposição ${pos} tem valor ${num[pos]}`)
    }