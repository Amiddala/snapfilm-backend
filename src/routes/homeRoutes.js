const express = require("express");
const router = express.Router();
const { home, createProject, getProjects } = require("../controllers/homeController");

router.get("/", home);
router.post("/projects", createProject);
router.get("/projects", getProjects);

module.exports = router;