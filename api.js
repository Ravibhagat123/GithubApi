function show()
{
    fetch("https://api.github.com/users/wesbos/repos")
    .then((resolve)=>resolve.json())
    .then((data)=>
    {
        console.log(data);
        for(let i=0;i<data.length;i++)
        {
            var h=document.createElement('h1');
            h.innerHTML="Repository " +(i+1);
            var d=document.createElement('div');//creating Div for each Repository
            d.className="cont";
            document.body.appendChild(d);
            d.appendChild(h);
            var p1=document.createElement('p');//creatin paragraph for object elemnts
            p1.innerHTML="ID"+": "+data[i].id;
            p1.className="pclass";
            d.appendChild(p1);
            var p2=document.createElement('p');
            p2.innerHTML="NODE_ID"+": "+data[i].node_id;
            p2.className="pclass";
            d.appendChild(p2);
            var p3=document.createElement('p');
            p3.innerHTML="Name"+": "+data[i].name;
            p3.className="pclass";
            d.appendChild(p3);
            var p4=document.createElement('p');
            p4.innerHTML="Archive_url"+": "+data[i].archive_url;
            p4.className="pclass";
            d.appendChild(p4);
            
            
           
            
            
    
            /*console.log(data[i].id);
            console.log(data[i].node_id);
            console.log(data[i].name);*/
            
        }
    })
}

show();