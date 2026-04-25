# 🚚 VanMan — Moving Service Platform

> A full-stack MERN application for booking fast, affordable moving and transport services.

VanMan is a modern web platform inspired by student-based moving services, where users can easily book moving help and teams can manage jobs efficiently in real time.

---

## 📌 Overview

VanMan connects:

* 🧑‍💼 **Customers** who need help with moving or transport
* 💪 **Mover Teams (Students/Admins)** who provide the service

The platform focuses on delivering a **fast, reliable, and cost-effective moving experience** with smart automation and real-time updates.

---

## ✨ Core Features

### 👤 Customer Side

* 📦 Get instant or custom moving quotes
* 🗓️ Book services (Full Move, Transport Only, Packing Help)
* 💳 Secure payment integration (planned)
* 📍 Track job status in real-time
* 📜 View booking history

### 🚛 Mover / Admin Side

* 📋 Manage jobs (Pending / Active / Completed)
* 📅 Set availability and schedules
* 👥 Manage team members
* 🔔 Receive job updates and notifications
* 💬 Internal communication system

---

## 🧠 Smart System Features

* 🧮 **Dynamic Pricing Algorithm** based on distance, items, and time
* 🤖 **Automatic Team Assignment System**
* 📍 **Geolocation Integration** (distance & route calculation)
* ⚡ **Real-time updates** using WebSockets (Socket.IO)

---

## 🧱 Tech Stack

* **Frontend:** React + Tailwind CSS
* **Backend:** Node.js + Express
* **Database:** MongoDB
* **Authentication:** JWT (JSON Web Tokens)
* **Realtime:** Socket.IO
* **Maps Integration:** Google Maps API / Leaflet

---

## 📂 Project Structure

```
VanMan/
├── client/        # React frontend
├── server/        # Node + Express backend
├── models/        # MongoDB schemas
├── routes/        # API routes
├── controllers/   # Business logic
└── README.md
```

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/vanman.git

# Navigate into the project
cd vanman


# install command (modules and dist)
npm run build

# start server (frontend included)
npm run start
```

---

## 🧪 Environment Variables

Create a `.env` file inside `/server`:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key

EMAIL_USER=your_email
EMAIL_PASS=your_email_password

MAPS_API_KEY=your_maps_api_key
```

---

## 🔄 Sample API Endpoints

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| POST   | /api/auth/register   | Register user     |
| POST   | /api/auth/login      | Login user        |
| GET    | /api/jobs            | Get all jobs      |
| POST   | /api/jobs/create     | Create new job    |
| PATCH  | /api/jobs/:id/status | Update job status |
| GET    | /api/teams           | Get team data     |

---

## 📸 Preview
<img width="1983" height="793" alt="vann" src="https://github.com/user-attachments/assets/9ea5cbfa-2a75-4920-a81f-29c54aae85b2" />

---

## 🚀 Future Improvements

* 💳 Stripe / PayPal payment integration
* 📱 Mobile app (React Native)
* 📊 Admin analytics dashboard
* ⭐ Ratings & review system
* 📡 Live tracking (driver en route)

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

This project is licensed under the MIT License.

---

## 💡 Author

Built by **protag and yuvraj** ⚡

---

## 🧠 Vision

> “You help us by us helping you.”

A platform where students can earn while helping people move quickly and efficiently.
