const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123qweasd!@#QWEASD',
    database: 'metrend'
});
exports.con = con;

exports.executeQuery = function (res, msg, query, isSingle = false) {
    con.query(query, function (err, result) {
        if (err) {
            const response = {'status_code': 500, 'error': err};
            console.log(response);
            res.status(500).json(response);
        } else if (msg === "") {
            let data = {'base_url': 'http://13.234.19.22:8000/', 'content': result};
            if (isSingle) {
                const rs = (result.length > 0) ? result[0] : {};
                data = {'base_url': "http://13.234.19.22:8000/", 'content': rs};
            }
            const response = {'status_code': 200, 'data': data};
            console.log(response);
            res.status(200).json(response);
        } else {
            const response = {'status_code': 200, 'message': msg};
            console.log(response);
            res.status(200).json(response);
        }
    });
};
