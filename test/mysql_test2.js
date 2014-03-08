/**
 * Created by Administrator on 14-3-5.
 */

var mysql = require('mysql');
var pool  = mysql.createPool({
    host     : '192.168.137.105',
    user     : 'root',
    password : '123',
    connectionLimit: '5',
    database :'test'
});

pool.getConnection(function(err, connection) {
    connection.beginTransaction(function(err) {
        if (err) { throw err; }
        connection.query('insert into sss values (888,999)', function(err, result) {
            if (err) {
                connection.rollback(function() {
                    throw err;
                });
            }

          /*  var log = 'Post ' + result.insertId + ' added';

            connection.query('INSERT INTO log SET data=?', log, function(err, result) {
                if (err) {
                    connection.rollback(function() {
                        throw err;
                    });
                }
                */
                connection.commit(function(err) {
                    if (err) {
                        connection.rollback(function() {
                            throw err;
                        });
                    }
                    console.log('success!');
                });
            });
        });
    });


