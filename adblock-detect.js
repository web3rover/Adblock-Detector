window.addEventListener("load", function(){
    try{
        var iframe = document.createElement("iframe");
        iframe.height = "1px";
        iframe.width = "1px";
        iframe.id = "ads-test-iframe";
        iframe.src = "http://qnimate.com/ads.html";
        
        document.body.appendChild(iframe);
        
        setTimeout(function(){
            try{
                var iframe = document.getElementById("ads-test-iframe");
                if(iframe.style.display == "none" || iframe.style.display == "hidden" || iframe.style.visibility == "hidden" || iframe.offsetHeight == 0){
                    if(adblockBlocking_True != undefined){
                        adblockBlocking_True();
                    }
                }
                else{
                    if(adblockBlocking_False != undefined){
                        adblockBlocking_False();
                    }
                }
                document.body.removeChild(iframe);
            }
            catch(e){
	            console.log(e);
            }
        }, 100);
    }
    catch(e){
	    console.log(e);
    }
}, false);