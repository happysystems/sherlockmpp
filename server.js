// server.js

const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000; // You can change the port if needed

// Serve the files from the ./mpp folder
app.use("/mpp", express.static(path.join(__dirname, "mpp")));

// Optional: You can serve the index file (e.g., index.html) as the default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "mpp", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
