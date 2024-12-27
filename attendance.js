let classifier;
const webcamElement = document.getElementById('webcam');
const resultElement = document.getElementById('myResult');
const studentListElement = document.getElementById('studentList');

// List to track present students
const presentStudents = new Set();

// Initialize ml5 model
function setup() {
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/YPs3kjgI0/', modelLoaded);
}

// Model loaded callback
function modelLoaded() {
    console.log('Model Loaded!');
}

// Start webcam feed
async function startVideo() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        webcamElement.srcObject = stream;
        webcamElement.play(); // Start video feed
    } catch (error) {
        console.error('Error accessing the camera: ', error);
        alert('Unable to access the camera. Please check your permissions.');
    }
}

// Capture the video frame and classify
document.getElementById('captureButton').addEventListener('click', () => {
    const videoCanvas = document.createElement('canvas');
    const context = videoCanvas.getContext('2d');

    // Set canvas size to match video feed
    videoCanvas.width = webcamElement.videoWidth;
    videoCanvas.height = webcamElement.videoHeight;

    // Draw current video frame to canvas
    context.drawImage(webcamElement, 0, 0, videoCanvas.width, videoCanvas.height);

    // Convert canvas to image and classify
    const capturedImage = new Image();
    capturedImage.src = videoCanvas.toDataURL('image/png');

    capturedImage.onload = () => {
        classifyImage(capturedImage);
    };
});

// Classify image using ml5
function classifyImage(image) {
    classifier.classify(image, (results, error) => {
        if (error) {
            console.error('Classification error:', error);
            resultElement.innerHTML = 'Error in classification. Please try again.';
            return;
        }

        if (results && results.length > 0) {
            const label = results[0].label; // Get the predicted label (e.g., student's name)
            if (!presentStudents.has(label)) {
                presentStudents.add(label); // Add to the attendance list if not already present
                updateAttendanceList();
            }

            // Display the student's name and "Present"
            resultElement.innerHTML = `Recognized: ${label}<br>Status: Present`;
        } else {
            resultElement.innerHTML = 'No results from classification.';
        }
    });
}

// Update the attendance list display
function updateAttendanceList() {
    const studentListArray = Array.from(presentStudents);
    studentListElement.innerHTML = studentListArray.map(student => `<li>${student}</li>`).join('');
}

// Initialize everything when the page loads
window.onload = () => {
    setup();
    startVideo();
};
