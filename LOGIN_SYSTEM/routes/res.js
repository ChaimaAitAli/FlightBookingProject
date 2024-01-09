const express = require("express");
const router = express.Router();

// Route pour afficher la page de réservation de vols (accessible à tout le monde)
router.get("/", (req, res) => {
  res.render("booking");
});
/*
// Route pour traiter la réservation de vol (exemple)
router.post("/reserve", (req, res) => {
  // Logique pour traiter la réservation de vol
  // Vous pouvez accéder aux données du formulaire via req.body
  // Exemple : const { flightId, passengerName, seatNumber } = req.body;
  // Ensuite, effectuez les opérations nécessaires pour enregistrer la réservation
  res.send("Réservation effectuée avec succès !");
});
*/
// Ajoutez d'autres routes liées à la réservation si nécessaire

module.exports = router;
