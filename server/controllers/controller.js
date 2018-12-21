module.exports = {
    getHouses: (req, res) => {
        req.app.get('db').get_houses()
        .then((houses) => {
            res.status(200).json(houses)
        })
        .catch(err => console.log(err))
}
}