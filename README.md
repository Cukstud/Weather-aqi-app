Link for the live website:https://weather-aqi-app-ox7m.vercel.app/
🌤️ Weather + AQI App
A modern React-based web application that provides real-time weather data and air quality insights for any city.

🚀 Features
🔍 Search weather by city name
🌡️ Real-time temperature, humidity, and wind speed
🌫️ Air Quality Index (AQI) with category labels
🧪 PM2.5 & PM10 pollutant levels
🔄 Toggle between Weather and AQI views
⚡ Smooth UI with Tailwind CSS
🛠️ Tech Stack
Frontend: React.js

Styling: Tailwind CSS

Backend: Node.js (Express API)

APIs Used:

OpenWeatherMap API (Weather + AQI)
📸 Preview
(Add screenshots here after deployment)

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/YOUR_USERNAME/weather-aqi-app.git
cd weather-aqi-app
2️⃣ Install dependencies
npm install
3️⃣ Start the frontend
npm run dev
4️⃣ Start backend server
(Make sure your backend is running on port 5000)

node server.js
🔐 Environment Variables
Create a .env file in your backend:

API_KEY=your_openweather_api_key
📊 API Endpoints
/weather?city=cityName → Fetch weather data
/aqi?lat=xx&lon=yy → Fetch AQI data
🧠 Learnings
Handling multiple API calls and combining data
Managing async state in React
Conditional rendering and UI composition
Error handling and loading states
🚀 Future Improvements
🌍 Auto-detect user location
📈 AQI visualization with charts
🎨 Improved UI animations
☁️ Deploy backend + frontend
🤝 Contributing
Feel free to fork this repo and improve it!

📄 License
This project is open-source and available under the MIT License.

👨‍💻 Author
Likhit NVS

⭐ If you found this project useful, give it a star!
