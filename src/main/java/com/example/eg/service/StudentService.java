package com.example.eg.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.eg.model.Student;
import com.example.eg.repository.StudentRepository;

@Service
public class StudentService {

 @Autowired
    private StudentRepository repository;

    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    public Student saveStudent(Student student) {
        return repository.save(student);
    }

    public Student getStudentById(int id) {
        return repository.findById(id).orElse(null);
    }
    public Student updateStudent(int id, Student student) {
        Student existing = repository.findById(id).orElse(null);

        if (existing != null) {
            existing.setName(student.getName());
            existing.setCourse(student.getCourse());
            return repository.save(existing);
        }

        return null;
    }
    public void deleteStudent(int id) {
        repository.deleteById(id);
    }
}