function add(a: number, b: number): number {
  return a + b;
}

function toUpperCase(str: string): string {
  return str.trim().toUpperCase();
}

// ==============

interface IPosition {
  x: number | undefined;
  y: number | undefined;
}

interface IPositionWithDefaults extends IPosition {
  default: string;
}

function position(): IPosition;
function position(a: number): IPositionWithDefaults;
function position(a: number, b: number): IPosition;

function position(a?: number, b?: number) {
  if (!a && !b) {
    return {
      x: undefined,
      y: undefined
    };
  }

  if (a && !b) {
    return { x: a, y: undefined, default: a.toString() };
  }

  return { x: a, y: b };
}

console.log("Empty: ", position());
console.log("One  param", position(42));
console.log("2 params", position(2, 5));
