
//Question 3 - Valid Anagram
// An Anagram is a word or phrase formed by rearranging the letter

//Input:(s = "anagram"),(t="nagaram")--->Output:True
//Input:(s = "rat"),(t="car")------->Output:false


const isAnagram=function(s,t){
    s = s.split().sort().join("")
    t = t.split().sort().join("")


    return s==t

    

    

    



}


isAnagram(s,t)

//anagram=>["a","n","a"]=>[a,a,m,r]=>aamnr
//nagaram=> 
