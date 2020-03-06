function angkaPalindrome(num){
    while(num>0){
        num++
        var string=num.toString();
        var balik=''
            for(var i=string.length-1;i>=0;i--){
                balik+=string[i];
            }
        if(balik == num){
            return num
        }
    }
}
console.log(angkaPalindrome(4))