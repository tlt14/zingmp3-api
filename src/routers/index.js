const express = require("express")
const ZingMP3Controller = require("../controllers/ZingMP3Controller")
const router = express.Router()


// getSong
router.get("/song", ZingMP3Controller.getSong)

// getDetailPlaylist
router.get("/detailplaylist", ZingMP3Controller.getDetailPlaylist)

// getHome
router.get("/home", ZingMP3Controller.getHome)

// getTop100
router.get("/top100", ZingMP3Controller.getTop100)

// getChartHome
router.get("/charthome", ZingMP3Controller.getChartHome)

// getNewReleaseChart
router.get("/newreleasechart", ZingMP3Controller.getNewReleaseChart)

// getInfoSong
router.get("/infosong", ZingMP3Controller.getInfo)

// getArtist
router.get("/artist", ZingMP3Controller.getArtist)

// getArtistSong
router.get("/artistsong", ZingMP3Controller.getArtistSong)

// getLyric
router.get("/lyric", ZingMP3Controller.getLyric)

// search
router.get("/search", ZingMP3Controller.search)

// getListMV
router.get("/listmv", ZingMP3Controller.getListMV)

// getCategoryMV
router.get("/categorymv", ZingMP3Controller.getCategoryMV)

// getVideo
router.get("/video", ZingMP3Controller.getVideo)

module.exports = router