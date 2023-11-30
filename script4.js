let res=new XMLHttpRequest();
res.open("GET","https://restcountries.com/v2/all");
res.send();
res.onload=function()
{
    var res1=JSON.parse(res.response);
    // console.log(res1);
    for(var i=0;i<res1.length;i++)
    {
        if(res1[i].currencies)
        {
            if(res1[i].currencies[0].code == "USD")
            {
                console.log(res1[i].name);
            }
        }
    }
}

