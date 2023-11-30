let res=new XMLHttpRequest();
res.open("GET","https://restcountries.com/v3.1/all");
res.send();
res.onload=function()
{
    let res1=JSON.parse(res.response);
    let res2=res1.filter((obj)=>{
        if(obj.population<200000)
        {
            //  return obj.population;
            console.log(obj.population);
           
        }
    })
}