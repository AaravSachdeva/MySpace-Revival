const express = require("express");
const cors = require("cors");
const apiRoutes = require("./routes");
const { authenticateToken } = require("./auth");   

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Apply authentication middleware to all routes
app.use(authenticateToken);

app.use("/", apiRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});