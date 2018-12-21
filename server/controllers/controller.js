module.exports = {

    getHouses: (req, res) => {
        req.app.get('db').get_houses()
        .then((houses) => {
            res.status(200).json(houses)
        })
        .catch(err => console.log(err))
},

    addHouse: (req, res) => {
        req.app.get('db').add_house(req.body)
        .then(() => {
            res.status(200)
        })
        .catch(err => console.log(err))
    },

    deleteHouse: (req, res) => {
        req.app.get('db').delete_house(req.params.id)
        .then(() => {
            res.status(200)
        })
        .catch(err => console.log(err))
    },

    getHouse: (req, res) => {
        console.log(req.params);
        req.app.get('db').get_house(req.params.id)
        .then((house) => {
            res.status(200).json(house)
        })
    }

}