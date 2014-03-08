/**
 * Created by Administrator on 14-3-3.
 */


/**
 * Created by Administrator on 14-3-3.
 */

var http=require("http");
var rule=require("./routes.js");
var mysql = require('mysql');
var logme=require("./logme.js").logme;
var M_tfm=require("./tools.js");

function startmid(db){


//初始化中间件服务器
   var midserver=http.createServer(function(req,res){
        var body='';
        req.setEncoding('UTF8');
        req.on('data',function(chunked){
            body+=chunked;
        });

        req.on('end',function(){
            if(body)
            {   var inp=JSON.parse(body);
                rule.checkrule(db,inp,function(rtn){  //查询路由和执行
                    //处理返回结果
                    res.writeHead(200,{"content-type":"text/plain"});
                    if(rtn)
                    {
                        logme(inp,"Result",rtn);
                        for(var i=0;i< rtn.length ;i++)
                        {
                            res.write(JSON.stringify(rtn[i]));
                        }
                    } else
                    {
                        logme(inp,"Result","NULL");
                    }
                    res.end();
                });
            }
            else{
                res.writeHead(200,{"content-type":"text/plain"});
                res.end("No Detail Body!!Please Resend Now!!");}
        });
    }).listen(3000,function(){
            console.log(M_tfm.now_char()+":MidServer is started:3000");
        });
}


exports.startmid=startmid;