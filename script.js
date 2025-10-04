
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorDisplay = document.getElementById("formError");

  if (!name || !email || !message) {
    errorDisplay.textContent = "All fields are required.";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorDisplay.textContent = "Please enter a valid email address.";
    return;
  }

  errorDisplay.textContent = "Message sent successfully!";
  errorDisplay.style.color = "green";
  this.reset();
});


function addTask() {
  const taskInput = document.getElementById("todoInput");
  const task = taskInput.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  document.getElementById("todo-list").appendChild(li);

  taskInput.value = "";
}


function addImage() {
  const url = document.getElementById("imgUrl").value.trim();
  if (url === "") return;

  const img = document.createElement("img");
  img.src = url;
  img.alt = "User uploaded image";

  document.getElementById("galleryContainer").appendChild(img);
  document.getElementById("imgUrl").value = "";
}


function submitQuiz() {
  const answers = {
    q1: "a",
    q2: "c",
    q3: "c"
  };

  let score = 0;
  let total = Object.keys(answers).length;

  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  const result = document.getElementById("quizResult");
  result.textContent = `You scored ${score} out of ${total}`;
  result.style.color = score === total ? "green" : "orange";
}


function fetchJoke() {
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('jokeDisplay').textContent = data.joke;
    })
    .catch(error => {
      document.getElementById('jokeDisplay').textContent = "Failed to fetch joke. Try again.";
      console.error("API Error:", error);
    });
}
