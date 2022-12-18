
window.addInputs = function addInputs() {
  // Находим таблицу
  var table = document.getElementById("inputsTable");

  // Создаем новую строку таблицы
  var row = table.insertRow();

  // Создаем ячейку для ячеек ввода
  var cell = row.insertCell(0);

  // Создаем ячейку для ввода
  var input1 = document.createElement("input");
  input1.type = "text";
  input1.classList.add("form-control"); // Добавляем класс form-control

  // Вставляем ячейку для ввода в ячейку
  cell.appendChild(input1);

  // Создаем ячейку для ячеек ввода
  cell = row.insertCell(1);

  // Создаем ячейку для ввода
  var input2 = document.createElement("input");
  input2.type = "text";
  input2.classList.add("form-control"); // Добавляем класс form-control

  // Добавляем атрибут pattern с регулярным выражением, которое разрешает только реальные числа
  input2.pattern = "^[+-]?[0-9]*\.?[0-9]+$";

  // Вставляем ячейку для ввода в ячейку
  cell.appendChild(input2);

  // Находим кнопку "+"
  var addButton = document.querySelector('button[onclick="addInputs()"]');

  // Перемещаем кнопку "+" под таблицу
  table.parentNode.appendChild(addButton);

  // Находим кнопку "Готово"
  var doneButton = document.getElementById("doneButton");

  // Перемещаем кнопку "Готово" под таблицу
  table.parentNode.appendChild(doneButton);

}


window.sendData = function sendData() {
  // Создаем массивы для хранения значений ячеек
  var positions = [];
  var spent = [];

  // Находим все ячейки с классом "form-control"
  var inputCells = document.getElementsByClassName("form-control");

  // Получаем все ячейки столбца "Потрачено"
  var spentCells = document.querySelectorAll("#inputsTable td:nth-child(2) input");

  // Перебираем все ячейки
  for (var i = 0; i < spentCells.length; i++) {
    // Проверяем, что в ячейке введено число
    if (!/^-?\d+\.?\d*$/.test(spentCells[i].value)) {
      // Если в ячейке введено не число, подсвечиваем ячейку красным
      spentCells[i].classList.add("is-invalid");
      // Выводим сообщение об ошибке
      alert("Вы ввели текст вместо суммы");
      // Прерываем работу функции
      return;
    }
  } 

  // Перебираем ячейки и добавляем их значения в соответствующие массивы
  for (var i = 0; i < inputCells.length; i++) {
    // Проверяем, какой столбец соответствует ячейке
    if (i % 2 == 0) {
      // Если столбец четный, то это "позиция"
      positions.push(inputCells[i].value);
    } else {
      // Если столбец нечетный, то это "потрачено"
      spent.push(inputCells[i].value);
    }
  }

  // Логируем значения массивов в консоли
  console.log("Positions: ", positions);
  console.log("Spent: ", spent);

  // Отправляем данные на сервер (если требуется)
  // Для этого вы можете использовать XMLHttpRequest или fetch API
  window.close();
};