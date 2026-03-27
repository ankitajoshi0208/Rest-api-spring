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

## Screenshots

<img width="896" height="715" alt="image" src="https://github.com/user-attachments/assets/fbed7da7-35d1-474e-812e-a59aa887dd01" />
<img width="913" height="711" alt="image" src="https://github.com/user-attachments/assets/9cf1a551-9829-495c-9f38-cf1a9059efe2" />
<img width="905" height="702" alt="image" src="https://github.com/user-attachments/assets/5ef7219f-d41f-499d-8572-96dcad50e64a" />
<img width="896" height="697" alt="image" src="https://github.com/user-attachments/assets/46c232f6-383b-43d0-ad95-7e916e0ee4b5" />
<img width="898" height="683" alt="image" src="https://github.com/user-attachments/assets/662edbc4-af20-4b8a-a0f8-7f25b1293ca7" />
<img width="1362" height="580" alt="image" src="https://github.com/user-attachments/assets/b7f17e27-1e7d-4e11-9d50-99c40f1516c5" />








---

## 👩‍💻 Author

Ankita Joshi

---
