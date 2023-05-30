# Weather API

The Weather API allows you to fetch weather forecast data based on location coordinates or country name. It utilizes the OpenWeatherMap API to retrieve weather information. Authentication is required to access the API endpoints.

## API Endpoints

### Get Weather Forecast by Coordinates

Retrieves the weather forecast data based on latitude and longitude coordinates.

- **URL:** `/api/weather`
- **Method:** `GET`
- **Parameters:**
  - `lat` (required): Latitude coordinate of the location.
  - `lon` (required): Longitude coordinate of the location.
- **Authentication:** Required

**Example Request:**

GET /api/weather?lat=37.7749&lon=-122.4194 HTTP/1.1
Authorization: Bearer <access_token>

json
Copy code

**Example Response:**

```json
{
  "coord": {
    "lon": -122.4194,
    "lat": 37.7749
  },
  "weather": [
    {
      "id": 801,
      "main": "Clouds",
      "description": "few clouds",
      "icon": "02d"
    }
  ],
  "main": {
    "temp": 298.68,
    "humidity": 80
  },
  // Additional weather forecast data
}


Get Weather Forecast by Country
Retrieves the weather forecast data based on the country name.

URL: /api/weather
Method: GET
Parameters:
country (required): Name of the country.
Authentication: Required
Example Request:

sql
Copy code
GET /api/weather?country=United%20States HTTP/1.1
Authorization: Bearer <access_token>
Example Response:

json
Copy code
{
  "coord": {
    "lon": -95.7129,
    "lat": 37.0902
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "main": {
    "temp": 297.17,
    "humidity": 68
  },
  // Additional weather forecast data
}
Authentication
To access the API endpoints, you need to include a valid JSON Web Token (JWT) in the Authorization header of your requests. The JWT should be included in the format Bearer <access_token>.

To obtain an access token, you need to authenticate with the API using the /api/login endpoint. This endpoint requires the following parameters:

username: The username of the user.
password: The password of the user.
Example Request:

bash
Copy code
POST /api/login HTTP/1.1
Content-Type: application/json

{
  "username": "your_username",
  "password": "your_password"
}
Example Response:

json
Copy code
{
  "token": "<access_token>"
}
Include the obtained access token in the Authorization header of subsequent requests to the weather API endpoints.

Error Responses
400 Bad Request: When the required query parameters (lat, lon, or country) are missing or invalid.
401 Unauthorized: When authentication credentials are missing or invalid.
404 Not Found: When the weather forecast data is not available for the provided coordinates or country.
500 Internal Server Error: When there is a failure in fetching the weather forecast.

Setup
Clone the repository and navigate to the project directory.
Install the dependencies using npm install.
Rename the .env.example file to .env and update the environment variables with your configuration.
Start the server using npm start.
The API will be available at http://localhost:3000/api.
Make sure to replace <access_token> in the example requests with your actual access token.

Environment Variables
The following environment variables need to be defined in the .env file:

API_KEY: Your OpenWeatherMap API key.
JWT_SECRET: Secret key used for signing JWTs.
License
This project is licensed under the MIT License.

css
Copy code

Please copy the above content and save it as a README.md file in your project