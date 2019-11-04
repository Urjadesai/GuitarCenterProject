
var sample = localStorage.getItem('index');
//console.log("data"+sample);

//var item = localStorage.getItem('index1');
var info1;
var temp = document.getElementById("para1");
var temp1 = document.getElementById("para2");
var temp2 = document.getElementById("para3");
var temp4 = document.getElementById("para4");
var temp5 = document.getElementById("para5");
// temp.innerHTML = sample;
//para4.src = sample;
function loaddoc()
{
    var myval1 = new XMLHttpRequest();
   
     
    myval1.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
             info1 = JSON.parse(this.responseText);
            //document.getElementById("demo").innerHTML = this.responseText;
            //temp4.src = info1.allProducts[sample].image_path;
            //console.log(temp4.src);
            temp4.src = info1.allProducts[sample].image_path;
            temp.innerHTML = info1.allProducts[sample].product_description;
            temp5.innerHTML = info1.allProducts[sample].price;
            temp1.innerHTML = info1.allProducts[sample].shipping_details;
            temp2.innerHTML = info1.allProducts[sample].customer_reviews;

        }
    };
    myval1.open('GET', 'guitardata.json', true);
    myval1.send();
}
var x = document.getElementById("gname");
    var y = document.getElementById("oname");

    var a =document.getElementById("cnum");
    var b = document.getElementById("cardnum");

    var c = document.getElementById("scode");
    var d = document.getElementById("cvv");

    var p = document.getElementById("exdate");
    var q = document.getElementById("exp");
    var s = document.getElementById("expyear");
    var r = document.getElementById("myyear");

    var m =document.getElementById("add");
    var n = document.getElementById("shipadd");

    var v = document.getElementById("bday");
    var w = document.getElementById("bdate");

    var i = document.getElementById("mail");
    var j = document.getElementById("eemail");
function transferdata()
{
    
// for name
    if(x.value !== " ")
    {
        y.innerHTML = x.value;
        x.value = '';
        //document.getElementById("oname").innerHTML = y.value;   
    }
    else{
    alert("please enter the owner name");
    }

   
// for code num
    // if((a.value.length !== 16) && (a.value !== ""))
    if(a.value !== " ")
    {
        b.innerHTML = a.value;
        a.value = '';
       // document.getElementById("cardnum").innerHTML = b.value;
        //return false;     
    }
    else
    {
        alert("Please enter valid Card Number");
    }
   
   
    //console.log("hjkhjkhkj" + c.value.length)
    //if((c.value.length <= 3) && (c.value.lengh >= 0))

    // for cvv code
    if(c.value !== " ")
    {
        console.log(c.value.length)
    d.innerHTML = c.value;
    c.value = '';
   // document.getElementById("cvv").innerHTML = d.value;
    //return false;
    }

    else
    {
        alert("Please enter valid Secuity code");
    }
    
// for expiration month
    if(p.value !== " ")
    {
        q.innerHTML = p.value;
       
        p.value = ' ';
       // document.getElementById("exp").innerHTML = q.value;
       
    }
    else
    {
        alert("please enter valid Expiration Month");
    }
// for expiration year
    if(s.value !== ' ')
    {
        r.innerHTML = s.value;
        s.value = ' ';
        //document.getElementById("myyear").innerHTML = r.value;
    }
    else
    {
        alert("please enter valid Expiration Year");
    }
   
// for shipping address
    if(m.value !== " ")
    {
        n.innerHTML = m.value;
        m.value = ' ';
        //document.getElementById("shipadd").innerHTML = n.value;    
    }
    else
    {
        alert("Please enter shipping Address");
    }
   
    
// for date of birth
    if(v.value !== " ")
    {
        w.innerHTML = v.value;
        v.value = "";
        //document.getElementById("bdate").innerHTML = w.value; 
    }
    else
    {
        alert("Please enter valid Birth Date");
    }
  
   
// for email
    if(!(i.value.match(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/))){
        alert("please enter proper email id!");
        
        return false;}
        j.innerHTML = i.value;
        i.value = ' ';
       // document.getElementById("eemail").innerHTML = j.value;
    
    document.getElementById("PaymentDiv2").style.display = "block";
    document.getElementById("PaymentDiv").style.display = "none";
    document.getElementById("paymentreview").style.display = "none";
    document.getElementById("buy").style.display = "block";
    document.getElementById("edit").style.display = "block";

}

function revdata()
{
  //x.innerHTML = y.value;
    x.value = y.innerHTML;
 // console.log("hii" + x.innerHTML);
  console.log(x.value);

 
  a.value = b.innerHTML;
  console.log(a.value);

  c.value = d.innerHTML;
  console.log(c.value);

  p.value = q.innerHTML;
  console.log(p.value);

  s.value = r.innerHTML;
  console.log(s.value);

  m.value = n.innerHTML;
  console.log(m.value);

  v.value = w.innerHTML;
  console.log(v.value);

  i.value = j.innerHTML;
  console.log(i.value); 
  
  document.getElementById("PaymentDiv2").style.display = "none";
    document.getElementById("PaymentDiv").style.display = "block";
    document.getElementById("edit").style.display = "none";
    document.getElementById("buy").style.display = "none";
    document.getElementById("paymentreview").style.display = "block";

}
function buyproduct()
{
    localStorage.setItem('index2', info.allProducts[index].image_path);
    localStorage.setItem('index', index);
}