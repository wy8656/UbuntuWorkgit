'use strict';

module.exports = function countSameElements(collection) {
    var W=new Array();

    var i=0,j=0;
    for(i=0;i<collection.length;i++)
    {
        var w=new Object();
        w["name"]=collection[i].substr(0,1);
        var str=collection[i].substr(2);
        if(str)
        {
          if(str.charAt(str.length-1)==']')
            w["summary"]=Number(str.substr(0,str.length-1));
          else
              w["summary"]=Number(str);
        }
        else
            w["summary"]=1;
        for(j=0;j<W.length;j++)
        {
            if(w.name==W[j].name)
            {
                W[j].summary+=w.summary;
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
