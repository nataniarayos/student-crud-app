package com.example.application.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.application.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long>{
    
    Optional<Student> findByEmail(String email);
   

}
