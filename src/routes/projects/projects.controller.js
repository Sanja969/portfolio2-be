const fs = require('fs');
const { getAllProjects, createProject } = require('../../models/projects/projects.model');

async function httpGetAllProjects(req, res) {
  const projects = await getAllProjects()
  return res.status(200).json(projects);
}

async function httpAddNewProject(req, res, next) {
  const project = req.body;
  console.log(req.file)
  console.log(req.body)
  console.log(req.body.description)
  if (req.file) {
    project.img = {
      data: fs.readFileSync(`uploads/${req.file.filename}`),
      contentType: 'image/png'
    }
  }
  if (!project.name) {
    return res.status(400).json({
      error: 'Missing required project name'
    })
  }

  if (!project.description) {
    return res.status(400).json({
      error: 'Missing required project desc'
    })
  }

  if (!project.technologies) {
    return res.status(400).json({
      error: 'Missing required project tech'
    })
  }

  if (!project.source) {
    return res.status(400).json({
      error: 'Missing required project tech'
    })
  }

  if (!project.live) {
    return res.status(400).json({
      error: 'Missing required project tech'
    })
  }

  await createProject(project);
  res.status(201).json(project);
}

module.exports = {
  httpGetAllProjects,
  httpAddNewProject
}
