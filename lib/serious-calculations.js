exports.performSeriousCalculations = function (x,y,z) {
  //
  // Perform very serious calculations on very important data.
  //
	if (z == 1) {return x+y;}
	else if (z == 2) {return x-y; }
	else if (z == 3) {return x*y; }
	else if (z == 4 && y!=0) {return x/y; }
	else {return x+y+z;}
	
};




