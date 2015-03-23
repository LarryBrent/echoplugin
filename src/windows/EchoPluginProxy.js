cordova.commandProxy.add("EchoPlugin", {
	echo:function(successCallback, errorCallback, strInput) {
		var res = EchoRuntimeComponent.EchoPluginRT.echo(strInput);
		if (res.indexOf("Error") == 0) {
			errorCallback("Error, something was wrong with the input string. =>" + res);
		}
		else {
			successCallback("Echo: "+ res);
		}
	}
});
