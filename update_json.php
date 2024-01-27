<?php
$filePath = 'json/test.json';

// Get the new city data from the AJAX request
$newCity = json_decode(file_get_contents('php://input'), true);

if (!$newCity) {
    die('Error: Invalid JSON data.');
}

// Read the existing JSON data from the file
$jsonData = file_get_contents($filePath);

// Convert the JSON data to a PHP associative array
$existingData = json_decode($jsonData, true);

if (!is_array($existingData)) {
    die('Error: Invalid JSON file.');
}

// Add the new city object to the "cities" array in the existing data
$existingData['cities'][] = $newCity;

// Convert the modified data back to JSON format
$modifiedJsonData = json_encode($existingData, JSON_PRETTY_PRINT);

// Save the modified JSON back to the file
if (file_put_contents($filePath, $modifiedJsonData) === false) {
    die('Error: Failed to save data to the JSON file.');
}

echo "City added successfully!";
?>
