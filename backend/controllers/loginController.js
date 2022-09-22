const path = require('path')

// display login page
const getLogin = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
}

module.exports = {getLogin}