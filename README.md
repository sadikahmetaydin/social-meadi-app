# Socilay - Full Stack Social Media App ✨

This dynamic social media app, fully developed using Firebase, enables users to post text-based tweets, share images, and manage their content in real-time.

🔐 **Secure Authentication:** Integrated Google Sign-In allows users to safely authenticate and access their accounts with ease.

📡 **Live Feed System:** Powered by Firestore’s ``onSnapshot``, tweets appear instantly on screen, delivering a seamless real-time experience.

🖼️ **Media Support:** Users can attach images to their tweets. Firebase Storage handles secure upload and distribution of multimedia content.

🗑️ **Content Control:** Each user can delete only their own tweets — UID matching ensures controlled, secure management of posts.

📁 **Modular Architecture:** With reusable components like ``UserCard.jsx``, the UI remains clean, scalable, and easy to maintain.

🎨 **Modern Interface:** TailwindCSS and Heroicons deliver a responsive, aesthetic UI for smooth user interactions.

This project combines advanced React and Firebase capabilities to deliver a streamlined micro-social platform. I'm planning to extend features further, including comment threads, like counters, and dark/light theme toggles in future versions.

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


https://github.com/user-attachments/assets/b6aafe9a-941d-4109-9539-33538eff4d05

