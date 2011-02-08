Array.prototype.removeItems = function(itemsToRemove) {
    if (!/Array/.test(itemsToRemove.constructor)) {
        itemsToRemove = [ itemsToRemove ];
    }

    var j;
    for (var i = 0; i < itemsToRemove.length; i++) {
        j = 0;
        while (j < this.length) {
            if (this[j] == itemsToRemove[i]) {
                this.splice(j, 1);
            } else {
                j++;
            }
        }
    }
};


UtilNS = function(){};

//UtilNS.prototype.xxx = function(files) {};

Util = new UtilNS();