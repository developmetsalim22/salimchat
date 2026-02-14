# SalimChat

A real-time chat application built with Firebase Realtime Database and Authentication.

## Features

- ✅ User Authentication (Sign Up / Login)
- ✅ Real-time Message Sync
- ✅ User Presence
- ✅ Responsive Design
- ✅ Message Timestamps

## Setup Instructions

### 1. Create a Firebase Project
- Go to [Firebase Console](https://console.firebase.google.com/)
- Click "Create a new project"
- Enter "salimchat-app" as the project name
- Enable Google Analytics (optional)

### 2. Enable Authentication
- Go to Authentication → Sign-in method
- Enable Email/Password provider

### 3. Create Realtime Database
- Go to Database → Create Database
- Start in test mode
- Choose a region closest to you
- Accept the default security rules (for development)

### 4. Get Your Configuration
- Go to Project Settings
- Copy your Firebase Config object
- Update the `firebaseConfig` in `app.js`

### 5. Deploy Security Rules
```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "auth.uid === $uid",
        ".write": "auth.uid === $uid"
      }
    },
    "messages": {
      ".read": "auth != null",
      ".write": "auth != null",
      "$message": {
        ".validate": "newData.hasChildren(['text', 'user', 'timestamp'])"
      }
    }
  }
}
```

### 6. Run Locally
```bash
npm install
npm start
```

### 7. Deploy to Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## File Structure
```
salimchat/
├── index.html          # Main HTML file
├── app.js              # Firebase logic and chat functionality
├── styles.css          # Styling
├── firebase-config.js  # Firebase configuration
├── package.json        # Dependencies
├── .env.example        # Environment variables template
└── README.md           # This file
```

## Live Demo
Deploy to Firebase Hosting: `firebase deploy --only hosting`

Your app will be available at: `https://salimchat-app.web.app`

## Technologies Used
- Firebase Realtime Database
- Firebase Authentication
- HTML5 / CSS3 / JavaScript
- Firebase Hosting

## License
MIT License