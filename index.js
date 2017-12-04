document.addEventListener('deviceready',onDeviceReady, false);
function onDeviceReady()
{

}
function on_save()
{
    try{
    var selectsubject = document.getElementById("select1").value;
    var selectactivity = document.getElementById("select2").value;
    var score = document.getElementById("score").value;
    alert("Subject: "+selectsubject+"Activity: "+selectactivity+"Score: "+score);}
    catch(e) {
        console.log(e);

    }
    
}