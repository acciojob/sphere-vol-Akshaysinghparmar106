function volume_sphere() {
    //Write your code here
	function volume_sphere() {
    // Get the radius value from input
    let radius = document.getElementById("radius").value;

    // Convert to number
    radius = Number(radius);

    // Validate: must be a number AND non-negative
    if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").value = "NaN";
        return;
    }

    // Calculate volume: (4/3) * π * r^3
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round to 4 decimal places
    volume = volume.toFixed(4);

    // Display the result
    document.getElementById("volume").value = volume;
}



  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;



