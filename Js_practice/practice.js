
function loadDoc(){
    var xhttp = new XMLHttpRequest(); // Used to exchange data with a server behind the scenes.
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 /*reponse is ready and request is finished*/ && this.status==200 /*Status of OK*/){
            document.getElementById("demo").innerHTML = this.responseText; // data returned in a string format. 
        }
    };
    xhttp.open("GET","practice.txt",true); // send a request to a server. open(method, URL, async?)
    xhttp.send(); //send the request used for GET.
}

//For security reasons the webpage and the cml file it tries to load must be located in the same server. 
//

// To Use callbacks 


function loadDoc_two(URL, callback){
    let xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            callback(this);
        }
    };
    xhttp.open("GET",URL,true);
    xhttp.send();
}



function first_function(xhttp){

    document.getElementById("demo").innerHTML = "This is the first callback";

}


function handle_xml(xml){
    let xmlDoc = xml.responseXML;
    let table = "<table><tr><th>Title</th><th>Artist</th></tr>";
    let x = xmlDoc.getElementsByTagName("CD");
    for(let i = 0; i < x.length; i++){
        table += "<tr><td>"+ x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue+"</td><td>"
        +x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue+
        "</td></tr>";
    }
    table+="</table>"
    document.getElementById("demo").innerHTML=table;
}

function handle_JSON (json){
    let jsondoc = JSON.parse(json.responseText)
    console.log(jsondoc);
}