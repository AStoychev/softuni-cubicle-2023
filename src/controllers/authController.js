const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', (req, res) => {
    const {username, password, repeatPassword} = req.body;

    if (password !== repeatPassword) {
        return res.status(404).end();
    }
})

router.get('/logout', (req, res) => {
    
})

module.exports = router