const socket = new WebSocket("ws://localhost:8080"); // Ensure you have a WebSocket server running at this address

// DOM elements
const messageInput = document.getElementById("messageInput");
const sendMessageButton = document.getElementById("sendMessage");
const messagesContainer = document.getElementById("messages");

// Send message on button click
sendMessageButton.addEventListener("click", () => {
  const message = messageInput.value;
  if (message) {
    socket.send(message);
    messageInput.value = ""; // Clear input
  }
});

// Receive messages
socket.addEventListener("message", (event) => {
  const message = event.data;
  const messageElement = document.createElement("div");
  messageElement.textContent = message;
  messagesContainer.appendChild(messageElement);
  messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
});

// Optional: Handle socket open and close
socket.addEventListener("open", () => {
  console.log("Connected to WebSocket server");
});

socket.addEventListener("close", () => {
  console.log("Disconnected from WebSocket server");
});
