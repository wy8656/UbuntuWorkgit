'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
   var i=0,j=0;
   var W=new Array();
   for(i=0;i<collectionA.length;i++)
   {
     var w=new Object();
     w["key"]=collectionA[i].substr(0,1);
     var str=collectionA[i].substr(2);
     if(str)
     {
       w["count"]=Number(str);
     }
     else
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
     for(var j=0;j<C.length;j++)
     {
       if(C[j]==W[i].key&&Math.floor(W[i].count/3))
       {
         W[i].count-=Math.floor(W[i].count/3);
       }
     }
   }
   console.log(W);
   return W;
}
