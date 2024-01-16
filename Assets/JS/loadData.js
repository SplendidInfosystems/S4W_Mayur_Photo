var defaultLanguage = "English";
    console.log('Default language:', defaultLanguage);

    var dropdown = document.getElementById('dropdown');

    dropdown.addEventListener('change', function() {
      var selectedValue = this.value;
      console.log('Selected language:', selectedValue);
    });


    fetch('Assets/JS/language.json')
      .then(response => response.json())
      .then(jsonData => {
        console.log('Loaded JSON data:', `${jsonData[0]}`);

        // const employeeNames = jsonData.English.map(language => language);
        // console.log('English Language:', employeeNames);
      })
      .catch(error => {
        console.error('Error reading JSON file:', error);
      });