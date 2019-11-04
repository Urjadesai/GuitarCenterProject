//var imgarray = ["product1.jpg","guitar-2.jpg","product3.jpg","guitar-3.jpg"];
 var img = document.getElementById("imgggg");
var productinfo = document.getElementById("product");
var shippinginfo = document.getElementById("Shipping");
var reviewinfo = document.getElementById("review");
var priceinfo = document.getElementById("price");
//document.getElementById("product").style.display = "none";

function prodDescription()
{
   // document.getElementById("product").style.display = "block";
   if(productinfo.style.display === 'none')
   {
    productinfo.style.display = "block";
    productinfo.innerHTML = info.allProducts[index].product_description;
   }
   else
   {
    productinfo.style.display = "none";
   }
   
}

function proprice()
{
    if(priceinfo.style.display === 'none')
    {
        priceinfo.style.display = 'block';
        priceinfo.innerHTML = info.allProducts[index].price;    
    }
    else
   {
    priceinfo.style.display = "none";
   }
}

function proship()
{
    if(shippinginfo.style.display === 'none')
    {
        shippinginfo.style.display = 'block';
        shippinginfo.innerHTML = info.allProducts[index].shipping_details;    
    }
    else
   {
    shippinginfo.style.display = "none";
   }
}

function prorew()
{
    if(reviewinfo.style.display === 'none')
    {
        reviewinfo.style.display = 'block';
        reviewinfo.innerHTML = info.allProducts[index].customer_reviews;  
    }
    else
   {
    reviewinfo.style.display = "none";
   }
}

// $(document).ready(function(){
//     $("button").click(function(){
//         $("price").toggle();
//     });
// });
    var index = 0;
    var info;
    info = JSON.parse(this.responseText);
    // img.src = info.allProducts[index].image_path;
    // productinfo.innerHTML = info.allProducts[index].product_description;
    // priceinfo.innerHTML = info.allProducts[index].price;
    // shippinginfo.innerHTML = info.allProducts[index].shipping_details;
    // reviewinfo.innerHTML = info.allProducts[index].customer_reviews;

    function nextimg()
    {
        if(index == 3)
        {
            index = 0;
        }
        else
        {
            index++;
        }
        img.src = info.allProducts[index].image_path;
        productinfo.innerHTML = info.allProducts[index].product_description;
        priceinfo.innerHTML = info.allProducts[index].price;
        shippinginfo.innerHTML = info.allProducts[index].shipping_details;
        reviewinfo.innerHTML = info.allProducts[index].customer_reviews;
    }
    
    function previmg()
    {
        if(index == 0)
        {
            index = 3;
        }
    
        else
        {
            index -- ;
        }
    
        img.src = info.allProducts[index].image_path;
        productinfo.innerHTML = info.allProducts[index].product_description;
        priceinfo.innerHTML = info.allProducts[index].price;
        shippinginfo.innerHTML = info.allProducts[index].shipping_details;
        reviewinfo.innerHTML = info.allProducts[index].customer_reviews;
    }



function loaddata()
{
    var myval = new XMLHttpRequest();
   
     
    myval.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
             info = JSON.parse(this.responseText);
            //document.getElementById("demo").innerHTML = this.responseText;

        }
    };
    myval.open('GET', 'guitardata.json', true);
    myval.send();
}

function buybutton()
{
   //localStorage.setItem('index', info.allProducts[index].product_description);
  localStorage.setItem('index', index);
  localStorage.setItem('index1', info.allProducts[index].image_path);
}