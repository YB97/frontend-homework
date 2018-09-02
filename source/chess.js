'use strict';

const chess = function(number) {
	if (number == 1) return null;
	else {
		var result='';
		for (var i=0; i<number; i++) {
			for (var j=0; j<number; j++) {
				if (i % 2 == 0) {
					if (j % 2 == 0) result += '*';
					else result += ' ';
				}
				else {
					if (j % 2 == 0) result += ' ';
					else result += '*';
				}
			}
			result += '\n';
		}
		return result;
	}
};
