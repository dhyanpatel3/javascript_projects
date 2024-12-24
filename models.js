let classifier;
let img;

function setup() {
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/VzN-jYh69/', modelLoaded);
}

function modelLoaded() {
    console.log('Model Loaded!');
}

const uploadBox = document.getElementById('uploadBox');
const fileInput = document.getElementById('imageUpload');
const preview = document.getElementById('preview');
const myImage = document.getElementById('myImage');

// Handle drag-and-drop events
uploadBox.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadBox.style.backgroundColor = '#3b3b5c';
});

uploadBox.addEventListener('dragleave', () => {
    uploadBox.style.backgroundColor = '#2a2a40';
});

uploadBox.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadBox.style.backgroundColor = '#2a2a40';
    handleFileUpload(e.dataTransfer.files[0]);
});

// Handle click event to trigger file input
uploadBox.addEventListener('click', () => {
    fileInput.click();
});

// Handle file input change
fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
        handleFileUpload(fileInput.files[0]);
    }
});

function handleFileUpload(file) {
    const reader = new FileReader();

    reader.onload = function (event) {
        myImage.src = event.target.result;
        myImage.style.display = 'block';
        preview.style.display = 'block';
    };

    reader.readAsDataURL(file);
}

document.getElementById('classifyButton').addEventListener('click', () => {
    if (myImage.src) {
        classifyImage();
    } else {
        alert('Please upload an image first.');
    }
});

function classifyImage() {
    classifier.classify(myImage, gotResult);
}

function gotResult(results, error) {
    if (error) {
        console.error(error);
        return;
    }

    let label = results[0].label;
    let confidence = (results[0].confidence * 100).toFixed(2);
    document.getElementById('myResult').innerHTML = label + '<br>Confidence: ' + confidence + '%';
}

// Initialize the model when the page loads
window.onload = setup;