$(function() {
  var newTaskForm = $("form#new_task");

  var postTaskDataToServer = function() {
    var taskData = newTaskForm.serialize();
    var conversation = $.ajax({
      url: "/tasks",
      type: "POST",
      data: taskData
    });
    conversation.done(addTaskToList);
    conversation.fail(onFailure);
    return false;
  };

  var onFailure = function(ajaxObject){
    var html = ajaxObject.responseText;
    $("#errors").html(html);
  };

  var resetForm = function() {
    newTaskForm.find("#task_title, #task_description").val("");
    newTaskForm.find("#task_title").focus();
  };

  $("body").on("submit", "form#new_task", postTaskDataToServer);

//  newTaskForm.submit(postTaskDataToServer);

  var addTaskToList = function(task) {
    var taskList = $("#incomplete-task-list");
    taskList.prepend(task);
    resetForm();
    $("#errors").html("");
  };
});
