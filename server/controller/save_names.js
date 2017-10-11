module.exports = {

    postContact: (req, res, next) => {
        const dbInstance = req.app.get('db');
        let user = req.body;

        dbInstance.create_contact([
            user.firstName 
          , user.lastName 
          , user.email
          , user.volunteer 
          , user.fundraise
          , user.stayInformed
          , user.successStories
          , user.message
          , user.services
        ])

        .then( contacts => res.status(200).send('user added'))
        .catch( () => res.status(500).send() );
    }
}

