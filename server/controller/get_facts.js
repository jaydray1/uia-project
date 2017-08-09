module.exports = {
    getFact: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_facts()
        .then( data => res.status(200).send(data))
        .catch(() => res.status(500).send('error'));
    }
}