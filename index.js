import express from "express";
import recettesRouter from "./src/route/Recette.js";

const app = express();
app.use(express.json()); // Pour parser les requêtes JSON

// Utilisation du routeur
app.use("/", recettesRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
