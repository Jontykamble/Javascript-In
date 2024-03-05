let data=[3,4,5,56,66,44,3]
let data2=[99,33,22,4,5,6,74]
let data3=[]


for(i=0;i<data.length;i++){

    data3[i]=data[i]
}
for(i=0;i<data2.length;i++){

    data3[data.length+i]=data2[i]
}




console.log(data3)