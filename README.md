#  Student Dashboard (Rest API)

A professional, full-stack management system featuring a **Spring Boot REST API** backend and a **React.js** frontend. This application allows for real-time CRUD operations with a high-contrast, academic-themed UI.

---

##  Features

* **Real-time Registration:** Add students with auto-generated IDs.
* **Dynamic Roster:** View all registered students in a responsive grid layout.
* **Instant Updates:** Edit existing student records via a streamlined PUT interface.
* **Safe Deletion:** Remove records with built-in user confirmation.
* **CORS Enabled:** Fully configured to bridge React (Vite) and Spring Boot.

---

##  Professional UI (Maroon & Slate)

The interface has been redesigned for maximum readability:
* **Header-First Flow:** Registration at the top for quick access.
* **Visual Hierarchy:** Maroon accents on a clean Slate/White background.
* **Responsive Design:** Fully adaptive for various screen sizes.

---

##  Tech Stack

### **Backend**
- **Java 25 (Loom)**
- **Spring Boot 4.0.3**
- **Spring Data JPA**
- **MySQL Database**
- **Maven**

### **Frontend**
- **React.js**
- **Vite**
- **Fetch API**
- **Modern CSS-in-JS**

---

## 🔧 API Endpoints

| Method | Endpoint             | Description         |
| :----- | :------------------- | :------------------ |
| GET    | `/api/students`      | Fetch all students  |
| GET    | `/api/students/{id}` | Fetch student by ID |
| POST   | `/api/students`      | Register new student|
| PUT    | `/api/students/{id}` | Update student data |
| DELETE | `/api/students/{id}` | Remove student      |

---



### 📬 Testing

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
<img width="1365" height="522" alt="image" src="https://github.com/user-attachments/assets/70e5e0be-aad4-481b-90c8-29c152711350" />

<img width="1319" height="606" alt="image" src="https://github.com/user-attachments/assets/9aeba2c9-ef6a-4016-b1c2-6c4723408629" />
<img width="1200" height="598" alt="image" src="https://github.com/user-attachments/assets/3fc1ca8e-b405-493d-8a0f-f43704a25179" /

## ⚙️ Setup & Installation

### 1. Database Configuration
Create a MySQL database named `student` and update `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/student
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
---

## 👩‍💻 Author

Ankita Joshi

---
