export const toFixedValue = (value: number, digits = 0) => Math.round(value * 10 ** digits) / 10 ** digits;
