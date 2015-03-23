function EchoPlugin()
{
	
}

EchoPlugin.prototype.echo = function(successCallback, errorCallback, strInput) {
        cordova.exec(successCallback,errorCallback,"EchoPlugin","echo",[strInput]);
    };

module.exports = new EchoPlugin();
