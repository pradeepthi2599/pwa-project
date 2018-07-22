function Loadjson(file,callback){
	var x = new XMLHttpRequest();
	x.overrideMimeType("application/json");
	x.open("GET",file,true);
	x.onreadystatechange=function(){
     if(x.readyState===4 && x.status =="200"){
       callback(x.responseText);
   }
 };
   x.send(null);
}
Loadjson("data.json",function(text){
 var data =JSON.parse(text);
 console.log(data);
 basics(data.details);
 careerinfo(data.career);
 education(data.education);
 skillsset(data.keyskills);
 acheivements(data.acheivements);


})

var child1=document.querySelector(".child1");

function basics(det)	{
	var image = document.createElement("img");
	image.src=det.image;
	child1.appendChild(image);

	var name= document.createElement("h3");
	name.textContent =det.name;
	child1.appendChild(name);

  var phone= document.createElement("h3");
	phone.textContent=det.phoneno;
	child1.appendChild(phone);

	var email = document.createElement("a");
	email.href="mailto:pradeepthi@gmail.com";
	email.textContent=det.email;
	child1.appendChild(email);



  var hr = document.createElement("hr");
  child1.appendChild(hr);

	var address = document.createElement("h3");
	address.textContent=det.address;
	child1.appendChild(address);
}
  var child2 = document.querySelector(".child2");
	function careerinfo(info1){

  var cr = document.createElement("h2");
	cr.textContent="careerObjective:";
	child2.appendChild(cr);

	var hr= document.createElement("hr");
	child2.appendChild(hr);
  var careerinfo = document.createElement("p");
	careerinfo.textContent = info1.info;
	child2.appendChild(careerinfo);

}

function education(edu) {
	var ed = document.createElement("h2");
	ed.textContent="Education Qualification:";
	child2.appendChild(ed);


	var hr = document.createElement("hr");
	child2.appendChild(hr)


	for(i=0;i<edu.length;i++){
		var deg=document.createElement("h4");
		deg.textContent=edu[i].degree;
		child2.appendChild(deg);


		var ul = document.createElement("ul");
		var li = document.createElement("li");
		li.textContent=edu[i].institute;
		ul.appendChild(li);
		child2.appendChild(ul);

		var li2=document.createElement("li");
	  li2.textContent=edu[i].date;
		ul.appendChild(li2);
		child2.appendChild(ul);
	}
}


function skillsset(skilldata){
  var sk=document.createElement("h2");
  sk.textContent="technical skills";
  child2.appendChild(sk);


  var hr=document.createElement(hr);
  child2.appendChild(hr);

  var skilltable=document.createElement("table");
  skilltable.border="1";
  child2.appendChild(skilltable);

  tabledata="";
    for(i=0;i<skilldata.length;i++){
      tabledata+="<tr><td>"+skilldata[i].title+"</td><td>"+skilldata[i].info+"</td></tr>";
    }
    skilltable.innerHTML = tabledata;


}
function acheivements(am){
	var am1=document.createElement("h2");
	am1.textContent="acheivements";
	child2.appendChild(am1);

	var hr=document.createElement("hr");
	child2.appendChild(hr);

	var am2=document.createElement("table");
	am2.border="1";
	child2.appendChild(am2);

	tabledata="";
	for(i=0;i<am.length;i++){
		tabledata+="<tr><td>"+am[i].title+"</td><td>"+am[i].info+"</td></tr>";
	}
	am2.innerHTML = tabledata;
}
