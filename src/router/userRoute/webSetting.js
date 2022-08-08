const UserWebSetting = require('express').Router()
const webSettingController = require('../../controller/userController/webSettingController')
   
UserWebSetting.get('/:id', webSettingController.Show)

module.exports = UserWebSetting