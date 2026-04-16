import { useEffect, useState } from "react";

export default function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ id: null, name: "", course: "" });
  const [isEditing, setIsEditing] = useState(false);

  const API_URL = "http://localhost:8080/api/students";

  const fetchStudents = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      console.error("Error fetching students:", err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = isEditing ? "PUT" : "POST";
      const url = isEditing ? `${API_URL}/${form.id}` : API_URL;

      await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          course: form.course,
        }),
      });

      resetForm();
      fetchStudents();
    } catch (err) {
      console.error("Error saving student:", err);
    }
  };

  const deleteStudent = async (id) => {
    if (window.confirm("Confirm: Delete this record?")) {
      try {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        fetchStudents();
      } catch (err) {
        console.error("Error deleting student:", err);
      }
    }
  };

  const handleEdit = (student) => {
    setForm(student);
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetForm = () => {
    setForm({ id: null, name: "", course: "" });
    setIsEditing(false);
  };

  return (
    <div style={styles.container}>
      {/* Header Bar */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.logo}>STUDENT<span style={styles.logoThin}>PORTAL</span></h1>

        </div>
      </header>

      <main style={styles.wrapper}>

        {/* TOP SECTION: Registration Form */}
        <section style={styles.topSection}>
          <div style={styles.formCard}>
            <div style={styles.maroonStrip}></div>
            <h2 style={styles.sectionTitle}>
              {isEditing ? "UPDATE STUDENT PROFILE" : "NEW STUDENT REGISTRATION"}
            </h2>
            <form onSubmit={handleSubmit} style={styles.formInline}>
              <div style={styles.inputBox}>
                <label style={styles.label}>FULL NAME</label>
                <input
                  style={styles.input}
                  type="text"
                  placeholder="e.g. Ankita Joshi"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div style={styles.inputBox}>
                <label style={styles.label}>DEPARTMENT / COURSE</label>
                <input
                  style={styles.input}
                  type="text"
                  placeholder="e.g. B.E. CSE AIML"
                  value={form.course}
                  onChange={(e) => setForm({ ...form, course: e.target.value })}
                  required
                />
              </div>
              <div style={styles.btnGroup}>
                <button style={styles.mainBtn}>
                  {isEditing ? "SAVE CHANGES" : "REGISTER STUDENT"}
                </button>
                {isEditing && (
                  <button type="button" onClick={resetForm} style={styles.cancelBtn}>
                    CANCEL
                  </button>
                )}
              </div>
            </form>
          </div>
        </section>

        {/* BOTTOM SECTION: Existing Records */}
        <section style={styles.bottomSection}>
          <div style={styles.listHeader}>
            <h2 style={styles.listTitle}>DATABASE RECORDS</h2>
            <div style={styles.countBadge}>{students.length} Total Students</div>
          </div>

          <div style={styles.grid}>
            {students.length > 0 ? (
              students.map((s) => (
                <div key={s.id} style={styles.studentCard}>
                  <div style={styles.cardMain}>
                    <div style={styles.avatar}>{s.name.charAt(0)}</div>
                    <div>
                      <h3 style={styles.nameText}>{s.name}</h3>
                      <p style={styles.courseText}>{s.course}</p>
                    </div>
                  </div>
                  <div style={styles.cardFooter}>
                    <span style={styles.idLabel}>ID: #{s.id}</span>
                    <div style={styles.actionLinks}>
                      <button onClick={() => handleEdit(s)} style={styles.editLink}>EDIT</button>
                      <button onClick={() => deleteStudent(s.id)} style={styles.deleteLink}>DELETE</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div style={styles.empty}>No students found in the roster.</div>
            )}
          </div>
        </section>

      </main>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f4f4f7", // Clean light grey
    color: "#333",
    fontFamily: "'Inter', Arial, sans-serif",
  },
  header: {
    backgroundColor: "#800000", // Maroon
    color: "#fff",
    padding: "15px 0",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  headerContent: {
    maxWidth: "1000px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
  },
  logo: { fontSize: "1.2rem", fontWeight: "800", letterSpacing: "1px" },
  logoThin: { fontWeight: "300" },
  badge: { fontSize: "0.7rem", padding: "3px 10px", border: "1px solid #fff", borderRadius: "15px" },

  wrapper: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "40px 20px",
  },

  topSection: { marginBottom: "50px" },
  formCard: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
    position: "relative",
  },
  maroonStrip: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "5px",
    backgroundColor: "#800000",
    borderRadius: "8px 8px 0 0",
  },
  sectionTitle: { fontSize: "0.9rem", color: "#800000", fontWeight: "700", marginBottom: "25px", textAlign: "center" },
  formInline: { display: "flex", gap: "20px", alignItems: "flex-end", flexWrap: "wrap" },
  inputBox: { flex: "1", minWidth: "200px", display: "flex", flexDirection: "column", gap: "8px" },
  label: { fontSize: "0.7rem", fontWeight: "700", color: "#999" },
  input: { padding: "12px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "1rem", outline: "none", backgroundColor: "#f9f9f9" },
  btnGroup: { display: "flex", gap: "10px" },
  mainBtn: { backgroundColor: "#800000", color: "#fff", padding: "12px 25px", border: "none", borderRadius: "4px", fontWeight: "700", cursor: "pointer", fontSize: "0.8rem" },
  cancelBtn: { backgroundColor: "#eee", color: "#666", padding: "12px 20px", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "0.8rem" },

  bottomSection: { borderTop: "2px solid #ddd", paddingTop: "40px" },
  listHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" },
  listTitle: { fontSize: "1.1rem", fontWeight: "800", color: "#555" },
  countBadge: { color: "#800000", fontWeight: "700", fontSize: "0.9rem" },

  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" },
  studentCard: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    border: "1px solid #eee",
  },
  cardMain: { display: "flex", gap: "15px", alignItems: "center", marginBottom: "15px" },
  avatar: { width: "40px", height: "40px", backgroundColor: "#fdf2f2", color: "#800000", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "4px", fontWeight: "800" },
  nameText: { margin: "0", fontSize: "1rem", fontWeight: "700" },
  courseText: { margin: "0", fontSize: "0.85rem", color: "#777" },
  cardFooter: { display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #f9f9f9", paddingTop: "15px" },
  idLabel: { fontSize: "0.75rem", color: "#ccc", fontWeight: "600" },
  actionLinks: { display: "flex", gap: "15px" },
  editLink: { background: "none", border: "none", color: "#0056b3", fontSize: "0.7rem", fontWeight: "700", cursor: "pointer" },
  deleteLink: { background: "none", border: "none", color: "#c00", fontSize: "0.7rem", fontWeight: "700", cursor: "pointer" },

  empty: { textAlign: "center", padding: "50px", color: "#aaa", gridColumn: "1/-1" }
};