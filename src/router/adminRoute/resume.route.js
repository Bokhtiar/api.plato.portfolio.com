const resumeRoute = require('express').Router()
const resumeController = require('../../controller/adminController/resumeController')
const { ResumevalidateRequest, isResumeRequestValidated } = require('../../validator/resume')

    resumeRoute.get('/', resumeController.Index)
    resumeRoute.post('/',ResumevalidateRequest, isResumeRequestValidated, resumeController.Store)
    resumeRoute.get('/:', resumeController.Show)
    resumeRoute.get('/status/:id', resumeController.Status)
    resumeRoute.delete('/:id', resumeController.Destroy)

module.exports = resumeRoute