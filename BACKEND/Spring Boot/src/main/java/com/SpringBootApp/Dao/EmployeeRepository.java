package com.SpringBootApp.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.SpringBootApp.Models.Employee;
@Repository
public interface EmployeeRepository  extends JpaRepository<Employee , Integer>{
public List<Employee> findByEmail(String email);
}
