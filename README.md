# Serenity 🌿  

**Serenity** is a mental health web application designed to help users track moods, reflect on feelings, and engage in activities that support emotional well-being. The app combines a visual chatbot, mood tracking, resources, and interactive features to promote mindfulness and self-awareness.  

---

## Features  

- **Solace Chatbot (Visual)** 💬  
  - Engages users based on their current mood.  
  - Currently visual only; future updates may integrate APIs for dynamic interactions.  

- **Mood Tracker Visualization** 📊  
  - Log moods daily and visualize trends through interactive graphs.  

- **Secret Jar** 🎁  
  - Users can write private notes or thoughts in a “jar.”  
  - Jar opens once a month to reveal past entries for reflection.  

- **Resources** 📚  
  - Access curated blogs, articles, podcasts, and other mental health resources.  
  - Future goal: connect users to licensed therapists.  

- **SOS Button** 🚨  
  - Quick access for immediate support in crisis situations.  

- **User Authentication** 🔒  
  - Secure login and registration powered by **Passport.js**.  

---

## Tech Stack  

- **Frontend:** HTML, CSS, EJS, JavaScript  
- **Backend:** Node.js, Express.js  
- **Authentication:** Passport.js  
- **Database:** MongoDB Atlas  
- **Hosting:** Render  

---

## Future Enhancements✨ 
  - Dynamic backgrounds and music based on user mood.  
  - Full integration of Solace chatbot with APIs.  
  - Mobile-friendly responsive design.  
  - AI-powered personalized activity suggestions.

---

## Usage 
  - Log in or sign up to track moods and explore features.
  -  Chat with Solace visually to get mood-based reflection questions.
  -  Log moods daily and visualize trends with graphs.
  -  Add thoughts to your Secret Jar and revisit them monthly.
  -  Explore mental health Resources, or use the SOS Button in urgent situations.

---

## Installation & Setup  

1. Clone the repository:  
   ```bash
   git clone https://github.com/yourusername/serenity.git
2. Install Dependencies:  
   ```bash
   npm install
3. Set up environment variables : 
   ```bash
    MONGO_URI=your_mongodb_atlas_uri
    SESSION_SECRET=your_session_secret
   ```
4. Start application :
  ```bash 
  npm start
  ```
