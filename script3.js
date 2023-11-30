let res=new XMLHttpRequest();
res.open("GET","https://restcountries.com/v3.1/all");
res.send();
res.onload=function()
{
    let res1=JSON.parse(res.response);
    // console.log(res1);
    let res2=res1.reduce((ele1,ele2)=>ele1+ele2.population,0);
    console.log(res2);
}

