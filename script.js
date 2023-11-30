let result=new XMLHttpRequest();
result.open("GET","https://restcountries.com/v3.1/all");
result.send();
result.onload=function()
{
    var res=JSON.parse(result.response);
    // console.log(res);
    var res2=res.filter((obj)=>obj.region=="Asia");
    console.log(res2);
}