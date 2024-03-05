
// Question 4:Two sum Brute force solution
//give array of intergrer nums and an integrer targert
//return indicies of the two numbers such that they add up to target

//Input:num=[2,7,11,15],target=9
//output=[0,1](because num[0]+num[1]==9 we return [0,1])


//Brute force Solution

const TwoSum=function(num,targert){

    for(let i=0;i<num.length;i++){

        for(let j=i+1;j<num.length;j++){
            //logic
            if(num[i]+num[j]==targert)return [i,j]

        }


    }



}
console.log(TwoSum([2,6,11,15],17))

