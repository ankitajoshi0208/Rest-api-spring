package com.example.eg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.eg.model.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {

}