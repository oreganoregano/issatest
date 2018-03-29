module Api::V1
  class EmployeesController < ApplicationController
    def index
      @employees = Employee.all
      render json: @employees
    end

    def index2
      render json: JSON.pretty_generate(get_reports(params[:emp_id]))
    end

    def get_reports(emp = 1, n = 1)
      employees = []
      @parent = Employee.find_by(emp_id: emp)
      puts @parent.emp_id
      @children = Employee.where(manager_id: emp)
      # puts @children.first.emp_id
      employee = {
        id: emp,
        name: @parent.name,
        title: @parent.title,
        direct_reports: []
      }
      @children.each do |child|
        employee[:direct_reports] << {
        id: child.emp_id,
        name: child.name,
        title: child.title,
        direct_reports: get_reports(child.emp_id, n + 1)
        }
      end
      employees << employee if n == 1
      return employees if n == 1
      return employee[:direct_reports]
    end

    def create
      @employee = Employee.create(employee_params)
      render json: @employee
    end

    def show
      @employee=Employee.find(params[:id])
      render json: @employee
    end

    def update
      @employee = Employee.find(params[:id])
      @employee.update_attributes(employee_params)
      render json: @employee
    end

    def destroy
      @employee = Employee.find(params[:id])
      if @employee.destroy
        head :no_content, status: :ok
      else
        render json: @employee.errors, status: :unprocessable_entity
      end
    end

  private

    def employee_params
      params.require(:employee).permit(:id, :name, :emp_id, :manager_id, :title)
    end
  end
end
