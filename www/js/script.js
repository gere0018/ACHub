
var gere0018_ACHub= {
	init: function(){
		//document.addEventListener("deviceready",gere0018_Giftr.onDeviceReady);
		document.addEventListener("DOMContentLoaded", gere0018_ACHub.onDomReady);
	},
//	onDeviceReady: function(){

//		}
//	},
	onDomReady: function(){
//		gere0018_Giftr.loadRequirements++;
//		if(gere0018_Giftr.loadRequirements === 2){
			gere0018_Giftr.execute();
//		}
	},
	execute: function(){
        var homeTab = document.querySelector('#homeTab');
        homeTab.addEventListener('click', gere0018_ACHub.navigate);
    },
    navigate: function(){

    }
}
