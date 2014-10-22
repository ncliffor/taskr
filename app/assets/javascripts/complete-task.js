$(function() {
  var completeTaskForm = $("form.edit_task");

  var updateTaskDataFromServer = function() {
    var theElement = $(this);
    var taskData = theElement.serialize();
    var conversation = $.ajax({
      url: $(this).attr("action"),
      type: "PATCH",
      data: taskData
    });
    $(this).parents("li").fadeOut();
    $("#complete-task-list") function() {
      $(this).parents("li").fadeIn();
    };
    return false;
  };

  $("body").on("submit", "form.edit_task", updateTaskDataFromServer);
});
