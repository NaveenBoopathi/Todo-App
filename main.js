console.log('starting!');

$(document).ready(function() {
  var newTodo;
  var todoList = [];

  generateTodoList();

  function generateTodoList() {
    if (todoList.length > 0) {
      for (i = 0; i < todoList.length; i++) {
        newTodo =
          '<li><label><input type="checkbox" id="todo' +
          i +
          '" /><span> ' +
          todoList[i] +
          '</span></label></li>';
        $('#todoList').append(newTodo);
      }
      bindCheckboxChange();
    } else {
      newTodo = '<span class="highlight">Lets add some task here!</span>';
      $('#todoList').append(newTodo);
    }
  }

  function removeTodoList(checkboxId) {
    if (checkboxId || checkboxId === 0) {
      var element = $('ul li').eq(checkboxId);
      $(element).fadeOut('slow', function() {
        $('#todoList').empty();
        console.log('inside if');
        generateTodoList();
      });
    } else {
      $('#todoList').empty();
      console.log('inside else');
      generateTodoList();
    }
  }

  $('button').on('click', function() {
    var todoItem = $('#todoItem').val();
    if (todoItem) {
      newTodo =
        '<li><label><input type="checkbox" id="todo' +
        todoList.length +
        '"/><span> ' +
        todoItem +
        '</span></label></li>';
      todoList.push(todoItem);
      removeTodoList();
      $('#todoItem').val('');
    } else {
      alert('Please enter an item to add!');
    }
  });

  function bindCheckboxChange() {
    $('input[type = checkbox]').change(function() {
      console.log('called!');
      if ($(this).prop('checked')) {
        var checkboxId = $(this).attr('id');
        checkboxId = parseInt(checkboxId.slice(4), 10);
        console.log(checkboxId);
        todoList.splice(checkboxId, 1);
        removeTodoList(checkboxId);
      }
    });
  }
});
