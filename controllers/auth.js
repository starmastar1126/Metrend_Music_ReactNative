const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const database = require("../utils");
const sql = require('mysql');

const {
    validationResult
} = require("express-validator");

var now = new Date();
const date = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();

exports.register = async (req, res, next) => {
    try {
        let firstname = req.body.firstname;
        let lastname = req.body.lastname;
        let email = req.body.email;
        let password = req.body.password;
        let avatar = null;
        let hash = await bcrypt.hash(password.trim(), 10);

        database.con.query("select * from users where email='" + email + "'", (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    "status_code": 500,
                    "error": "Internal server error" + err
                });
            }
            if (result <= 0) {
                const query = "insert into users (firstname, lastname, email, password, avatar, created_at) values" +
                    "('" + firstname + "','" + lastname + "','" + email + "','" + hash + "','" + avatar + "','" + date + "')";
                database.con.query(query, (err, resultInsert) => {
                    if (err) {
                        console.log(err);
                        res.status(500).json({
                            "status_code": 500,
                            "error": err.message
                        });
                    }
                    res.status(200).json({
                        "status_code": 200,
                        "response": "User Successfully Created."
                    });
                })
            } else {
                res.status(500).json({
                    "status_code": 500,
                    "error": "Emails Already Exist"
                });
            }
        })

    } catch (e) {
        res.status(500).json({
            "status_code": 500,
            "error": "Internal server error" + e
        });
        database.con.close();
    }

};

exports.login = (req, res, next) => {
    try {
        let email = req.body.email;
        let password = req.body.password;
        let is_mobile = req.body.is_mobile;
        database.con.query("select * from users where email='" + email + "'", (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    "status_code": 500,
                    "error": "Internal server error" + err
                });
            }
            if (result.length > 0) {
                bcrypt.compare(password.trim(), result[0].password.trim(), (err, resultBcrypt) => {
                    if (resultBcrypt) {
                        if (is_mobile) {
                            jwt.sign({
                                _uid: email,
                                id: result[0].id
                            }, '8z6xw%C&?m<Md', (err, token) => {
                                console.log(err);
                                console.log(token);
                                const user = {
                                    'id': result[0].id,
                                    'firstname': result[0].firstname,
                                    'lastname': result[0].lastname,
                                    'email': result[0].email,
                                    'user_type': result[0].user_type
                                };
                                let _token = {
                                    'value': token
                                };
                                const data = {
                                    'user': user,
                                    'token': _token
                                };
                                const response = {
                                    'status_code': 200,
                                    'message': "Successful Login",
                                    'data': data
                                };
                                res.status(200).json(response);
                                console.log(response);
                            });
                        } else {
                            jwt.sign({
                                _uid: email,
                                id: result[0].id
                            }, '8z6xw%C&?m<Md', {
                                expiresIn: '1h'
                            }, (err, token) => {
                                const user = {
                                    'id': result[0].id,
                                    'firstname': result[0].firstname,
                                    'lastname': result[0].lastname,
                                    'email': result[0].email
                                };
                                let _token = {
                                    'value': token,
                                    'expiry': 3600
                                };
                                const data = {
                                    'user': user,
                                    'token': _token
                                };
                                const response = {
                                    'status_code': 200,
                                    'message': "Successful Login",
                                    'data': data
                                };
                                res.status(200).json(response);
                            });
                        }
                    } else {
                        const response = {
                            'status_code': 401,
                            'error': "Username/Password Incorrect"
                        };
                        res.status(401).json(response);
                    }
                })
            } else {
                const response = {
                    'status_code': 401,
                    'error': "Username/Password Incorrect"
                };
                res.status(401).json(response);
            }
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            "status_code": 500,
            "error": "Internal server error" + e
        });
    }
};

exports.getAllUsers = (req, res, next) => {
    try {
        console.log(req.query);
        const query = "select id, firstname, lastname, email, user_type from users order by id desc";
        database.executeQuery(res, "", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

exports.updateUser = (req, res, next) => {
    try {
        let firstname = req.body.firstname;
        let lastname = req.body.lastname;
        let user_id = req.body.user_id;
        const query = "update users set firstname='" + firstname + "', lastname='" + lastname + "' where id = " + user_id + "";
        database.executeQuery(res, "User successfully updated", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

exports.deleteUser = (req, res, next) => {
    try {
        let user_id = req.body.user_id;
        const query = "delete from users where id = " + user_id + "";
        database.executeQuery(res, "User Deleted updated", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

// exports.socialLogin = (req, res, next) => {
//     try {

//         console.log("Social Login");
//         let username = req.body.username;
//         let email = req.body.email;
//         let avatar = req.body.avatar;
//         let firstName = req.body.firstname;
//         let lastName = req.body.lastname;
//         let is_mobile = req.body.is_mobile ? req.body.is_mobile : false;
//         let createdAt = date;
//         let updatedAt = date;

//         let query = "select * from user where username='" + username + "' limit 1";
//         database.con.query(query, function (err, resultQuery) {
//             if (err) {
//                 const response = {'status_code': 500, 'error': "Database Error"};
//                 res.status(500).json("Error", response);
//             } else {
//                 if (resultQuery.length > 0) {
//                     jwt.sign({_uid: username}, '8z6xw%C&?m<Md', {expiresIn: '1h'}
//                         , (err, token) => {
//                             const user = {
//                                 'id': resultQuery[0].id,
//                                 'firstname': resultQuery[0].firstname,
//                                 'lastname': resultQuery[0].lastname,
//                                 'email': resultQuery[0].email,
//                                 'avatar': resultQuery[0].avatar,
//                                 'username': resultQuery[0].username
//                             };
//                             let _token = {};
//                             if (is_mobile) {
//                                 _token = {
//                                     'value': token
//                                 }
//                             } else {
//                                 _token = {
//                                     'value': token,
//                                     'expiry': 3600
//                                 }
//                             }
//                             const data = {
//                                 'user': user,
//                                 'token': _token
//                             };
//                             const response = {
//                                 'status_code': 200,
//                                 'message': "Successful Login",
//                                 'data': data
//                             };
//                             res.status(200).json(response);
//                         });
//                 } else {
//                     console.log("USer Doesnt Exist");
//                     let query = "insert into user " +
//                         "(firstname, lastname, avatar, created_at, updated_at, email, username) " +
//                         "values " +
//                         "('" + firstName + "','" + lastName + "','" + avatar + "','" + createdAt + "'," +
//                         "'" + updatedAt + "','" + email + "','" + username + "')";
//                     database.con.query(query, function (err, resultQuery) {
//                         if (err) {
//                             const response = {'status_code': 500, 'error': "Database Error"};
//                             res.status(500).json("Error", response);
//                         } else {
//                             console.log(resultQuery.insertId);
//                             jwt.sign({_uid: username}, '8z6xw%C&?m<Md', {expiresIn: '1h'}
//                                 , (err, token) => {
//                                     const user = {
//                                         'id': resultQuery.insertId,
//                                         'firstname': firstName,
//                                         'lastname': lastName,
//                                         'email': email,
//                                         'avatar': avatar,
//                                         'username': username
//                                     };
//                                     let _token = {};
//                                     if (is_mobile) {
//                                         _token = {
//                                             'value': token
//                                         }
//                                     } else {
//                                         _token = {
//                                             'value': token,
//                                             'expiry': 3600
//                                         }
//                                     }
//                                     const data = {
//                                         'user': user,
//                                         'token': _token
//                                     };
//                                     const response = {
//                                         'status_code': 200,
//                                         'message': "Successful Login",
//                                         'data': data
//                                     };
//                                     res.status(200).json(response);
//                                 });
//                         }
//                     });
//                 }
//             }
//         });
//     } catch (e) {
//         const response = {'status_code': 500, 'error': "Internal Server Error"};
//         res.status(500).json(response);
//     }
// };


// 
// Hamza Contribution
//

exports.validateUser = (req, res) => {
    try {
        let email = req.body.email;

        const query = `SELECT * FROM users WHERE email = '${email}' AND user_type IN ('admin', 'cp')`;
        database.con.query(query, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    "status_code": 500,
                    "error": "Internal server error" + err
                });
            }
            if (result.length > 0) {
                res.status(200).json({
                    "status_code": 200,
                    "user": result[0]
                })
            } else {
                const response = {
                    'status_code': 401,
                    'error': "Username/Password Incorrect"
                };
                res.status(401).json(response);
            }
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            "status_code": 500,
            "error": "Internal server error" + e
        });
    }
};

exports.acceptESing = (req, res) => {
    const { id } = req.body;

    try {
        const query = `UPDATE users SET e_sing = 1 WHERE id = ${id}`;
        database.con.query(query, (err, result) => {
            if (err) {
                res.status(500).json({
                    "status_code": 500,
                    "error": "Internal server error" + err
                });
            } else {
                res.status(200).json({
                    "status_code": 200,
                    "response": "You have successfuly accepted the ESing. Kindly Login again."
                })
            }
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            "status_code": 500,
            "error": "Internal server error" + e
        });
    }
}

exports.getAllContentProviders = (req, res, next) => {
    try {
        console.log(req.query);
        const query = "SELECT * FROM users WHERE user_type = 'cp' ORDER BY id DESC";
        database.executeQuery(res, "", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

exports.createContentProviders = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(400).json({
            "status_code": 400,
            "error": errors.array()[0]
        });
    } else {
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;
        const avatar = null;

        let query = `SELECT * FROM users WHERE email = '${email}'`;

        database.con.query(query, async (err, result) => {
            if (err) {
                res.status(500).json({
                    "status_code": 500,
                    "error": err.message
                });
            } else if (result <= 0) {
                const hashPassword = await bcrypt.hash(password, 12);
                query = `INSERT INTO users (firstname, lastname, email, password, avatar, created_at, user_type, e_sing) VALUES ('${firstName}', '${lastName}', '${email}', '${hashPassword}', '${avatar}', '${date}', 'cp', 0)`;
                console.log(query); 

                database.con.query(query, (err, resultInsert) => {
                    if (err) {
                        console.log(err);
                        res.status(500).json({
                            "status_code": 500,
                            "error": err.message
                        });
                    } else {
                        res.status(200).json({
                            "status_code": 200,
                            "response": "Content Provider Successfully Created."
                        });
                    }
                });
            } else {
                res.status(400).json({
                    "status_code": 400,
                    "error": "Content Provider already exists."
                });
            }
        });
    }
};

exports.deleteContentProviders = (req, res, next) => {
    try {
        const {
            cp_id
        } = req.body;
        const query = "delete from users where id = " + cp_id + "";
        database.executeQuery(res, "Content Provider successfully deleted", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};
