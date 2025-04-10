// Change text content dynamically
document.getElementById("change-text-btn").addEventListener("click", () => {
  const articleTitle = document.getElementById("article-title");
  const articleContent = document.getElementById("article-content");

  articleTitle.textContent = "Article Title Updated!";
  articleContent.textContent = "The content has been changed using JavaScript.";

  // Modify CSS styles dynamically
  articleContent.style.color = "darkgreen";
  articleContent.style.fontWeight = "bold";
});

// Add or remove an element
document.getElementById("toggle-box-btn").addEventListener("click", () => {
  const box = document.getElementById("dynamic-box");

  if (box.style.display === "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
});
