# URL Shortener Project

This is a simple URL shortener project that allows users to shorten long URLs into shorter ones and also provides basic analytics for the shortened URLs. The project uses 
Node.js, Express.js, and MongoDB.

Installation and Setup

Clone the repository: 
git clone https://github.com/your-username/url-shortener.git
 
Change to the project directory:
cd url-shortener
Install dependencies:
npm install  

Configure MongoDB:
Make sure you have MongoDB installed and running. 
Update the MongoDB connection URL in connect.js with your own database URL.

How to Use
1. Shorten a URL
To shorten a URL, send a POST request to /url with the url parameter in the request body.

Example using cURL:
curl -X POST -H "Content-Type: application/json" -d '{"url": "https://www.example.com/long-url"}' http://localhost:8001/url
Response:
{
  "id": "ABC123"
}
2. Accessing Shortened URL
To access a shortened URL, simply append the short ID to the base URL.
Example:
http://localhost:8001/ABC123

3. Get Analytics
To get analytics for a shortened URL, send a GET request to /url/:shortId/analytics.

Example using cURL:
curl -X GET http://localhost:8001/url/ABC123/analytics
{
  "totalClicks": 5,
  "analytics": [
    {
      "timeStamp": 167825467865
    },
    {
      "timeStamp": 167825467880
    },
    ...
  ]
}

Project Structure

|-- controller
|   |-- url.js
|-- models
|   |-- url.js
|-- router
|   |-- url.js
|-- connect.js
|-- index.js
|-- package.json
|-- package-lock
controller/url.js: Contains functions to handle URL shortening and analytics.
models/url.js: Defines the MongoDB schema and model for storing URLs.
router/url.js: Defines the Express router for URL-related routes.
connect.js: Establishes the connection to the MongoDB database.
index.js: Main server file that sets up the Express app and listens for incoming requests.
Technologies Used
Node.js
Express.js
MongoDB
Credits
This project was created by Your Name.

License
This project is licensed under the MIT License.

Contributions
Contributions are welcome! If you find any issues or have ideas for improvements, feel free to create a pull request or open an issue.
