function volume_sphere() {
    //Write your code here
	function sphereVolume(radius) {
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    return volume;
}

// Example usage:
console.log(sphereVolume(5)); 

  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
