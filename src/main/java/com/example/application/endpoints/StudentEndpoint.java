package com.example.application.endpoints;

import java.util.List;
import java.util.Optional;

import com.example.application.model.Student;
import com.example.application.repository.StudentRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.Endpoint;
import dev.hilla.Nonnull;

@Endpoint
@AnonymousAllowed
public class StudentEndpoint {
    
    private StudentRepository repository;

    StudentEndpoint(StudentRepository repository){
        this.repository = repository;
    }

    public @Nonnull List<@Nonnull Student> findAll(){
        return repository.findAll();
    }

    public Optional<Student> getStudentById(Long id){
        return repository.findById(id);
    }

    public void deleteStudentById(Long id){
        repository.deleteById(id);
    }

    public Student add(Student student){
        return repository.save(student);
    }

    public Student update(Student student){
        return repository.saveAndFlush(student);
    }


}
