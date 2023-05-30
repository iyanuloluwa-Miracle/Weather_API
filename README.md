# Weather API

The Weather API allows you to fetch weather forecast data based on latitude and longitude coordinates. It utilizes the OpenWeatherMap API to retrieve weather information. Authentication is required to access the API endpoints.

## API Endpoints

### Get Weather Forecast

Retrieves the weather forecast data based on latitude and longitude coordinates.

- **URL:** `/api/weather`
- **Method:** `GET`
- **Parameters:**
  - `lat` (required): Latitude coordinate of the location.
  - `lon` (required): Longitude coordinate of the location.

**Example Request:**

```http
GET /api/weather?lat=37.7749&lon=-122.4194 HTTP/1.1
Authorization: Bearer <access_token>

**Example Response:**
{ "coord": { "lon": -122.4194, "lat": 37.7749 }, "weather": [ { "id": 801, "main": "Clouds", "description": "few clouds", "icon": "02d" } ], "main": { "temp": 298.68, "humidity": 80 }, // Additional weather forecast data }