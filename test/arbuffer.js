/**
 * Created by Administrator on 14-3-6.
 */

var buffer = new ArrayBuffer(12);
var x = new Float32Array(buffer, 0, 2);
var y = new Float32Array(buffer, 4, 1);
x[1] = 7;
console.log(y[0]); // 7



var ss={
    "Request":{
        "inMethord": "getUserInfo",
        "inParm": {
            "para_001": "13472732079",
            "para_002": "33333",
            "para_003": "44444"
        }
    }
};


console.log(ss.Request.inParm);
var dd=new Array();
for(var c in ss.Request.inParm)
{
    dd.push(ss.Request.inParm[c]);
    //console.log(ss.Request.inParm[c]);
}
console.log(dd);

/*
ss.Request.inParm.forEach(function(x){

    console.log(x);

});
    */