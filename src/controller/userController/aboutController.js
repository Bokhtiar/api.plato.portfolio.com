const { Host } = require('../../helpers/images');
const abouts = require('../../models/about')

/**about list */
const List = async(req, res, next) => {
    try {
        const items = []
        const results = await abouts.find()

        for (let i = 0; i < results.length; i++) {
            const element = results[i];
            items.push({
                _id : element._id,
                title: element.title,
                body : element.body,
                about1: element.about1,
                about2: element.about2,
                about3: element.about3,
                about4: element.about4,
                image: element.image
                ? Host(req) + "uploads/about/" + element.image
                : null,
            })
        }

        res.status(201).json({
            status: true,
            data: items
        })

    } catch (error) {
        console.log(error);
        next(error)
    }
}

module.exports = {
    List
}