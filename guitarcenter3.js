var conf = localStorage.getItem('index2');
var confor = localStorage.getItem('index');

var myconimg = document.getElementById("para11");

function loadimage()
{
    var item1 = new XMLHttpRequest();
    item1.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            var info = JSON.parse(this.responseText);
            //myconimg.src = info.allProducts[conf].image_path;
            myconimg.src = info.allProducts[confor].image_path;
        }
    };
    item1.open('GET', 'guitardata.json', true);
    item1.send();
}



