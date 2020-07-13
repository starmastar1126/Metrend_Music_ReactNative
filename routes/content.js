const express = require("express");
const authorize = require("../middleware/authorize");
const router = express.Router();
const ContentController = require("../controllers/content");
const Content = require("../middleware/contents");
const thumbnails = require("../middleware/thumbnails");
const posters = require("../middleware/posters");
const trailers = require("../middleware/trailers");

// router.post("/content/upload", authorize, Content, ContentController.upload);
router.post("/content/upload/trailer", authorize , trailers, ContentController.uploadTrailers);
router.post("/content/upload/poster", authorize , posters, ContentController.uploadPosters);
// router.post("/content/upload/thumbnail", authorize , thumbnails, ContentController.uploadThumbnails);
router.get("/content/movies/all", authorize, ContentController.getAllMovies);

router.post("/series/add", authorize , thumbnails, ContentController.addSeries);
router.post("/series/upload/poster", authorize , posters, ContentController.uploadSeriesPosters);

router.post("/season/add", authorize , ContentController.addSeason);
router.get("/season/episode/all", authorize, ContentController.getSeasonEpisodes);
router.get("/season/episode", authorize, ContentController.getEpisode);

router.get("/content/latest", authorize, ContentController.latestContent);
router.get("/content/genre", authorize, ContentController.getAllContent);

router.post("/genre/add", authorize, ContentController.addGenre);
router.post("/genre/edit", authorize, ContentController.updateGenre);
router.get("/genres",authorize, ContentController.getAllGenres);

router.post("/content/genre/add", authorize, ContentController.contentGenre);
router.post("/content/genre/edit", authorize, ContentController.contentGenre);
// router.get("/content/genre", authorize, ContentController.getAllContent);

router.get("/content/title", authorize, ContentController.contentTitle);


router.get('/content/genre/complete',authorize, ContentController.getContentWithCompleteData);
router.get('/content/artist',authorize, ContentController.getContentForArtist);
router.get('/content/artist/all',authorize, ContentController.getAllAlbumsForArtist);

router.post('/playlist/create',authorize, ContentController.createPlaylist);
router.post('/playlist/add/song',authorize, ContentController.addSongtoPlaylist);
router.get('/playlist/user',authorize, ContentController.getPlaylistForUser);
router.get('/playlist/detail',authorize, ContentController.getPlaylistDetail);


// 
// Hamza's Contribution
// 

router.get("/getAllContent", authorize, ContentController.getAllContent);
router.get("/getContent/:id", authorize, ContentController.getContent);

router.post("/content/upload", authorize, Content, ContentController.uploadContent);
router.post("/content/upload/thumbnail", authorize , thumbnails, ContentController.uploadContentThumbnails);
router.put("/content/addToPlaylist", authorize, ContentController.addToPlaylist);

router.get("/content/toBeApproved", authorize, ContentController.toBeApproved);
router.put("/content/toBeApproved/approve", authorize, ContentController.approveContent);
router.put("/content/toBeApproved/update", authorize, ContentController.updateContent);
router.delete("/content/toBeApproved/delete", authorize, ContentController.deleteContent);

router.get('/playlists', authorize, ContentController.playlists);
router.post('/playlists/create', authorize, ContentController.postPlaylist);

module.exports = router;
