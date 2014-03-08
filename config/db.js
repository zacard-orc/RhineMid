/**
 * Created by Administrator on 14-3-5.
 */

var x = require('./dbsettings').cfgdb;
var mongodb = require('mongodb');

var server = new mongodb.Server(x.dbip,27017,{auto_reconnect:true,poolSize: x.dbconnum});
module.exports = new mongodb.Db(x.dbname,server,{safe:true});



