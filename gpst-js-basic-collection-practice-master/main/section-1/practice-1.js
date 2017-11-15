'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    //var A=new Array('a','e','h','t','f','c','g','b','d');
   // var B=new Array('a','d','e','f');
    var C=new Array();
    for(var i=0;i<collectionA.length;i++)
    {
        for(var j=0;j<collectionB.length;j++ )
        {
            if(collectionA[i]==collectionB[j])
            {
                C.push(collectionA[i]);
                break;
            }
        }
    }

    console.log(C);
  return C;
}
