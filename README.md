# Student REST API

A simple **Spring Boot REST API** for managing student records with full CRUD functionality (Create, Read, Update, Delete).

---

##Tech Stack

* Java
* Spring Boot
* Spring Data JPA
* MySQL
* Maven

---

## Features

*  Add new student
*  Get all students
*  Get student by ID
*  Update student details
*  Delete student

---

## ⚙️ Project Structure

src/main/java/com/example/demo
├── controller
├── service
├── repository
├── model

---

## 🔧 API Endpoints

| Method | Endpoint           | Description        |
| ------ | ------------------ | ------------------ |
| GET    | /api/students      | Get all students   |
| GET    | /api/students/{id} | Get student by ID  |
| POST   | /api/students      | Create new student |
| PUT    | /api/students/{id} | Update student     |
| DELETE | /api/students/{id} | Delete student     |

---

## 🧪 Sample Request (POST)

```json
{
  "name": "Ankita",
  "course": "CSE"
}
```

---

## 🛠️ Setup Instructions

1. Clone the repository:

```
git clone https://github.com/your-username/student-api.git
```

2. Open in IntelliJ IDEA

3. Configure MySQL in `application.properties`:

```
spring.datasource.url=jdbc:mysql://localhost:3306/student
spring.datasource.username=root
spring.datasource.password=your_password
```

4. Run the application

---

## 🌐 Base URL

```
http://localhost:8080/api/students
```

---

## 📬 Testing

You can test APIs using **Postman**.

---

## 📈 Future Improvements

* Add validation (@Valid, @NotNull)
* Exception handling
* Swagger API documentation
* Authentication (JWT)

---

## 👩‍💻 Author

Ankita Joshi

---
