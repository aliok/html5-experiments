EffectUtilNS = function(){};


/**
 * @param containerToFade the container which will be disappeared and removed from parentContainer's children
 * @param parentContainer the container which containerToFade will be removed from
 * @param onFadeEnd function to run on fadeEnd
 * @returns {___removeIcon0} The removeIcon
 */
EffectUtilNS.prototype.createRemoveIcon = function(containerToFade, parentContainer, onFadeEnd){
	var removeIcon = document.createElement('img');
    removeIcon.src = '/resources/delete.png';
    
    removeIcon.onclick = function(evt){
    	containerToFade.addEventListener('webkitAnimationEnd', function(event){
    		parentContainer.removeChild(containerToFade);  
            if(onFadeEnd)
            	onFadeEnd();
        }, false );
    	containerToFade.className = 'fade';
    };
    return removeIcon;
};

EffectUtil = new EffectUtilNS();