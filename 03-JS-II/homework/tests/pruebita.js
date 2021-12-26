for (var i=0; i <= 100; i++){

}
for (var i=1; i<=100; i++){
    if (i % 2 === 0){
        console.log(i)
    }
    
}
////
function imprimila (n){
    for (var i=1; i<=n; i++){
        if (i % 2 === 0){
            console.log(i)
        }
        if (i > 200){
            for (var j=0; j<10; j++){
                console.log(j)
            }
            return
        }
}
}
//// matriz

function matriz (n,m){
    for (var i = 0; i < n ; i++){
        for(var j = 0; j < m; j++){
            console.log(i + ',' + j);
        }
    }
}
///while

function matriz(n,m){
    var j = 0;
    var i = 0;
     while(i < n){
         while (j < m){
             console.log(i,j);
             j = j + 1;
         }
         j = 0;
    i = i + 1;
     }
}
