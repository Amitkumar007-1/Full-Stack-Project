package com.SpringBootApp.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SpringBootApp.Dao.EmployeeRepository;
import com.SpringBootApp.Models.Employee;

@Service
public class EmployeeServiceimpl implements EmployeeService {
	@Autowired
	private EmployeeRepository respository;

	@Override
	public List<Employee> getAllEmployee() {

		List<Employee> listOfEmp = this.respository.findAll();
		if (listOfEmp.isEmpty()) {
			return null;
		}
		return listOfEmp;
	}

	@Override
	public Employee getEmployee(int id) {
		try {
			return this.respository.findById(id).get();
		} catch (Exception e) {
			return null;
		}

	}

	@Override
	public Employee saveEmployee(Employee employee) {
		List<Employee> emp = this.respository.findByEmail(employee.getEmail());
		if (emp.isEmpty()) {

			return this.respository.save(employee);
		}
		return null;
	}

	@Override
	public Employee updateEmployee(Employee employee, int id) {
		try {
			Employee emp = this.respository.findById(id).get();
			emp.setName(employee.getName());
			emp.setEmail(employee.getEmail());
			emp.setAddress(employee.getAddress());
			this.respository.save(emp);
			return emp;

		} catch (Exception e) {
			return null;
		}
	}

	@Override
	public void deleteEmployee(int id) {
		this.respository.deleteById(id);
	}

}
