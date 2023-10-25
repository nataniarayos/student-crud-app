package com.example.application.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    // @GeneratedValue
    private Long id;

    @NotEmpty(message = "Cannot be empty")
    private String firstName;
    @NotEmpty(message = "Cannot be empty")
    private String lastName;
    @NotEmpty(message = "Cannot be empty")
    private String email;
    @NotEmpty(message = "Cannot be empty")
    private String department;

}
