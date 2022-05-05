const express = require('express');
const router = express.Router();
const Movie = require('../../model/Movie');
const Series = require('../../model/Series');

router.get('/', async (req, res) => {
    const all = await Movie.find();
    res.json(all);
})

router.get('/series', async (req, res) => {
    const all = await Series.find();
    res.json(all);
})

router.get('/:id', async (req, res) => {
    var mv = await Movie.findOne({ _id : req.params.id});
    if(mv == null){
        mv = await Series.findOne({ _id : req.params.id});
    }
    res.json(mv);
})



router.get('/src/:srcT', async (req, res) => {
    let rgxs = `[a-zA-Z0-9]*${req.params.srcT}[a-zA-Z0-9]*`;
    let rgx = new RegExp(rgxs, 'g');
    let query = { name:  rgx};
    const mvs = await Movie.find(query);
    const srs = await Series.find(query);
    res.json(mvs);
})

router.get('/src/series/:srcT', async (req, res) => {
    let rgxs = `[a-zA-Z0-9]*${req.params.srcT}[a-zA-Z0-9]*`;
    let rgx = new RegExp(rgxs, 'g');
    let query = { name:  rgx};
    const srs = await Series.find(query);
    res.json(srs);
})

router.get('/src/:srcT', async (req, res) => {
    let rgxs = `[a-zA-Z0-9]*${req.params.srcT}[a-zA-Z0-9]*`;
    let rgx = new RegExp(rgxs, 'g');
    let query = { name:  rgx};
    const mvs = await Movie.find(query);
    const srs = await Series.find(query);
    res.json(mvs);
})

router.get('/ratingen/:un/:fn' , async (req, res) => {
    var mv = await Movie.findOne({name: req.params.fn});
    if(mv==null){mv = await Series.findOne({name: req.params.fn});}
    const mvr = mv.ratings;
    var v = true;
    mvr.forEach(element => {
        if(element == req.params.un){
            v = false;
        }
    });
    res.send(v);
})

router.post('/rate', async (req, res) => {
    let {
        uname,
        star,
        fn
    } = req.body;
    console.log(uname, star, fn);
    let mv = await Movie.findOne({name: fn});
    if(mv==null){mv = await Series.findOne({name: fn});}
    mv.score += Number(star);
    mv.db += 1;
    if (!Array.isArray(mv.ratings)) {
        mv.ratings = [];
    }
    mv.ratings.push(uname);
    await mv.save();
    res.status(201).json({
        msg: "ert fogadva"
    })
})

router.post('/upload', async (req, res) => {
    try{

    let cat = req.body.cat;
    if(cat == "film"){

    let {
        name,
        year,
        dir,
        desc
    } = req.body;

    let file1 = req.files.file1;
    let file2 = req.files.file2;
    file1.mv(__dirname + '/../../public/' + file1.name);
    file2.mv(__dirname + '/../../public/' + file2.name);
    let p_url = "http://localhost:5000/static/" + file1.name;
    let link = "http://localhost:5000/static/" + file2.name;

    let ratings = [""];
    let score = 0;
    let db = 0;

    let newMovie = new Movie({
        name,
        year,
        dir,
        desc,
        p_url,
        link,
        ratings,
        score,
        db
    });
    newMovie.save();

    }else{

        let {
            ep,
            name,
            year,
            dir,
            desc,
        } = req.body;

        let file1 = req.files.file1;
        file1.mv(__dirname + '/../../public/' + file1.name);
        let p_url = "http://localhost:5000/static/" + file1.name;

        let links = [];
        if(Number(ep) >= 1){let file3 = req.files.file3; file3.mv(__dirname + '/../../public/' + file3.name); links.push("http://localhost:5000/static/" + file3.name);}
        if(Number(ep) >= 2){let file4 = req.files.file4; file4.mv(__dirname + '/../../public/' + file4.name); links.push("http://localhost:5000/static/" + file4.name);}
        if(Number(ep) >= 3){let file5 = req.files.file5; file5.mv(__dirname + '/../../public/' + file5.name); links.push("http://localhost:5000/static/" + file5.name);}
        if(Number(ep) >= 4){let file6 = req.files.file6; file6.mv(__dirname + '/../../public/' + file6.name); links.push("http://localhost:5000/static/" + file6.name);}
        if(Number(ep) >= 5){let file7 = req.files.file7; file7.mv(__dirname + '/../../public/' + file7.name); links.push("http://localhost:5000/static/" + file7.name);}

        let ratings = [""];
        let score = 0;
        let db = 0;

        let newSeries = new Series({
            name,
            year,
            dir,
            desc,
            p_url,
            ep,
            links,
            ratings,
            score,
            db
        });
        newSeries.save();

    }
    
    res.status(201).json({
        msg: "file feltoltve"
    })
    
    }catch(err){
        console.log(err)
    }
})

module.exports = router;