
let sum=0;
let othersum=0
function num(...numbers){
    for( let i=0; i<numbers.length; i++){
        if( numbers[i]>0){
            sum+=numbers[i]
            othersum+=1
        }
    }
    console.log(sum/othersum)
}
num(-2,0,4,5,3,6,7,-4,4)


function everSum (array){
    let sum = 0
    for (let i = 0; i<array.length;i++){
        if (array[i]%2===0){
            sum+=array[i]**2
        }
    }
    console.log(sum)
}
everSum([1,3,4,5,6,7,2,3,5,10,12])

function letterT(arr){
    for( let i=0; i<arr.length; i++){
        let word=arr[i].toLowerCase()
        if(word.includes('t')){
            console.log(arr[i])
        }
    }
}
letterT(['text', 'frontend', 'apple'])
