// QUESTION 1
function isArithmeticProgression(arr){
    let init = arr[0]
    let diff = arr[1] - arr[0]

    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== (init + (i)*diff)){
            return false
        }
    }
    return true
}

let res1 = isArithmeticProgression([1,2,3,4,6])
console.log("ARITHMETIC PROGRESSION",res1,"\n")

//QUESTION 2
function threeStepsAB(text){
    // text = text.split(' ').join('')
   const obj = {
    'a' : [],
    'b' : []
   }

   for (let index = 0; index < text.length; index++) {
    if (obj[text[index]] !== undefined){
        obj[text[index]].push(index)
    }
   }
//    console.log(obj)
   for (let i of obj['a']){
    let mapped = obj['b'].map(item =>{
        return Math.abs(i-item)
    })
    let res = mapped.filter((item) => item == 4)
    // console.log(obj)
    if (res.length > 0){
        return true
        }
    }
    return false
}


let res2 = threeStepsAB('lane burnwood')
console.log("THREE STEPS AB",res2,"\n")

//QUESTION 3
function sumArray( arr, int){
    let obj = {}
    let len = arr.length
    let i = 0
    let res = []

    while(i < len){
        // console.log(i,arr)
        if (obj[arr[i]] === undefined){
            obj[int-arr[i]] = arr[i]
            arr.shift()
        } else{
            res.push([obj[arr[i]], arr[i] ])
            arr.splice(i, 1)
            len  = arr.length
        }
    }
    return res
 
}

let res3 = sumArray([2,1,4,3],7)
console.log("SUM ARRAY",res3,"\n")


//QUESTION 4
function arrSum(arr){
    if (!Array.isArray(arr)){
        return "Input is not array"
    }

    if (arr.length == 0){
        return "array is empty"
    }

    let max = Number.NEGATIVE_INFINITY;
    let res = []

    for (let i = 0; i < arr.length-1; i++){
        let temp = 0
        let tempArr = []
        let diff = 0
        while(i+diff < arr.length){
            temp+=arr[i+diff]
            tempArr.push(arr[i+diff])
            if (temp > max){
                max = temp
                res = [...tempArr]
            } 
            diff++
            
        }
    }

    console.log("ARR SUM",res,max,"\n")

}

// arrSum([-2, -3, 4, -1, -2, 1, 5, -3])
// arrSum([1,2,10,-4,-5,9,1,2])
arrSum([5,0,10,-4,-5,9,1,-2])
