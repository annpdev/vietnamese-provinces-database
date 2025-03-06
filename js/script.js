document.addEventListener('DOMContentLoaded', () => {
    const copyButtons = document.querySelectorAll('.copy-btn');
  
    copyButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const codeElement = document.getElementById(targetId);
        const codeText = codeElement.innerText;
        
        navigator.clipboard.writeText(codeText)
          .then(() => {
            // Lưu lại nội dung ban đầu của nút
            const originalText = button.innerText;
            button.innerText = 'Đã sao chép';
            setTimeout(() => {
              button.innerText = originalText;
            }, 2000);
          })
          .catch(err => {
            console.error('Error copying text: ', err);
            button.innerText = 'Error';
          });
      });
    });
  });
  