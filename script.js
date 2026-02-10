* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", sans-serif;
}

body {
  background: #f5f5f5;
  color: #111;
}

/* HEADER */
.header {
  background: #111;
  color: white;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.add-btn {
  background: white;
  color: black;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}

.add-btn:hover {
  background: #ddd;
}

/* MAIN */
.container {
  max-width: 900px;
  margin: 40px auto;
}

/* FEEDBACK CARD */
.card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.05);
}

.card h3 {
  margin-bottom: 6px;
}

.meta {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.badge {
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  background: #eee;
}

.status {
  background: #111;
  color: white;
}

.upvote {
  margin-top: 10px;
  border: none;
  background: #111;
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  cursor: pointer;
}

/* MODAL */
.modal {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
}

.modal-content {
  background: white;
  width: 400px;
  padding: 25px;
  margin: 80px auto;
  border-radius: 8px;
  position: relative;
}

.modal-content input,
.modal-content textarea,
.modal-content select {
  width: 100%;
  margin-bottom: 12px;
  padding: 8px;
}

.submit-btn {
  width: 100%;
  background: #111;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
}

.close {
  position: absolute;
  right: 15px;
  top: 10px;
  font-size: 22px;
  cursor: pointer;
}
