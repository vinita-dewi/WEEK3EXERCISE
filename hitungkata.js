function hitungJumlahKata(kalimat){
    var counter=0;
    for(var i=0;i<=kalimat.length-1;i++){
        if(kalimat[i]==' '){
            counter+=1
        }else{
            counter+=0
        }
    }
    counter+=1
    return counter
}

console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 