function menu() {
    document.getElementById("DropDownMenu").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }



  const contentBoxes = document.querySelectorAll('.content-box');
  const contents = document.querySelectorAll('.content');

  contentBoxes.forEach((box, index) => {
      box.addEventListener('click', () => {
          contents.forEach(content => content.classList.remove('active'));
          contentBoxes.forEach(b => b.classList.remove('active'));
          
          const contentToShow = document.getElementById(`content${index + 1}`);
          contentToShow.classList.add('active');
          box.classList.add('active');
      });
  });