FileUtilNS = function(){};


FileUtilNS.prototype.getTotalSize = function(files) {
	var size = 0;
	for(var i=0; i<files.length; i++){
		size += files[i].size;
	}
	
	return size;
};

FileUtilNS.prototype.createFormData = function(files){
	var formData = new FormData();
	for(var i=0; i<files.length; i++)
       formData.append("file" + i, files[i]);
	return formData;
};

FileUtil = new FileUtilNS();