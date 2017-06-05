'use strict';
const Todo = () => {
  const parent = $('<div class="white-card"></div>');
  const input = $('<input type="text" id="input-item" placeholder="Ingresa la tarea">');
  const todoTitle = $('<p>To Do Items: </p>');
  const list = $('<div class="list"></div>');
  const hr = $('<hr>');
  const completedTitle = $('<p>Completed Items</p>');
  const completedList = $('<div class="completed"></div>');

  parent.append(input);
  parent.append(todoTitle);
  parent.append(list);
  parent.append(hr);
  parent.append(completedTitle);
  parent.append(completedList);

  input.on('keypress',(e)=>{
    if (e.which === 13) {
      if (input.val() != "") {
        state.todos.push({
          text:input.val(),
          completed:false
        });
        input.val('');
        reRender(list,completedList);
      }
    }
  });
  return parent;
}
