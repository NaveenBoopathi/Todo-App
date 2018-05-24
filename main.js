console.log('starting!');

$(document).ready(function() {
  var newTodo;
  var todoList = [
    'Learn HTML 5, CSS 3 and JavaScript',
    'Create an Todo App using HTML and jQuery'
  ];
  if (todoList.length > 0) {
    for (i = 0; i < todoList.length; i++) {
      newTodo =
        '<li><label><input type="checkbox" /><span> ' +
        todoList[i] +
        '</span></label></li>';
      $('#todoList').append(newTodo);
    }
  }

  $('button').on('click', function() {
    var todoItem = $('#todoItem').val();
    if (todoItem) {
      newTodo =
        '<li><label><input type="checkbox" /><span> ' +
        todoItem +
        '</span></label></li>';
      $('#todoList').append(newTodo);
      todoList.push(todoItem);
      $('#todoItem').val('');
    } else {
      alert('Please enter an item to add!');
    }
  });
});
