function addFeedback() {
  let name = document.getElementById("name").value;
  let category = document.getElementById("category").value;
  let message = document.getElementById("message").value;

  let feedback = { name, category, message, likes: 0 };

  let all = JSON.parse(localStorage.getItem("data")) || [];
  all.push(feedback);
  localStorage.setItem("data", JSON.stringify(all));

  showFeedback();
}

function showFeedback() {
  let wall = document.getElementById("wall");
  wall.innerHTML = "";

  let all = JSON.parse(localStorage.getItem("data")) || [];

  all.forEach((f, i) => {
    wall.innerHTML += `
      <div class="card">
        <b>${f.category}</b><br>
        ${f.message}<br>
        <small>- ${f.name}</small><br>
        <button onclick="like(${i})">👍 ${f.likes}</button>
      </div>
    `;
  });
}

function like(index) {
  let all = JSON.parse(localStorage.getItem("data"));
  all[index].likes++;
  localStorage.setItem("data", JSON.stringify(all));
  showFeedback();
}

showFeedback();