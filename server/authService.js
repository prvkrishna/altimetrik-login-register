module.exports = function (router, User) {
    const bcrypt = require('bcryptjs');
    /** Register new user */
    router.post('/register', (req, res) => {
        let { userName, password, email, firstName, lastName, gender, country } = req.body;
        if (userName && password && email) {
            User.findOne({ email: req.body.email }, (err, user) => {
                if (user) {
                    if (err) return res.json({ status: false, message: err });
                    res.json({ status: false, user: "", message: 'User already exists with the given email address' });
                } else {
                    let user = new User();
                    user.userName = userName;
                    user.password = bcrypt.hashSync(password, 10);
                    user.email = email;
                    user.firstName = firstName;
                    user.lastName = lastName;
                    user.gender = gender;
                    user.country = country;
                    user.save((err) => {
                        if (err) return res.json({ status: false, message: err });
                        res.json({ status: true, user: user, message: 'User created successfully, Please login' });
                    });
                }
            });
        } else {
            res.json({ status: false, message: 'Invalid Inputs' });
        }
    });
    router.post('/test', (req, res) => {
        res.json({ message: "test" })
    })
    /** Login */
    router.post('/login', (req, res) => {
        let { email, password } = req.body;
        if (email && password) {
            User.findOne({ $or: [{ userName: email }, { email: email }] }, (err, user) => {
                if (err) return res.json({ status: false, message: err });
                if (user) {
                    if (bcrypt.compareSync(password, user.password)) {
                        res.json({ status: true, user: user.userName, userId: user._id, email: user.email, message: `Hello ${user.userName}` });
                    } else {
                        res.json({ status: false, user: "", message: 'Please check the credentials' });
                    }
                } else {
                    res.json({ status: false, user: "", message: 'No record exists with the given details' });
                }
            });
        } else {
            res.json({ status: false, message: 'Invalid Inputs' });
        }
    })
    return router;
}