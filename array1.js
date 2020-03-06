function balikString(string){
    var balik='';
    for(var i= string.length-1;i>=0;i--){
        for(var j=string[i].length-1;j>=0;j--){
            balik+= string[i][j]
        }
    }
    return balik;
}

var arr =['hello world ','nice to meet you ','see you '];

console.log(balikString(arr));