document.addEventListener("DOMContentLoaded", function(){
  const dropdownBtns = document.querySelectorAll(".dropdown-btn");

  dropdownBtns.forEach(btn => {
    btn.addEventListener("click", function(){
      const dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block"){
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    })
  })
})