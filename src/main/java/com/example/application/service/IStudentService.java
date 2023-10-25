package com.example.application.service;

import java.util.List;

import com.example.application.model.Student;

public interface IStudentService {
    Student addStudents(Student student);
    List<Student> getStudents();
    Student updateStudent(Student student, Long id);
    Student getStudentById(Long id);
    void deleteStudent(Long id);
}
