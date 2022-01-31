
// You should implement your task here.

module.exports = function towelSort (matrix) {
	let arrayMatrix = [];
	if (matrix !== undefined && matrix.length !== 0) {
		for (let i = 0; i < matrix.length; i++) {
			if (i % 2 == 0) {
				arrayMatrix = arrayMatrix.concat(matrix[i]);
			} else {
				arrayMatrix = arrayMatrix.concat(matrix[i].reverse());
			}
		}
	}
	return arrayMatrix;
}
