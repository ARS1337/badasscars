let arr = [1, 2, 23, 1, 2, 3, 4, 5, 6, 4, 3, 2, 1, 23, 4, 5, 556, 55, 5, 1, 11];

let pointer = 0

let res = arr.map(elem1=>{
    console.log('elem1 ',elem1)
    arr.map((elem2,key)=>{
    console.log('elem2 ',elem2)

        if(elem1==elem2){
            console.log("elem1==elem2" ,elem1==elem2)
            // arr.splice(elem2)
        }
    })
})

console.log('arr ',arr)