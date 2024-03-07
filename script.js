function volume_sphere() {
    // Get the radius from the input field
    let radiusInput = document.getElementById('radius');
    let radius = parseFloat(radiusInput.value);

    // Check if the input is a valid number
    if (isNaN(radius)) {
        alert("Please enter a valid number for the radius.");
        return false;
    }

    // Calculate the volume of the sphere
    let volume = (4 * Math.PI * Math.pow(radius, 3)) / 3;

    // Display the volume in the second input field
    let volumeInput = document.getElementById('volume');
    volumeInput.value = volume.toFixed(4); // Displaying volume with 2 decimal places

    // Prevent form submission
    return false;
} 

window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
