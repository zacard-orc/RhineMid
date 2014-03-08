/**
 * Created by Administrator on 14-3-2.
 */

var mysql = require('mysql');

var cfgdb={
    dbip:'localhost',
    dbname: 'blog',
    dbuser:'rhbusi',
    dbpwd:'rhbusi',
    dbconnum:5
};

var busipool  = mysql.createPool({
    host     : '192.168.137.105',
    user     : 'root',
    password : '123',
    connectionLimit: '10',
    database: 'test'
});

exports.cfgdb=cfgdb;
exports.busipool=busipool;














