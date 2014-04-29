RhineMid
========

A light Useful middware by Node.Js.I hope it graceful like the famous Rhine River.  
It support JSON I/O  MongoDB  MySQL.   
I use it in CMCC/Shanghai CRM/WEB/BOMC Framework.   
It can be support High-Performance concurrance.  
It can be business-configuration type midware and easy to use it.   
The next generation of this Middleware is now being rebuilt intensely.It will support the most popular streaming-computer.  
 
How to Use  
========  
1, git clone git@github.com:zacard-orc/RhineMid.git    
2, npm install //It based on MongoDB (configuration DB),Mysql (Busi DB),EventProxy    
3, Configure Route DB.Just see the ~/egpic/001.png    
4, Configure DB connection.Just see the ~/egpic/002.png. ~/config/db.js. ~/config/dbsettings.js    


Performance  
========  
ab -c 100 -t 20 -p ./btext/resbody.txt http://127.0.0.1:3000/                          
I test by Lenove E49/i5. Config DB/Busi DB[in VM Centos/APP all in the same book.      
                                                                                     
Requests per second:    688.95 [#/sec] (mean)                                         
Time per request:       145.149 [ms] (mean)                                           
Time per request:       1.451 [ms] (mean, across all concurrent requests)             
Transfer rate:          112.36 [Kbytes/sec] received                                  
                        244.64 kb/s sent                                              
                        357.00 kb/s total                                             
                                                                                     
Connection Times (ms)                                                                 
              min  mean[+/-sd] median   max                                           
Connect:        0    0   0.5      0       8                                           
Processing:    52  144  30.5    143     298                                          
Waiting:       44  143  30.5    142     297                                          
Total:         53  144  30.5    143     299                                          
                                                                                     
Percentage of the requests served within a certain time (ms)                          
  50%    143                                                                         
  66%    157                                                                         
  75%    165                                                                         
  80%    170                                                                         
  90%    182                                                                         
  95%    195                                                                         
  98%    210                                                                         
  99%    226                                                                         
 100%    299 (longest request)                                                       