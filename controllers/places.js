const router = require('express').Router()

router.get('/', (req,res) => {
    let places = [{
        name:'Lousiana Fried Chicken & Mac Ribz',
        city: 'Las Vegas',
        state:'NV',
        cuisines:'Chicken, Homestyle BBQ Ribs',
        pic:'/images/bbq.jpeg'
    },
    {
        name:'Mr. Fries Man',
        city: 'Las Vegas',
        state:'NV',
        cuisines:'Honey Shrimp Fries, Steak or Chicken',
        pic:'/images/MrFries.jpeg'
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