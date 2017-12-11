document.addEventListener('deviceready',onDeviceReady, false);
var op = new Array("kim","justin","july","rj","kissel");
var selectsubject = document.getElementById("select1");
for(var i = 0, l = op.length;i<l;i++)
{
	selectsubject.options.add(new Option(op[i]));
}
function onDeviceReady()
{
	
}
function on_save()
{
    try{
    var selectsubject = document.getElementById("select1").value;
    var selectactivity = document.getElementById("select2").value;
    var score = document.getElementById("score").value;
    alert("Subject: "+selectsubject+"Activity: "+selectactivity+"Scores: "+score);
	alert("wew");}
    catch(e) {
        console.log(e);

    }
    
}

function click_add()
{
	try
	{
		document.getElementById("div1").style.display = "none";
		document.getElementById("div2").style.display = "block";
		window.localStorage.setItem("var3",score.value);
		window.localStorage.setItem("var1",select1.value);
		window.localStorage.setItem("var2",select2.value);
		alert(window.localStorage.getItem("var1")+"    "+window.localStorage.getItem("var2")+"      "+window.localStorage.getItem("var3"));
		document.getElementById("label1").innerHTML = window.localStorage.getItem("var1");
		document.getElementById("label2").innerHTML = window.localStorage.getItem("var2");
		document.getElementById("label3").innerHTML = window.localStorage.getItem("var3");
		console.log(window.localStorage.getItem("var1"));
	}
	catch(e)
	{
		console.log(e);
	}
}

function click_back()
{
	try
	{
		document.getElementById("div2").style.display = "none";
		document.getElementById("div1").style.display = "block";
	}
	catch(e)
	{
		console.log(e);
	}
}