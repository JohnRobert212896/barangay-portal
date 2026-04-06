// AOS Animation
AOS.init({
  duration: 1000,
  once: true
});

// Complaint Form Submission
const complaintForm = document.getElementById("complaintForm");
const formAlert = document.getElementById("formAlert");

complaintForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const concern = document.getElementById("concern").value;
  const location = document.getElementById("location").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && contact && concern && location && message) {
    formAlert.classList.remove("d-none");
    complaintForm.reset();

    setTimeout(() => {
      formAlert.classList.add("d-none");
    }, 4000);
  }
});

// Add Event Functionality
const eventForm = document.getElementById("eventForm");
const eventContainer = document.getElementById("eventContainer");

eventForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const eventDate = document.getElementById("eventDate").value.trim();
  const eventTitle = document.getElementById("eventTitle").value.trim();
  const eventTag = document.getElementById("eventTag").value.trim();
  const eventDesc = document.getElementById("eventDesc").value.trim();

  if (eventDate && eventTitle && eventTag && eventDesc) {
    const newEvent = document.createElement("div");
    newEvent.className = "col-md-6 col-lg-4";
    newEvent.setAttribute("data-aos", "zoom-in");

    newEvent.innerHTML = `
      <div class="event-card p-4 shadow-sm rounded-4 h-100">
        <div class="event-date">${eventDate}</div>
        <h4>${eventTitle}</h4>
        <p>${eventDesc}</p>
        <span class="badge bg-secondary">${eventTag}</span>
      </div>
    `;

    eventContainer.appendChild(newEvent);
    eventForm.reset();
    AOS.refresh();
  }
});