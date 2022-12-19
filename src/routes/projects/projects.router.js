const express = require('express');
const { httpGetAllProjects, httpAddNewProject } = require('./projects.controller')
const multer = require('multer');
const { isLoggedIn } = require('../users/users.middleware')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads');
    },
  filename: function (req, file, cb) {
      cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

const projectsRouter = express.Router();

projectsRouter.get('/', httpGetAllProjects);
projectsRouter.post('/', isLoggedIn, upload.single('image'), httpAddNewProject);

module.exports = projectsRouter;