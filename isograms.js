//
function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

//
function isograms(str){
  let s = str.toLowerCase().split('');
  return s.filter((element, index) => s.indexOf(element) !== index).length > 0 ? false : true;
}
