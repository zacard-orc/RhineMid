/**
 * Created by Administrator on 14-3-6.
 */


function a(name,callback)
{
    var xx=11;
    console.log(name);
    callback(xx);
}

a("ccc",function(x)
{
    console.log(x);
});


