const webSettingRoute = require('express').Router()
const webSettingController = require('../../controller/adminController/webSettingController')
const { WebsettingvalidateRequest, isWebsettingRequestValidated } = require('../../validator/websetting')

    webSettingRoute.get('/', webSettingController.Index)
    webSettingRoute.post('/', WebsettingvalidateRequest, isWebsettingRequestValidated, webSettingController.Store)


module.exports = webSettingRoute