'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var C=new Array();
  C=objectB.value;
  for(var i=0;i<collectionA.length;i++)
  {
    for (var j=0;j<C.length;j++)
    {
      if(collectionA[i].key==C[j])
      {
        collectionA[i].count--;
      }
    }
  }
  console.log(collectionA);
  return collectionA;
}
