/**
 * Created by Administrator on 14-2-26.
 */



//定义模块插件
var M_tfm=require("./libs/tools.js");
var M_http=require("./libs/midserver.js");
var M_db=require("./config/db.js");
var M_x=require("./config/dbsettings.js").cfgdb;



console.log(M_tfm.now_char()+":PID:"+process.pid);

//初始化数据库，并启动HTTP SERVER
M_db.open(function(err,db){
    if(!err) { console.log(M_tfm.now_char()+":connect OK"); }
    db.authenticate(M_x.dbuser,M_x.dbpwd, function(err, result){
    console.log(M_tfm.now_char()+":auth OK");
    M_http.startmid(db);
    });
});



//ab -n 2 -p ./btext/upbody.txt http://127.0.0.1:3000/

