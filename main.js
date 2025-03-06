document.addEventListener("DOMContentLoaded", function() {
    const createAccountBtn = document.querySelector(".create-account");
    createAccountBtn.addEventListener("click", function() {
      window.location.href = "dashboard.html";
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll(".square");
    const infoModal = document.getElementById("infoModal");
    const closeBtn = document.getElementById("closeBtn");
    const personName = document.getElementById("personName");
    const personInfo = document.getElementById("personInfo");
    const personImage = document.getElementById("personImage");

    squares.forEach((sq) => {
        sq.addEventListener("click", function () {
            const name = sq.getAttribute("data-name");
            const info = sq.getAttribute("data-info");
            const imgSrc = sq.getAttribute("data-img");

            if (name && info) {
                personName.textContent = name;
                personInfo.textContent = info;
                if (imgSrc) {
                    personImage.src = imgSrc;
                    personImage.style.display = "block";
                } else {
                    personImage.style.display = "none";
                }

                infoModal.style.display = "flex";
            }
        });
    });

    closeBtn.addEventListener("click", function () {
        infoModal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target === infoModal) {
            infoModal.style.display = "none";
        }
    });
});
