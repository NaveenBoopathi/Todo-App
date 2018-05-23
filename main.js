console.log('starting!');

$(document).ready(function () {
    $('button').on('click', function () {
        var todoItem = $('#todoItem').val();
        var newTodo = '<li><label><input type="checkbox" /><span> ' + todoItem + '</span></label></li>';
        $("#todoList li:last").append(newTodo);
        $('#todoItem').val('');
    });
});