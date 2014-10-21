class TasksController < ApplicationController
  def index
    @tasks = current_user.tasks
    @task = Task.new
  end

  def create
    @task = current_user.tasks.create(task_params)
    # if @task.save
    #   current_user.tasks.create
    # end

    redirect_to tasks_path
  end

  private

  def task_params
    params.require(:task).permit(:title, :description)
  end

end
