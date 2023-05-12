const { default: axios } = require('axios');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const response = await axios.get('http://localhost:1337/api/works?populate=*')
  const works = response.data.data
    res.render('index', { works });
    
  } catch (error) {
    res.render('index', {  });
    
  }
});

router.get('/about',(req,res)=>{
  res.render('aboutus', {  })
})

router.get('/contact',(req,res)=>{
  res.render('contacts', {  })
})

router.get('/works',async(req,res)=>{
  try {
    const response = await axios.get('http://localhost:1337/api/works?populate=*')
    const works = response.data.data
    res.render('works', {works  })
    
  } catch (error) {
    res.render('works', {  })

  }
})

router.get('/work/:id',async(req,res)=>{
try {
  const {id} = req.params
  const response = await axios.get(`http://localhost:1337/api/works/${id}?populate=*`)
  const work = response.data.data
  res.render('work', { work })
} catch (error) {
  res.render('work', {  })

}
})
module.exports = router;
