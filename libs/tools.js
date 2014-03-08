/**
 * Created by Administrator on 14-3-2.
 */


function to_char(xdate,format){
    var o = {
        "M+" : xdate.getMonth()+1, //month
        "d+" : xdate.getDate(), //day
        "h+" : xdate.getHours(), //hour
        "m+" : xdate.getMinutes(), //minute
        "s+" : xdate.getSeconds(), //second
        "q+" : Math.floor((xdate.getMonth()+3)/3), //quarter
        "S" : xdate.getMilliseconds() //millisecond
    };

    if(/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (xdate.getFullYear()+"").substr(4 - RegExp.$1.length));
    }

    for(var k in o) {
        if(new RegExp("("+ k +")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
        }
    }
    return format;
}

function now_char(){
    var format="yyyy-MM-dd hh:mm:ss_S";
    var x=new Date();
    var o = {
        "M+" : x.getMonth()+1, //month
        "d+" : x.getDate(), //day
        "h+" : x.getHours(), //hour
        "m+" : x.getMinutes(), //minute
        "s+" : x.getSeconds(), //second
        "q+" : Math.floor((x.getMonth()+3)/3), //quarter
        "S" : x.getMilliseconds() //millisecond
    };

    if(/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (x.getFullYear()+"").substr(4 - RegExp.$1.length));
    }

    for(var k in o) {
        if(new RegExp("("+ k +")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
        }
    }
    return format;
}

function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
}

//exports.外呼使用名称=内部函数名称
exports.to_char=to_char;
exports.now_char=now_char;
exports.sleep=sleep;


//console.log(to_char(new Date(),"yyyy-MM-dd hh:mm:ss_S"));
