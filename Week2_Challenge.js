function minMax(arr) {
	let min = Math.min(...arr)
	let max = Math.max(...arr)
	let minMaxArr = [min, max]
	return minMaxArr
}