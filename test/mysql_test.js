/**
 * Created by Administrator on 14-3-3.
 */

//single
    /*
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '192.168.23.105',
    user     : 'root',
    password : '123',
    database : 'test'
});


connection.connect();
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;

    console.log('The solution is: ', rows[0].solution);
});
*/



function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
}


var EventProxy = require('eventproxy');
var proxy = new EventProxy();
var add= function (v1, v2, v3){
    console.log(v1+v2+v3+'');
};
proxy.assign("v1", "v2", "v3", add);

process.on('uncaughtException', function(err) {
    console.log('Caught exception: ' + err);
});

console.log(process.pid);

setTimeout(function(){
    proxy.trigger("v3", 3);
},2000);

var mysql = require('mysql');
var pool  = mysql.createPool({
    host     : '192.168.137.105',
    user     : 'root',
    password : '123',
    connectionLimit: '2'
});



pool.getConnection(function(err, connection) {
        console.log("get connnect:"+err);
        // Use the connection
        connection.query( 'SELECT 1 AS solution', function(err, rows) {
            sleep(1000);
            console.log(rows);
            // And done with the connection.
            console.log("release connnect");
            proxy.trigger("v1", 1);
           connection.release();
         });
    });

//pool.release();


pool.getConnection(function(err, connection) {
    console.log("get connnect:"+err);
    // Use the connection
    connection.query( 'SELECT 2 AS solution', function(err, rows) {
        sleep(2000);
        // And done with the connection.
        console.log(rows[0]);
        console.log("release connnect");
        proxy.trigger("v2", 2);
        connection.release();
    });
});

pool.getConnection(function(err, connection) {
    console.log("get connnect:"+err);
    // Use the connection
    connection.query( 'SELECT 3 AS solution', function(err, rows) {
        console.log("get connnect query"+err);
        sleep(5000);
        // And done with the connection.
        console.log(rows);
        console.log("release connnect");
        proxy.trigger("v3", 3);
        connection.release();

        //console.log(pool);
    });
});






