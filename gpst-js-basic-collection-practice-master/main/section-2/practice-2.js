'use strict';

module.exports = function countSameElements(collection) {
    var W=new Array();

    var i=0,j=0;
    for(i=0;i<collection.length;i++)
    {
        var w=new Object();
        w["key"]=collection[i].substr(0,1);
        if(collection[i].substr(2))
          w["count"]=Number(collection[i].substr(2));
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
    console.log(W);
    return W;
}
