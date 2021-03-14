
// You should implement your task here.

module.exports = function towelSort (matrix) {
	let arr = [];
	if (!matrix) {
		return [];
	}
	matrix.forEach( (item, i) => {
		if ((i + 1) % 2 == 0) {
			item.reverse();
		}
		for (let key of item) {
			arr.push(key);
		}
	});
	return arr;
	
};