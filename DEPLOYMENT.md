# Firebase Deployment Guide

## Prerequisites
- Node.js and npm installed
- Firebase account (https://firebase.google.com)
- Firebase CLI installed

## Step 1: Install Firebase CLI
```bash
npm install -g firebase-tools
```

## Step 2: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a new project"
3. Enter project name: `salimchat-app`
4. Accept the terms and create project
5. Wait for the project to be created (2-3 minutes)

## Step 3: Enable Authentication
1. In Firebase Console, go to **Authentication**
2. Click **Sign-in method** tab
3. Enable **Email/Password** provider
4. Save changes

## Step 4: Create Realtime Database
1. In Firebase Console, go to **Realtime Database**
2. Click **Create Database**
3. Choose region closest to you
4. Start in **Test Mode** (for development)
5. Click **Enable**

## Step 5: Create Cloud Firestore (Optional, for advanced features)
1. In Firebase Console, go to **Cloud Firestore**
2. Click **Create Database**
3. Choose region
4. Start in **Test Mode**
5. Click **Enable**

## Step 6: Get Firebase Configuration
1. In Firebase Console, go to **Project Settings**
2. Under "Your apps", click the web icon (</>) if not already created
3. Copy the entire config object:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  databaseURL: "YOUR_DATABASE_URL"
};
```

## Step 7: Update Configuration Files
1. Replace the config in `app.js` with your Firebase config
2. Create `.env` file by copying `.env.example`:
```bash
cp .env.example .env
```
3. Update `.env` with your Firebase credentials

## Step 8: Initialize Firebase in Your Project
```bash
firebase login
firebase init hosting
```

When prompted:
- Choose "Use an existing project"
- Select your Firebase project
- Set public directory to: `.` (current directory)
- Configure as single-page app: **Yes**
- Don't overwrite existing files

## Step 9: Deploy to Firebase Hosting
```bash
firebase deploy --only hosting
```

Your app will be live at: `https://salimchat-app.web.app`

## Step 10: Update Database Security Rules
1. In Firebase Console, go to **Realtime Database**
2. Click **Rules** tab
3. Replace with rules from `database.rules.json`
4. Publish the rules

## Live URL
- **Main URL**: https://salimchat-app.web.app
- **Alternate URL**: https://salimchat-app.firebaseapp.com

## Environment Variables (for CI/CD)
If deploying via GitHub Actions or CI/CD:
1. Create `.env` file locally with your Firebase config
2. Add to GitHub Secrets if needed
3. Use in deploy script

## Testing
1. Open your app URL in browser
2. Create a test account (test@example.com / password123)
3. Send a test message
4. Open in another browser/incognito window
5. Log in with a different account
6. Verify real-time message sync

## Troubleshooting

### Messages not appearing in real-time
- Check Firebase Realtime Database is created
- Verify database.rules.json is deployed
- Check browser console for errors

### Authentication not working
- Ensure Email/Password provider is enabled
- Check that users collection exists in database
- Verify authentication security rules

### Deployment fails
- Run `firebase logout` then `firebase login` again
- Ensure you're in the correct project directory
- Check that firebase.json exists

## Database Structure
```
salimchat-app/
├── users/
│   └── {uid}/
│       ├── email
│       └── displayName
├── messages/
│   └── {messageId}/
│       ├── text
│       ├── user
│       ├── uid
│       └── timestamp
└── activeUsers/
    └── {uid}/
        └── lastSeen
```

## Need Help?
- Firebase Docs: https://firebase.google.com/docs
- Firebase Console: https://console.firebase.google.com
- Chat Support: Open an issue on GitHub