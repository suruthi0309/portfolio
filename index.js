document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    const fileInput = document.getElementById('resume');
    const file = fileInput.files[0];
    const statusMessage = document.getElementById('status-message');
  
    if (file) {
      // Here, you can add code to upload the file to a server
      // For now, we just simulate the upload success
  
      // Display success message
      statusMessage.textContent = 'Resume uploaded successfully!';
      statusMessage.style.color = 'green';
    } else {
      // Display error message
      statusMessage.textContent = 'Please select a file to upload.';
      statusMessage.style.color = 'red';
    }
  });
  