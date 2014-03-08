/**
 * Created by Administrator on 14-3-1.
 */

var mypool=require("../config/dbsettings.js").busipool;
var myform=require("mysql");
var logme=require("./logme.js").logme;


/*判断下一步的方向
* 0:调用数据库执行SQL语句 目前是mysql
* 1:调用其他WEBservice
* 2:直接返回RESPONSE
* coll:配置信息表
* coll2:在MongoDB中的业务表
*/

/* LOGME 日志打印
 a : inParaObj
 b : DisplayObj
 c : ResfulObj
 */

function checkrule(db,inp,callback){
    logme(inp,"received","0");
    var coll=db.collection('R_route_cfg',{safe:true}).find({inMethord:inp.Request.inMethord}).
        toArray(function(err, dbsets){
            logme(inp,"Next RuleFlag is",dbsets[0].nextflag);
            switch (dbsets[0].nextflag){   //判断下一步的方向
/*===================================优选query======================================================*/
                case "0":
                    logme(inp,"I'm in Mysql Process",0);
                    logme(inp,"Get SQL",dbsets[0].nextobj.excsql);
                    switch (dbsets[0].nextobj.type)  //判断是query还是DML
                    {
                        case "select":
                            //组装SQL
                            var paras=new Array();
                            for(var c in inp.Request.inParm)
                            {
                                paras.push(inp.Request.inParm[c]);
                            }
                            var sql=myform.format(dbsets[0].nextobj.excsql, paras);
                            logme(inp,"SQL combine OK",0);
                            //开始查询
                           // console.log(sql);
                            mypool.getConnection(function(err, connection) {
                                logme(inp,"Get mysql pool connnect",err);
                                connection.query(sql, function(err, rows) {
                                    if(!err && rows) //查询不报错且有返回记录
                                    {
                                             callback(JSON.stringify(rows[0]));
                                             logme(inp,"Pool release connnect",0);
                                             connection.release();

                                    }
                                    else{  //查询报错
                                        logme(inp,"Somthing error",err);
                                        callback(err);
                                    }
                                });
                             });
                            break;
/*========================================默选DML===================================================*/
                        default :
                            //组装SQL
                            var paras=new Array();
                            for(var c in inp.Request.inParm)
                            {
                                paras.push(inp.Request.inParm[c]);
                            }
                            var sql=myform.format(dbsets[0].nextobj.excsql, paras);
                            logme(inp,"SQL combile OK",sql);
                            mypool.getConnection(function(err, connection) {
                                logme(inp,"get mysql pool connnect",err);
                                connection.query(sql, function(err, rows) {
                                    if(!err) //DML不报错
                                    {
                                        logme(inp,"Insert ID",rows.insertId);
                                        logme(inp,"Release pool connect",0);
                                        connection.commit(function(err) {
                                          if (err) {
                                            connection.rollback(function() {
                                                throw err;
                                            });
                                        }
                                    callback(rows.insertId);
                                    logme(inp,"DML successed",0);
                                    connection.release();
                                });}
                                    else{  //DML报错
                                        callback(err);
                                    }
                                });
                            });
                    }
                    break;
/*========================================调用外部WEBservice===================================================*/
                case "1":
                    var a=1;
                    break;
/*========================================返回Response===================================================*/
                case "2":
                   // logme(inp,"I'm in ResProcess",0);
                    callback(dbsets[0].nextobj.res_body);
                   // logme(inp,"I have return ResBody",0);
                    break;
                default :
            }


    });



}

//找到方向后，定义下一步的操作

exports.checkrule=checkrule;
