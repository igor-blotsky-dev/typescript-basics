class Typescript {
  version: string;

  constructor(version) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`;
  }
}

//  ====

// class Car {
//   readonly model: string;
//   readonly numberOfWheels: number = 4;

//   constructor(thisModel: string) {
//     this.model = thisModel;
//   }
// }

// same as on top
class Car {
  constructor(readonly model: string, readonly numberOfWheels: number = 4) {}
}

// Cool!!!

// ====

class Animal {
  protected voice: string = "";
  public color: string = "black";

  constructor() {
    this.go();
  }

  private go() {
    console.log("Go!");
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
    // this.go(); error
  }
}

const cat = new Cat();
// cat.voice; error
cat.setVoice("test");
console.log(cat.color);

// =========================

abstract class Component {
  abstract render1(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render1(): void {
    console.log("Component on render");
  }

  info() {
    return "this is info";
  }
}

// console.log(new Component()); // Error: Cannot create an instance of an abstract class
