interface Rect {
  readonly id: string, // только для чтения
  color?: string, // необязательное
  size: {
    width: number,
    height: number,
  }
}

const rect1: Rect = {
  id: '1',
  size: {
    width: 2,
    height: 3,
  },
  color: '#ccc'
};

const rect2: Rect = {
  id: '2',
  size: {
    width: 10,
    height: 20,
  }
};
rect2.color = '#fff';

const rect3 = {} as Rect;
const rect4 = <Rect>{};


// =======================
// Наследование интерфейсов
interface RectWithArea extends Rect {
  getArea: () => number // ?
}

const rect5: RectWithArea = {
  id: '5',
  size: {
    width: 5,
    height: 10,
  },
  getArea(): number {
    return this.size.width * this.size.height
  }
};


// =======================
// implements
interface IClock {
  time: Date,
  setDate(date: Date): void // ?
}

class Clock implements IClock {
  time: Date = new Date();
  setDate(date: Date):void { // Почему не работает автокомплит на полное заполнение типов метода из интерфейса?
    this.time = date
  }
}


// =======================
// интерфейсы для объектов с большим количеством динамических ключей
interface Styles {
  [key: string]: string | number
}

const css: Styles = {
  border: '1px solid red',
  marginTop: 2,
  borderRadius: 4,
};


// =======================
