var SpeechRecognition = window.webkitSpeechRecognition;

var recgnition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recgnition.start();
}

recgnition.onresult = function(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
}