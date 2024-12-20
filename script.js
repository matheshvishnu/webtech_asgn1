document.getElementById('customizeBtn').addEventListener('click', function() {
    const newFontSize = prompt("Enter a font size (e.g., '16px', '1.5em'):");
    const newBackgroundColor = prompt("Enter a background color (e.g., '#f4f4f4', 'lightblue'):");
    
    if (newFontSize) {
        document.body.style.fontSize = newFontSize;
    }
    
    if (newBackgroundColor) {
        document.body.style.backgroundColor = newBackgroundColor;
    }
});