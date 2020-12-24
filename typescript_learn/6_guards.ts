function strip(x: string | number) { // Где типищация результата вызова?
  if (typeof x === 'number') {
    return x.toFixed(2);
  }

  return x.trim();
}

class MyResponse {
  header = 'response header'; // Почему нет типа?
  result = 'response result'; // Почему нет типа?
}

class MyError {
  header = 'error header'; // Почему нет типа?
  message = 'error result'; // Почему нет типа?
}

function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return {
      info: res.header + res.result
    }
  }

  return {
    info: res.header + res.message
  }
}

// ==================

type AlertType = 'success' | 'danger' | 'warning';

function setAlertType(type: AlertType) { // Где тип результата вызова?
  //...
}

setAlertType('success'); // ok
setAlertType('warning'); // ok
//setAlertType('default'); // not ok!

