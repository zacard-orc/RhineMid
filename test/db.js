/**
 * Created by Administrator on 14-3-1.
 */


var mongodb = require('mongodb');

var server = new mongodb.Server('localhost',27017,{auto_reconnect:true,poolSize:10});
var db = new mongodb.Db('blog',server,{safe:true});
console.log("aaaa");
db.open(function(err,db){
    console.log("err"+err);
});
var coll=db.collection('users',{safe:true});
var cc=1;
setTimeout(function(){
    coll.findOne({name:"222"},{safe:true},function(err,result){
        console.log(result)});
    console.log("yes");
},2000);

/*
db.open(function(err,db){
    if(!err)
    {
        console.log('connect');
        /* 删除集合
        db.dropCollection('mycoll',{safe:true},function(err,result){
            console.log(result);
        });
        */
        /* // 在一个集合中插入记录
         db.collection('users',{safe:true},function(err,collection){
            var tmp1 = {
                "name" : "xcvxcv",
                "password" : "xcvx",
                "email" : "2zxcz32@xcv.com"
            };
            collection.insert(tmp1,{safe:true},function(err,result){
                console.log(result);
            });
        });
        */

        /*  //更新记录
        db.collection('users',{safe:true},function(err,collection){
            collection.update({name:"222"},{$set:{email:"33333"}},{safe:true},function(err,result){
            console.log(result);
            });
        });
        */

         //查询一条记录ID
        /*
         db.collection('users',{safe:true},function(err,collection){
         collection.findOne({name:"222"},{safe:true},function(err,result){
         console.log(result);
         });
         });
        */

        //查询全表所有对象
/*
        db.collection('users',{safe:true},function(err,collection){
            collection.find().toArray(function(err, docs){
                console.log(docs);
            });
        });
*/

        //找到对应的1条
/*
        db.collection('users',{safe:true},function(err,collection){
         //   collection.find({}, {explain:true}).toArray(function(err, docs){ 解释计划
            collection.find({name:"222"}).toArray(function(err, docs){
             //   console.log(docs[0].email);
                console.log(docs[0].password);
            });
        });
*/
        //查询所有对象的对象
/*
        db.collection('users',{safe:true},function(err,collection){
            //   collection.find({}, {explain:true}).toArray(function(err, docs){ 解释计划
            collection.find().toArray(function(err, docs){
                //   console.log(docs[0].email);
                console.log(docs[4].password);
            });
        });
*/



        //用游标来查询
/*
        db.collection('users',{safe:true},function(err,collection){
            //   collection.find({}, {explain:true}).toArray(function(err, docs){ 解释计划
            var cursor=collection.find();
            cursor.each(function(err, item){
                console.log(item);
                cursor.toArray(function(err, items){
                    console.log(items);
                });

            });
        });
*/

//       db.close();
/*
    }else{
        console.log(err);
    }});
*/

