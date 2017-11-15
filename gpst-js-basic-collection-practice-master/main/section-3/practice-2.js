'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var C=new Array();
    C=objectB.value;
    for(var i=0;i<collectionA.length;i++)
    {
        for (var j=0;j<C.length;j++)
        {
            if(collectionA[i].key==C[j]&&Math.floor(collectionA[i].count/3))
            {
                collectionA[i].count-=Math.floor(collectionA[i].count/3);
            }
        }
    }
    console.log(collectionA);
    return collectionA;
}
