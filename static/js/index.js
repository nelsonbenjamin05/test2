//https://www.eclipse.org/paho/clients/js/
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  
  var options = {
    useSSL: false,
    userName: "nelsonbenjamin05@gmail.com",
    password: "123456789",
    onSuccess:onConnect,
    onFailure:doFail
  }

  client.connect(options);
   
  function onConnect(){
    console.log("Conectado...");
    client.subscribe("nelsonbenjamin05@gmail.com/ts1");
	message = new Paho.MQTT.Message("hola web");
    message.destinationName = "nelsonbenjamin05@gmail.com/ts";
    client.send(message);
  }

  function doFail(e){
    console.log(e);
  }

  function onConnectionLost(responseObject){
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

function sensor1(){
	msg="1";
    message = new Paho.MQTT.Message(msg);
    message.destinationName = "nelsonbenjamin05@gmail.com/ts";
    client.send(message);		
}

function sensor2(){
	msg="2";
    message = new Paho.MQTT.Message(msg);
    message.destinationName = "nelsonbenjamin05@gmail.com/ts";
    client.send(message);		
}

function comprobar(arg){
	if arg[0]=='1':
		document.getElementById("hist1").innerHTML+=message.payloadString;
	if arg[0]=='2':
		document.getElementById("hist2").innerHTML+=message.payloadString;
}

  function onMessageArrived(message){
	  var ms=message.payloadString;
	comprobar(ms);
  }  