// https://www.youtube.com/watch?v=nyIpDs2DJ_c

interface Rect {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {
  id: "1",
  size: {
    width: 10,
    height: 5
  }
};

rect1.color = "red";

const rect2 = {} as Rect;
const rect3 = <Rect>{};

// =========================

interface RectWithArea extends Rect {
  getArea: () => number;
}

const rect5: RectWithArea = {
  id: "234",
  size: {
    width: 5,
    height: 4
  },
  getArea(): number {
    return this.size.width * this.size.height;
  }
};

console.log(rect5.getArea());

// =========================

interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();

  setTime(date: Date): void {
    this.time = date;
  }
}

// =========================

interface Styles {
  [key: string]: string;
}

const css: Styles = {
  border: "1px solid black",
  marginTop: "2px",
  borderRadius: "5px"
};
