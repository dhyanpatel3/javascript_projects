document.querySelectorAll('.section h2').forEach(sectionHeader => {
    sectionHeader.addEventListener('click', () => {
        const content = sectionHeader.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Download resume functionality
const downloadButton = document.getElementById('downloadResume');
downloadButton.addEventListener('click', (event) => {
    event.preventDefault();

    // Create a blob of the HTML content
    const blob = new Blob([document.documentElement.outerHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    // Create an anchor to trigger download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Dhyan_Patel_Resume.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});