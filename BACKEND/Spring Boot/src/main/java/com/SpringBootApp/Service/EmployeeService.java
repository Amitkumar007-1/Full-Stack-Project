package com.SpringBootApp.Service;

import java.util.List;

import com.SpringBootApp.Models.Employee;

public interface EmployeeService {

	public List<Employee> getAllEmployee();

	public Employee getEmployee(int id);
 
	public Employee saveEmployee(Employee employee);
	public Employee updateEmployee(Employee employee ,int id);
	public void deleteEmployee(int id);
	
	


}
