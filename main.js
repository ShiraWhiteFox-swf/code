document.addEventListener("DOMContentLoaded", function() {
    const createAccountBtn = document.querySelector(".create-account");
    createAccountBtn.addEventListener("click", function() {
      window.location.href = "dashboard.html";
    });
  });
  const squares = document.querySelectorAll('.square');
  const infoModal = document.getElementById('infoModal');
  const closeBtn = document.getElementById('closeBtn');
  const personName = document.getElementById('personName');
  const personInfo = document.getElementById('personInfo');
  const personImage = document.getElementById('personImage');
  
  function openModal(name, info, imgSrc) {
    personName.textContent = name;
    personInfo.textContent = info;
    personImage.src = imgSrc || 'images/default.jpg'; // Ảnh mặc định nếu không có ảnh
    infoModal.style.display = 'flex';
  }
  
  function closeModal() {
    infoModal.style.display = 'none';
  }
  
  squares.forEach((sq) => {
    sq.addEventListener('click', function() {
      const name = sq.getAttribute('data-name');
      const info = sq.getAttribute('data-info');
      const imgSrc = sq.getAttribute('data-img'); // Lấy đường dẫn ảnh
  
      if (name && info) {
        openModal(name, info, imgSrc);
      }
    });
  });
  
  closeBtn.addEventListener('click', closeModal);
  
  window.addEventListener('click', function(e) {
    if (e.target === infoModal) {
      closeModal();
    }
  });
  const squares = document.querySelectorAll('.square');
const personImage = document.getElementById('personImage');

squares.forEach((sq) => {
  sq.addEventListener('click', function() {
    const imgSrc = sq.getAttribute('data-img');
    
    if (imgSrc) {
      personImage.src = imgSrc;
      personImage.style.display = 'block'; // Đảm bảo ảnh hiển thị
    } else {
      personImage.style.display = 'none'; // Ẩn ảnh nếu không có
    }
  });
});

    