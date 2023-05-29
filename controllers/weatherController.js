const axios = require('axios');
const apiKey = process.env.API_KEY;
exports.getWeather = async (req, res) => {
  try {
    const { lat, lon } = req.body; // Retrieve latitude and longitude from the query parameters

    if (!lat || !lon) {
      return res.status(400).json({ message: 'Latitude or longitude is missing.' });
    }

    const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    const response = await axios.get(apiUrl);
    const forecastData = response.data;

    // Process forecastData as needed and send the relevant information back to the user
    // For example, you can extract the necessary data and format it as per your requirements
    // and then send it back in the response.
    res.json(forecastData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to fetch weather forecast.' });
  }
};

  
  

exports.updateLocation = (req, res) => {
  const { lat, lon } = req.body;
  req.user.location = { lat, lon };

  // You can perform additional validations or save the updated user information to a database here
  res.json({ message: 'Location updated successfully.' });
};

