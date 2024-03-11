export function counter(digit: number, isStartByZero: boolean = true) {
	return Array.from(Array(digit), (_, i) => isStartByZero ? i : i + 1);
}
