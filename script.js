const navItems = document.querySelectorAll(".nav-item[data-section]");
const sections = document.querySelectorAll(".page-section");
const pageTitle = document.getElementById("pageTitle");
const toast = document.getElementById("toast");

const titles = {
  dashboard: "Dashboard",
  dues: "Monthly Dues",
  announcements: "Announcements",
  reports: "Village Reports",
  incidents: "Disturbance & Property Damage"
};

function showSection(sectionId) {
  sections.forEach(section => {
    section.classList.toggle("active-section", section.id === sectionId);
  });

  navItems.forEach(item => {
    item.classList.toggle("active", item.dataset.section === sectionId);
  });

  pageTitle.textContent = titles[sectionId] || "Dashboard";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

navItems.forEach(item => {
  item.addEventListener("click", () => showSection(item.dataset.section));
});

document.querySelectorAll("[data-section-link]").forEach(button => {
  button.addEventListener("click", () => showSection(button.dataset.sectionLink));
});

function showToast(message = "This feature is not functional yet — prototype only.") {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

document.querySelectorAll(".disabled-action").forEach(button => {
  button.addEventListener("click", () => showToast());
});

document.querySelector(".disabled-nav").addEventListener("click", () => {
  showToast("Settings is planned for a future version.");
});

document.getElementById("addAnnouncementBtn").addEventListener("click", () => {
  showToast("Announcement creation is planned for a future version.");
});

document.getElementById("announcementDetails").addEventListener("click", () => {
  showSection("announcements");
});
