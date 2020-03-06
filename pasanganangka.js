function pasanganTerbesar(num){
    var string=num.toString();
    var temp='';
    var arr=[];
    for(var i=0;i<string.length-1;i++){
        temp= string[i]+string[i+1]
        arr.push (temp);
        temp='';
    }
    for(var j=0;j<arr.length;j++){
        for(var x=0;x<arr.length;x++){
            if(arr[x]<arr[x+1]){
                var temp2= arr[x];
                arr[x]=arr[x+1];
                arr[x+1]=temp2
            }
        }
    }    
    return(arr[0])
}

console.log(pasanganTerbesar(123141234)) //41
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99