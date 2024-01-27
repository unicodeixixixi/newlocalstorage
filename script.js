function addCity() {
    // Retrieve user-supplied data from the form
    const name = document.getElementById('name').value.trim();
    const state = document.getElementById('state').value.trim();
    const territory = document.getElementById('territory').value.trim();
    const country = document.getElementById('country').value.trim();
    const latitude = parseFloat(document.getElementById('latitude').value);
    const longitude = parseFloat(document.getElementById('longitude').value);
    const population = parseInt(document.getElementById('population').value);
    const stateCapital = document.getElementById('stateCapital').checked;
    const nationalCapital = document.getElementById('nationalCapital').checked;

    // Create the new city object
    const newCity = {
        "name": name,
        "state": state,
        "territory": territory,
        "country": country,
        "latitude": latitude,
        "longitude": longitude,
        "population": population,
        "stateCapital": stateCapital,
        "nationalCapital": nationalCapital,
        "pk": 1513252,
        "quiz": "world",
        "code": null,
        "archived": false,
        "percentageOfSessions": 1,
        "displayName": "Won't be shown"
    };

    // Send an AJAX request to the PHP script
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "update_json.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };
    xhr.send(JSON.stringify(newCity));
}

function clearJsonFile() {
    // Send an AJAX request to the PHP script to clear the JSON file
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "clear_json.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };
    xhr.send();
}