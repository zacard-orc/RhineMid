/**
 * Created by Administrator on 14-3-7.
 */
/*
a : inParaObj
b : DisplayObj
c : ResfulObj
 */
var M_tfm=require("./tools.js");

function logme(a,b,c)
{
  console.log(M_tfm.now_char()+":"+
              a.Request.inPK+":"+
              a.Request.inMethord+":"+
              b+":"+
              c);
}

exports.logme=logme;