// function targetTerdekat(arr) {
//     for(var i=0;i<arr.length;i++){
//         if(arr[i] === 'o'){
//         var countSpace=0;
//        }if ()
//     }
// }

function targetTerdekat(arr){
    var indexO=[] 
    var indexX=[]
    var jarak=[]
    // looping untuk mencari tahu index X dan index O > di kelompokkan ke satu array
    for(var i=0;i<arr.length;i++){
        temp=[]
        if(arr[i] == 'o'){
            temp=i
            indexO.push(temp)
            
        }else if(arr[i] == 'x'){
            temp=i
            indexX.push(temp)            
        }
    }
    //looping untuk mencari jarak dengan mengurangi masing" angka di indexX dan indexO
        for(var j=0;j<indexO.length;j++){
        temp=[]
    //kondisi jika X lebih besar dari O, supaya tidak negatif.
        for(var k=0;k<indexX.length;k++){
            if(indexX[k]>indexO[j]){
                temp=indexX[k]-indexO[j]
                jarak.push(temp)
            }else if(indexX[k]<indexO[j]){
                temp=indexO[j]-indexX[k]
                jarak.push(temp);
            }
        }
    }
    //looping untuk sortir jarak 
    for(var h=0;h<jarak.length;h++){
        for(var l=0;l<jarak.length;l++){
            if(jarak[l]>jarak[l+1]){
                var temp2 = jarak[l];
                jarak[l]=jarak[l+1];
                jarak[l+1]=temp2;
            }
        }
    }

    //kondisi hasil akhir. jika array kosong =0, jika ada isi maka array pertama.
        if(jarak.length<1){
            return 0;
        }else{
            return jarak[0];
        }
    }

  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

