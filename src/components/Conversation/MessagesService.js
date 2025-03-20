// // import { db } from "../../firebaseConfig";
// import { ref, push, serverTimestamp } from "firebase/database";

// export const sendMessage = (chatId, sender, message, type = "text") => {
//     if (!chatId || !sender || !message) {
//         console.error("❌ Error: chatId, sender, or message missing!");
//         return;
//     }

//     // const messagesRef = ref(db, `chats/${chatId}`);
//     console.log("📤 Sending Message to Firebase...");

//     push(messagesRef, {
//         sender,
//         message,
//         type,
//         timestamp: serverTimestamp(),
//     }).then(() => {
//         console.log("✅ Message Sent to Firebase:", message);
//     }).catch((error) => {
//         console.error("❌ Firebase Error:", error);
//     });
// };
