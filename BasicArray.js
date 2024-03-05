//Given an array [1, 2, 3, 4, 5], what would be the result after adding 10 to each element?

let arr=[1,2,3,4,5]
//By using for each we dont get new array

//By using Map this will return new array
 const updateArr=arr.map((ele)=>ele+10)
 console.log(updateArr)//[ 11, 12, 13, 14, 15 ]


 //Q2 Array Slicing: If you have an array [1, 2, 3, 4, 5], what would be the result of slicing it to get elements from index 1 to 3?
 let arr1=[1,2,3,4,5]
 console.log(arr1.slice(1,3))


 //Q3 Create an array containing the squares of numbers from 1 to 5.

 let arr2=[]
 for(let i=0;i<5;i++){
    arr2.push(i*i)
 }
 console.log(arr2)


 //Q4 Finding Array Max and Min:

 let arr3=[12,3,4,55,66,7]
 let min=arr3[0]
 let max=arr3[0]


 for(let i=0;i<arr3.length;i++){
    if (arr3[i]<min){
        min=arr3[i]
    }
    if(arr3[i]>max){
        max=arr3[i]
    }
 }

 console.log(min,max)

 

 //Q5 Array filtering Given the array [2, 4, 6, 8, 10], create a new array containing only the even numbers.

 let arr4=[2,4,6,8,3,10]
 const oddNumberArray=arr4.filter((ele)=>ele % 2)
 const evenNumberArray=arr4.filter((ele)=>ele % 2==0)
 console.log(oddNumberArray,evenNumberArray)
