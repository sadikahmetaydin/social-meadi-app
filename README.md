# Socilay - Full Stack Social Media App ✨

This social media app project was built entirely with modern web technologies, combining Firebase and React to deliver a streamlined, real-time user experience.

Using React for the frontend, I crafted a modular and responsive interface enhanced with TailwindCSS for sleek styling and Heroicons for intuitive interaction elements. Behind the scenes, Firebase Authentication provides secure Google Sign-In capabilities, while Firestore acts as the real-time database, enabling instant tweet syncing and updates via ``onSnapshot``.

To support media-rich posts, Firebase Storage was integrated, allowing users to upload and display images alongside their tweets. Time-based operations like sorting and timestamping were handled with Firestore’s built-in ``serverTimestamp`` function. For content management, ``deleteDoc`` ensures users can safely remove their own tweets, maintaining a controlled and personalized experience.

React Hooks like ``useState`` and ``useEffect`` manage component state and lifecycle events, creating a smooth and reactive application environment.

This stack of technologies comes together to form a compact yet powerful Twitter-style application, built with scalability and user-centered design in mind.


## 🛠 Technology and Tools

* React
* Firebase Authentication
* Firestore (Firebase Realtime Database)
* Firebase Storage
* ``serverTimestamp`` (Firestore Timestamp)
* ``onSnapshot`` (Realtime data listener from Firestore)
* ``deleteDoc`` (Firestore document deletion function)
* TailwindCSS
* Heroicons
* React Hooks (``useState``, ``useEffect``)

## 🚦 Running the Project

To run the project locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/sadikahmetaydin/social-meadi-app.git
    cd social-media-app
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Start the development server**:

    ```bash
    npm run dev
    ```

4. **Open the app**:

    Visit `http://localhost:5173` to see the app in action.


## 🎥 Video

https://github.com/user-attachments/assets/6c8c15f3-41df-4b96-9c70-b40d3dbd6187
