<?php
$filePath = 'json/test.json';

// Define the initial state JSON
$initialState = '{"cities":[],"usedMultiCityInput":false,"startTimeMs":0}';

// Save the initial state JSON to the file
if (file_put_contents($filePath, $initialState) === false) {
    die('Error: Failed to clear JSON file.');
}

echo "JSON file cleared successfully!";
?>
