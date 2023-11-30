let res=new XMLHttpRequest();
res.open("GET","https://restcountries.com/v3.1/all");
res.send();
res.onload=function()
{
    var res1=JSON.parse(res.response);
    // console.log(res1);
    res1.forEach(element => {
        console.log(element.name,element.capital,element.flag)
    });
}