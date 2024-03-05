
//Question 5 - Best Time Buy and Sell stocks
//You are given an array Prices where prices[i] is the price of the given stock
//on ith day
//you want to maximize your profit by choosing a single day to buy one stock
//return the maximum profite ,if you cannot achive any profit,return 0

//Input:prices=[7,1,5,3,6,4]--->output:5
//Input:prices=[7,6,4,3,1]----->output:0


//Brute Force Solution

function maxProfit(price){

    let globalProfit=0;

    for(let i=0;i<price.length;i++){
        for(let j=i+1;j<price.length;j++){

            const currentProfit=price[j]-price[i]


            if(currentProfit>globalProfit)globalProfit=currentProfit



        }
    }

    return globalProfit

}

console.log(maxProfit([7,1,5,3,6,4]))