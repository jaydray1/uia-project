module.exports = {
    getMember: (req, res, next) => {
        const dbInstance = req.app.get('db');
        let member = req.body;
        console.log(member)

        dbInstance.get_member()
        .then( _ => res.status(200).send(member))
        .catch( _ => res.status(500).send('error') );
    }
}