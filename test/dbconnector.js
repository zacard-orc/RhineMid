/**
 * Created by Administrator on 14-3-2.
 */


var http=require("http");
var mongodb = require('mongodb');
var tfm=require("./../libs/tools.js");   //时间格式化工具
var mysql = require('mysql');

function dbconninfo(db){
//console.log(db);
switch (V_dbcfginfo.dbtype){
    case "mongodb":
            var server = new mongodb.Server(V_dbcfginfo.dbip,
                                           27017,
                                           {auto_reconnect:true,
                                            poolSize:V_dbcfginfo.dbconnum});
            var db = new mongodb.Db(V_dbcfginfo.dbname,server,{safe:true});
            console.log(tfm.now_char()+":DB conn"+V_dbcfginfo.dbip+":"+V_dbcfginfo.dbname+" return");
            return db;
    case "mysql":
            var pool  = mysql.createPool({
                host     : V_dbcfginfo.dbip,
                user     : V_dbcfginfo.dbuser,
                password : V_dbcfginfo.dbpwd,
                connectionLimit: V_dbcfginfo.dbconnum});
            console.log(tfm.now_char()+":DB conn"+V_dbcfginfo.dbip+":"+V_dbcfginfo.dbname+" return");
            return pool;

    default :
  }
}
exports.dbconninfo=dbconninfo;

