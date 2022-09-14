const router = require('express').Router()

router.get('/', (req,res) => {
    let places = [{
        name:'Lousiana Fried Chicken & Mac Ribz',
        city: 'Las Vegas',
        state:'NV',
        cuisines:'Chicken, Homestyle BBQ Ribs',
        pic:'https://scontent.flas1-1.fna.fbcdn.net/v/t39.30808-6/278026481_360000596138730_1943186585270995311_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=q7lyN8e7Nm0AX-JnqNo&_nc_ht=scontent.flas1-1.fna&oh=00_AT8yp5NNYw2EvChM8W6QwhGAX23H9oW6n8Pj2K25aZX6ww&oe=6327F292'
    },
    {
        name:'Mr. Fries Man',
        city: 'Las Vegas',
        state:'NV',
        cuisines:'Honey Shrimp Fries, Steak or Chicken',
        pic:'https://cdn.vox-cdn.com/thumbor/k5SKpch_S8RtGfF-zwejAf82s6E=/0x0:1000x1000/1200x800/filters:focal(409x251:569x411)/cdn.vox-cdn.com/uploads/chorus_image/image/67982091/Mr_Fries_Man.0.jpg'
    }
    ]
    res.render('places/index', {places})
})

router.get('/new', (req,res) => {
    res.render('places/new')
})

router.get('/edit', (req,res) => {
    res.render('places/edit')
})

router.get('/show', (req,res) => {
    res.render('places/show')
})


module.exports = router