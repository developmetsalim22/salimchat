// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Function to send a message
function sendMessage(message) {
  firebase.database().ref('messages/').push().set({
    "message": message,
    "timestamp": new Date().toISOString()
  });
}

// Function to fetch messages
function fetchMessages() {
  firebase.database().ref('messages/').on('value', (snapshot) => {
    const messages = snapshot.val();
    for (let id in messages) {
      console.log(messages[id].message);
    }
  });
}

// Usage example
fetchMessages();
sendMessage('Hello, Firebase!');
