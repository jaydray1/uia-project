module.exports = {
    getMember: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_member()
        .then( data => res.status(200).send(data))
        .catch( _ => res.status(500).send('error') );
    }
}



