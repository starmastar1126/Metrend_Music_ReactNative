const {
    imageHash
} = require('image-hash');
const database = require("../utils");
const jwt = require("jsonwebtoken");

var now = new Date();
const date = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();

exports.upload = (req, res) => {
    try {
        console.log("Body", req.body);
        console.log("Content", req.file);
        const url = req.protocol + "://" + req.get("host");
        let title = req.body.title;
        let contentURL = "content/" + req.file.filename;
        let duration = req.body.duration;
        let desc_short = req.body.desc_short;
        let desc_long = req.body.desc_long;
        let fk_genre_id = req.body.fk_genre_id;
        let year = req.body.year;
        let rating = req.body.rating;
        let featured = req.body.featured;
        let created_at = date;
        let seasonID = req.body.seasonID ? req.body.seasonID : 0;
        let episodeNumber = req.body.episodeNumber ? req.body.episodeNumber : 0;

        let generatedURl = url + "/" + contentURL;
        console.log("CONTENT URL", generatedURl);

        const query = "INSERT INTO content ( title, contentURL, duration, desc_short, desc_long," +
            "fk_genre_id, year, rating, featured, created_at, seasonID, episodeNumber) VALUES ('" + title + "', '" + contentURL + "', '" + duration + "', '" + desc_short + "', '" + desc_long + "', " + fk_genre_id + ", " +
            "" + year + ", " + rating + ", " + featured + ", '" + created_at + "', " + seasonID + ", " + episodeNumber + ")";
        database.con.query(query, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    "status_code": 500,
                    "error": "Internal server error" + err
                });
            } else {
                res.status(200).json({
                    "status_code": 200,
                    "message": {
                        "Inserted_ID": result.insertId
                    }
                });
            }
        });

    } catch (e) {
        console.log(e);
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

exports.uploadTrailers = (req, res) => {
    try {
        console.log(req.query);
        let trailerURL = "trailers/" + req.file.filename;
        let contentID = req.body.content_id;
        const query = "update content set trailerURL = '" + trailerURL + "' where id=" + contentID + "";
        database.executeQuery(res, "Trailer Uploaded", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

exports.uploadPosters = (req, res) => {
    try {
        console.log(req.query);
        let posterURL = "posters/" + req.file.filename;
        let contentID = req.body.content_id;
        const query = "update content set posterURL = '" + posterURL + "' where id=" + contentID + "";
        database.executeQuery(res, "Poster Uploaded", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

exports.uploadThumbnails = (req, res) => {
    try {
        console.log(req.query);
        let thumbnailURL = "thumbnails/" + req.file.filename;
        let contentID = req.body.content_id;
        const query = "update content set thumbnailURL = '" + thumbnailURL + "' where id=" + contentID + "";
        database.executeQuery(res, "Thumbnail Uploaded", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

exports.addSeries = (req, res) => {

    try {
        console.log("BODY", req.body);
        console.log("FILE", req.file);
        let name = req.body.name;
        let created_at = date;
        let year = req.body.year;
        let thumbnailURL = "thumbnails/" + req.file.filename;

        const query = "INSERT INTO series ( name, created_at, year, tumbnailURL ) VALUES ('" + name + "', '" + created_at + "', '" + year + "'" +
            ", '" + thumbnailURL + "')";
        database.con.query(query, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    "status_code": 500,
                    "error": "Internal server error" + err
                });
            } else {
                res.status(200).json({
                    "status_code": 200,
                    "message": {
                        "Inserted_ID": result.insertId
                    }
                });
            }
        });
    } catch (e) {
        console.log(e);
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }

};

exports.uploadSeriesPosters = (req, res) => {
    try {
        console.log(req.query);
        let posterURL = "posters/" + req.file.filename;
        let seriesID = req.body.series_id;
        const query = "update series set posterURL = '" + posterURL + "' where id=" + seriesID + "";
        database.executeQuery(res, "Poster Uploaded", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

exports.addSeason = (req, res) => {

    try {
        console.log("BODY", req.body);
        let season = req.body.season;
        let year = req.body.year;
        let created_at = date;
        let seriesID = req.body.series_id;

        const query = "INSERT INTO season ( season, year, created_at, seriesID ) VALUES ('" + season + "', '" + year + "', '" + created_at + "'" +
            ", '" + seriesID + "')";
        database.con.query(query, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    "status_code": 500,
                    "error": "Internal server error" + err
                });
            } else {
                res.status(200).json({
                    "status_code": 200,
                    "message": "Season Added Successfully",
                    "Inserted_ID": result.insertId
                });
            }
        });
    } catch (e) {
        console.log(e);
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

exports.getSeasonEpisodes = (req, res) => {
    try {
        console.log(req.query);
        let seasonID = req.query.seasonID;
        const query = "select * from content where seasonID= " + seasonID + " order by id desc";
        database.executeQuery(res, "", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

exports.getEpisode = (req, res) => {
    try {
        console.log(req.query);
        let episodeNumber = req.query.episodeNumber;
        const query = "select * from content where episodeNumber= " + episodeNumber + " order by id desc limit 1";
        database.executeQuery(res, "", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

exports.latestContent = async (req, res, next) => {
    try {
        console.log(req.query);
        const query = "select * from contentNew order by rand() limit 1;";
        database.executeQuery(res, "", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

exports.contentGenre = async (req, res, next) => {
    try {
        let genre = req.query.genre;
        console.log(req.query);
        const query = "select * from content where seasonID=0 and fk_genre_id = " + genre + "";
        database.executeQuery(res, "", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

exports.contentTitle = async (req, res, next) => {
    try {
        let title = req.query.title;
        console.log(req.query);
        const query = "select * from content where seasonID=0 and title = '" + title + "'";
        database.executeQuery(res, "", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

exports.getAllMovies = async (req, res, next) => {
    try {
        let type = req.query.type;
        console.log(req.query);
        const query = "select * from content where seasonID=0 order by id desc";
        database.executeQuery(res, "", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

exports.getAllGenres = async (req, res, next) => {
    try {
        let type = req.query.type;
        console.log(req.query);
        const query = "select * from genre order by id desc";
        database.executeQuery(res, "", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

exports.addGenre = async (req, res, next) => {
    try {
        let genre = req.body.genre;
        console.log(req.body);
        const query = "insert into genre (name) values ('" + genre + "')";
        database.executeQuery(res, "Added genre.", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

exports.updateGenre = async (req, res, next) => {
    try {
        let genre_id = req.body.genre_id;
        let genre = req.body.genre;
        console.log(req.query);
        const query = "update genre set name='" + genre + "' where id=" + genre_id + " ";
        database.executeQuery(res, "Successfully update genre", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

// New APIS
exports.getContentWithCompleteData = async (req, res, next) => {
    try {
        let genre = req.query.genre;
        console.log(req.query);
        const query = "SELECT cn.*, ar.name 'artist_name',ar.dob 'dob' FROM metrend.contentNew cn LEFT JOIN artist ar ON cn.artistID = ar.id WHERE  genreID = " + genre + "";
        database.executeQuery(res, "", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

exports.getPlaylistDetail = async (req, res, next) => {
    try {
        let playlistID = req.query.playlistID;
        console.log(req.query);
        const query = "SELECT * FROM playlist pl LEFT JOIN metrend.playlistDetail plDetail ON pl.id = plDetail.playlistID LEFT JOIN contentNew cn ON plDetail.contentID = cn.id WHERE  pl.id = " + playlistID + "";
        database.executeQuery(res, "", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }

};

exports.getPlaylistForUser = async (req, res, next) => {
    try {
        let userID = req.query.userID;
        console.log(req.query);
        const query = "SELECT * FROM playlist where userID=" + userID + "";
        database.executeQuery(res, "", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

exports.getContentForArtist = async (req, res, next) => {
    try {
        let artistID = req.query.artistID;
        console.log(req.query);
        const query = "SELECT * FROM contentNew WHERE artistID =" + artistID + "";
        database.executeQuery(res, "", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }

};

exports.getAllAlbumsForArtist = async (req, res, next) => {
    try {
        let artistID = req.query.artistID;
        console.log(req.query);

        const query = "SELECT * FROM albums artistID =" + artistID;
        database.executeQuery(res, "", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }

};

exports.getContentByTypeAndGenre = async (req, res, next) => {
    try {
        let genre = req.query.genre;
        let type = req.query.type;

        console.log(req.query);
        const query = "SELECT cn.*, ar.name 'artist_name',ar.dob 'dob' FROM metrend.contentNew cn LEFT JOIN artist ar ON cn.artistID = ar.id WHERE  genreID = " + genre + " AND cn.type =" + type + "";
        database.executeQuery(res, "", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

exports.getContentByType = async (req, res, next) => {
    try {
        let type = req.query.type;

        console.log(req.query);
        const query = "SELECT cn.*, ar.name 'artist_name',ar.dob 'dob' FROM metrend.contentNew cn LEFT JOIN artist ar ON cn.artistID = ar.id WHERE  cn.type =" + type + "";
        database.executeQuery(res, "", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

exports.getAllContent = async (req, res, next) => {
    try {
        let genre = req.query.genre;
        console.log(req.query);
        const query = "select * from contentNew cn where cn.genreID = " + genre + "";
        database.executeQuery(res, "", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

exports.createPlaylist = async (req, res, next) => {
    try {
        console.log("BODY", req.body);

        let name = req.body.name;
        let userID = req.body.userID;
        let private = req.body.private;
        let type = req.body.type;
        let created_at = date;

        const query = "INSERT INTO playlist (Name, userID, private, type, createdAt) values ('" + name + "', '" + userID + "', '" + private + "', '" + type + "', '" + created_at + "')";
        database.con.query(query, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    "status_code": 500,
                    "error": "Internal server error" + err
                });
            } else {
                res.status(200).json({
                    "status_code": 200,
                    "message": "Playlist created"
                });
            }
        });
    } catch (e) {
        console.log(e);
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

exports.addSongtoPlaylist = async (req, res, next) => {
    try {
        console.log("BODY", req.body);
        let contentID = req.body.contentID;
        let playlistID = req.body.playlistID;

        const query = "INSERT INTO playlistDetail (contentID, playlistID) VALUES (" + contentID + "," + playlistID + ")";
        database.con.query(query, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    "status_code": 500,
                    "error": "Internal server error" + err
                });
            } else {
                res.status(200).json({
                    "status_code": 200,
                    "message": "Song added to playlist"
                });
            }
        });
    } catch (e) {
        console.log(e);
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};



// 
// Hamza's Contribution
// 

exports.getAllContent = (req, res) => {
    try {
        const query = `SELECT * FROM contentNew WHERE approved = 1 ORDER BY id DESC`;
        database.executeQuery(res, "", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

exports.getContent = (req, res) => {
    const { id } = req.params;
    try {
        const query = `SELECT * FROM contentNew WHERE id = ${id}`;
        database.executeQuery(res, "", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

exports.uploadContent = (req, res) => {
    try {
        let query = "";
        const bearerHeader = req.headers['authorization'];
        const url = req.protocol + "://" + req.get("host");
        const title = req.body.title;
        const contentURL = "content/" + req.file.filename;
        const duration = req.body.duration;
        const rating = req.body.rating;
        const fk_genre_id = req.body.fk_genre_id;
        const type = req.file.mimetype.split("/")[0];
        const created_at = date;
        const approved = 0;
        let cp_id;

        const generatedURl = url + "/" + contentURL;
        console.log("CONTENT URL", generatedURl);

        const token = bearerHeader.split(' ')[1];
        jwt.verify(token, '8z6xw%C&?m<Md', (err, auth) => {
            if (err) {
                console.log("Token Authentication Failed");
                res.status(401).json({
                    status_code: 401,
                    error: "Authentication Failed"
                });
            } else {
                const {
                    id
                } = auth;
                cp_id = id;
            }
        });

        query = `INSERT INTO contentNew ( title, contentURL, duration, rating, genreID, type, createdAt, cp_id, approved) VALUES ( '${title}', '${contentURL}', '${duration}',  '${rating}', ${fk_genre_id}, '${type}', '${created_at}', ${cp_id}, ${approved} )`;
        database.con.query(query, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    "status_code": 500,
                    "error": "Internal server error" + err
                });
            } else {
                res.status(200).json({
                    "status_code": 200,
                    "message": {
                        "Inserted_ID": result.insertId
                    }
                });
            }
        });

    } catch (e) {
        console.log(e);
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

exports.uploadContentThumbnails = (req, res) => {
    try {
        let thumbnailURL = "thumbnails/" + req.file.filename;
        let contentID = req.body.content_id;
        const query = "update contentNew set thumbnailURL = '" + thumbnailURL + "' where id=" + contentID + "";
        database.executeQuery(res, "Thumbnail Uploaded", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

exports.addToPlaylist = (req, res) => {
    try {
        console.log('req.body :- ', req.body);
        const { content_id, playlist_id } = req.body;
        let query = `SELECT * FROM playlists WHERE id = ${playlist_id}`;

        database.con.query(query, (err, result) => {
            if (err) {
                res.status(500).json({
                    "status_code": 500,
                    "error": "Internal server error" + err
                });
            } else {
                if(result.length !== 0) {
                    let contents = JSON.parse(result[0].contents);
                    const contentExist = contents.some(id => id == Number.parseInt(content_id));

                    if (!contentExist) {
                        contents.push(Number.parseInt(content_id));
                        contents = JSON.stringify(contents);

                        query = `UPDATE playlists SET contents = '${contents}' WHERE id = ${playlist_id}`;
                        database.executeQuery(res, "Content has been successfully added to playlist", query);
                    } else {
                        res.status(400).json({
                            "status_code": 400,
                            "error": "Content already exists in this Playlist."
                        });
                    }
                } else {
                    res.status(400).json({
                        "status_code": 400,
                        "error": "Playlist not found."
                    });
                }
            }
        });
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
}; 

exports.toBeApproved = (req, res) => {
    try {
        const query = "SELECT contentNew.*, users.email AS cp_email FROM contentNew, users WHERE contentNew.approved = 0 AND contentNew.cp_id = users.id ORDER BY contentNew.id DESC";
        database.executeQuery(res, "", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

exports.approveContent = (req, res) => {
    try {
        console.log("approveContent : ", req.body);
        const {
            content_id, paid, price, paidDays
        } = req.body;
        const approved = 1;
        let query;

        if (paid == 0) {
            query = `UPDATE contentNew SET paid = ${paid}, approved = ${approved} WHERE id = ${content_id}`;
        } else {
            const now = new Date();
            now.setDate(now.getDate() + Number.parseInt(paidDays));
            const date = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
            query = `UPDATE contentNew SET paid = ${paid}, price = ${price}, date_turns_unpaid = '${date}', approved = ${approved} WHERE id = ${content_id}`;
        }
        database.executeQuery(res, "Content successfully approved", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

exports.updateContent = (req, res) => {
    try {
        console.log("updateContent : ", req.body);
        const {
            content_id, title, genre_id, rating
        } = req.body;

        const query = `UPDATE contentNew SET title = '${title}', genreID = ${genre_id}, rating = ${rating} WHERE id = ${content_id}`;
        database.executeQuery(res, "Content successfully updated", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
}

exports.deleteContent = (req, res) => {
    try {
        const {
            content_id
        } = req.body;
        console.log("deleteContent");
        console.log(req.body);

        const query = "DELETE FROM contentNew where id = " + content_id + "";
        database.executeQuery(res, "Content successfully deleted", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
};

exports.playlists = (req, res) => {
    try {
        const query = "SELECT * FROM playlists ORDER BY id DESC";
        database.executeQuery(res, "", query);
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
}

exports.postPlaylist = (req, res) => {
    try {
        const { name } = req.body;
        let query = `SELECT * FROM playlists WHERE name = '${name}'`;

        database.con.query(query, async (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({
                    "status_code": 500,
                    "error": "Internal server error" + err
                });
            } else if (result <= 0)  {
                query = `INSERT INTO playlists (name, created_at, contents) VALUES ('${name}', '${date}', '[]')`;

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
                            "response": "Playlist Successfully Created."
                        });
                    }
                });
            } else {
                res.status(400).json({
                    "status_code": 400,
                    "error": "Playlist name already exists."
                });
            }
        });
    } catch (e) {
        const response = {
            'status_code': 500,
            'error': "Internal Server Error"
        };
        res.status(500).json(response);
    }
}
