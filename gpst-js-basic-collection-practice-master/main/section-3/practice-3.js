'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var W=new Array();

    var i=0,j=0;
    for(i=0;i<collectionA.length;i++)
    {
        var w=new Object();
        w["key"]=collectionA[i];
        w["count"]=1;
        for(j=0;j<W.length;j++)
        {
            if(w.key==W[j].key)
            {
                W[j].count+=w.count;
                break;
            }
        }
        if(j>=W.length)
        {
            W.push(w);
        }
    }
    var C=new Array();
    C=objectB.value;
    for(var i=0;i<W.length;i++)
    {
        for (var j=0;j<C.length;j++)
        {
            if(W[i].key==C[j]&&Math.floor(W[i].count/3))
            {
                W[i].count-=Math.floor(W[i].count/3);
            }
        }
    }
  console.log(W);
  return W;
}
