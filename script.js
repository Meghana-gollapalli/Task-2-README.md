// Form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let formMessage = document.getElementById("formMessage");

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill out all fields correctly.";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = "green";
    this.reset();
  }
});

// To-Do List
function addTodo() {
  const input = document.getElementById("todoInput");
  const taskText = input.value.trim();

  if (taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => li.remove();

    li.appendChild(removeBtn);
    document.getElementById("todoList").appendChild(li);
    input.value = "";
  }
}
