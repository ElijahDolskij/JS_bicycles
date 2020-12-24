// Что за борода компилится?
class TypeScript {
  version: string;

  constructor(version: string) {
    this.version = version
  }

  info(name: string) { // Почему нет типа у метода?
    return `[${name}]: Typescript version is: ${this.version}`
  }
}

// class Car {
//   readonly model: string;
//   readonly numberOfWheels: number = 4; // Так везде можно дефолтное значение указывать?
//
//   constructor(theModel: string) {
//     this.model = theModel;
//   }
// }

class Car {
  readonly numberOfWheels: number = 4; // Так везде можно дефолтное значение указывать?

  constructor(readonly model: string) {} // Запись идентичная записи в аналогичном классе выше
}



// =======================
// Модификаторы
// protected, public и private - в js так же? Что они делают?

class Animal {
  protected voice: string = '';
  public color: string = 'black';

  private go() { // Где тип возвращаемого значения?
    console.log('go')
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice
  }
}

const cat = new Cat();


// =======================
// Абстрактные классы

abstract class Component {
  abstract render(): void; // Почему нет типов аргументов?
  abstract info(): string; // Почему нет типов аргументов?
}

class AppComponent extends Component {
  render(): void { // почему не работает автокомплит?
    console.log('Component on render')
  }
  info(): string {
    return 'This is info';
  }
}
