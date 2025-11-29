function volume_sphere() {
    //Write your code here
	function volume_sphere() {
    // Fetch radius value as text
    let radius = document.getElementById("radius").value;

    // Convert to number
    radius = Number(radius);

    // Validate input: must be a non-negative number
    if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").value = "NaN";
        return;
    }

    // Calculate volume of sphere
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round to 4 decimal places
    volume = volume.toFixed(4);

    // Display result
    document.getElementById("volume").value = volume;
}

	


  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;



