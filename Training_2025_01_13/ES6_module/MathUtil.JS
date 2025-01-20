export const pi = 3.14159;
export let radius
export let curcumfrence

export function getCalcR() {
    curcumfrence = window.prompt(`What it the curcumfrence?`);
    radius = (curcumfrence / 2 * pi).toFixed(2);
    return radius
}

export function getCalcC() {
    radius = window.prompt(`What it the radius?`);
    curcumfrence = (radius * 2 * pi).toFixed(2);
    return curcumfrence
}