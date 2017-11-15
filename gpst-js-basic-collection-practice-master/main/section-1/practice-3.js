'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var C=new Array();
    var D=new Array();
    D=collectionB.value;
    for(var i=0;i<collectionA.length;i++)
    {
        for(var j=0;j<D.length;j++ )
        {
            if(collectionA[i]==D[j])
            {
                C.push(collectionA[i]);
                break;
            }
        }
    }

    console.log(C);
    return C;
}
