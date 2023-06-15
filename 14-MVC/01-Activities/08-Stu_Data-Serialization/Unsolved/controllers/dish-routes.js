const router = require('express').Router();
const sequelize = require('../config/connection');
const Dish = require('../models/Dish');

// router.get('/', async (req, res) => {
//   // TODO: Build out this route so that it serializes all of the dish objects that it receives. See the 'get' route below for a hint.

//   try{ 
//     const dishData = await Dish.findAll();
//     const dish = dishData.get({ plain: true });
//     res.render('all', dish);
//   } catch (err) {
//       res.status(500).json(err);
//   };   
// });

// FROM the SOLVED!!!!!
router.get('/', async (req, res) => {
  // We find all dishes in the db and set the data equal to dishData
  const dishData = await Dish.findAll().catch((err) => { 
    res.json(err);
  });
  // We use map() to iterate over dishData and then add .get({ plain: true }) each object to serialize it. 
  const dishes = dishData.map((dish) => dish.get({ plain: true }));
  // We render the template, 'all', passing in dishes, a new array of serialized objects.
  res.render('all', { dishes });
});

// route to get one dish
router.get('/dish/:id', async (req, res) => {
  try{ 
      const dishData = await Dish.findByPk(req.params.id);
      if(!dishData) {
          res.status(404).json({message: 'No dish with this id!'});
          return;
      }
      const dish = dishData.get({ plain: true });
      res.render('dish', dish);
    } catch (err) {
        res.status(500).json(err);
    };     
});

module.exports = router;
