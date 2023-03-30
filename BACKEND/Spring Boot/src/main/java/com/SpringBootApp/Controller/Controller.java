package com.SpringBootApp.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.SpringBootApp.Models.Employee;
import com.SpringBootApp.Service.EmployeeService;

@RestController
@CrossOrigin("https://amitkumar007-fullstack.netlify.app/")
public class Controller {
	@Autowired
	private EmployeeService service;

	@GetMapping("/Employee")
	public ResponseEntity<List<Employee>> getAllEmployee() {
		List<Employee> list = this.service.getAllEmployee();
		if (list == null) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Employee>>(list, HttpStatus.OK);
	}

	@GetMapping("/Employee/{id}")
	public ResponseEntity<Employee> getEmployee(@PathVariable("id") int id) {
		Employee emp = this.service.getEmployee(id);
		if (emp != null) {
			return new ResponseEntity<Employee>(emp, HttpStatus.OK);
		}
		return new ResponseEntity<Employee>(HttpStatus.NO_CONTENT);
	}

	@PostMapping("/Employee")
	public ResponseEntity<Employee> saveEmployee(@RequestBody Employee employee) {
		Employee emp = this.service.saveEmployee(employee);
		if (emp != null) {
			return new ResponseEntity<Employee>(emp, HttpStatus.OK);
		}
		return new ResponseEntity<Employee>(HttpStatus.CONFLICT);
	}

	@PutMapping("/Employee/{id}")
	public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee, @PathVariable("id") int id) {
		Employee emp = this.service.updateEmployee(employee, id);
		if (emp != null) {
			return new ResponseEntity<Employee>(emp, HttpStatus.OK);
		}
		return new ResponseEntity<Employee>(HttpStatus.NO_CONTENT);
	}

	@DeleteMapping("/Employee/{id}")
	public ResponseEntity<Void> deleteEmployee(@PathVariable("id") int id) {

		try {
			this.service.deleteEmployee(id);
			return new ResponseEntity<Void>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
