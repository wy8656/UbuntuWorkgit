'use strict';

module.exports = function collectSameElements(collectionA,collectionB) {
    var C=new Array();
    var D=new Array();
    var E=new Array();
    for(var m=0;m<collectionA.length;m++)
    {
      C[m]=collectionA[m].key;
    }
    D=collectionB.value;
    for(var i=0;i<C.length;i++)
    {
        for(var j=0;j<D.length;j++ )
        {
            if(C[i]==D[j])
            {
                E.push(C[i]);
                break;
            }
        }
    }

    console.log(E);
    return E;
}
