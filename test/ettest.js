/**
 * Created by Administrator on 14-3-1.
 */


var EventProxy = require('eventproxy');
var proxy = new EventProxy();
var add= function (v1, v2, v3){
    console.log(v1+v2+v3+'');
};
proxy.assign("v1", "v3", "v2", add);


proxy.trigger("v1", 1);
proxy.trigger("v2", 2);

setTimeout(function(){
    proxy.trigger("v3", 3);
},2000);
/*
clinet1.get("key1", function (err, data) {
    //do something
    proxy.trigger("v1", data);
});
clinet2.get("data", function (err, data) {
    //do something
    proxy.trigger("v2", data);
});
clinet3.get("l10n", function (err, data) {
    //do something
    proxy.trigger("v3", data);
});
    */