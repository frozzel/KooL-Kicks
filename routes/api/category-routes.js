const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const catData = await Category.findAll({
      include: [{model: Product}],
    })
    res.status(200).json(catData);
  } catch (err){
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const catData = await Category.findByPk(req.params.id, {
      include: [{model: Product}],
    })
    if (!catData){
      res.status(404).json({message: "Id not found Please try a valid Id!"});
      return;
    }
    res.status(200).json(catData);
  } catch (err){
    res.status(500).json(err);
  }
 
});

router.post('/', async (req, res) => {
  try {
    const catData = await Category.create({
      category_name: req.body.category_name,
    })
    res.status(200).json(catData);
  } catch (err){
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const catData = await Category.update({
      category_name: req.body.category_name},
      {where:{id: req.params.id}});

      if (!catData){
        res.status(404).json({message: "Id not found Please try a valid Id!"});
        return;
      }
    res.status(200).json(catData);
  } catch (err){
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const catData = await Category.destroy(
      {where:{id: req.params.id}
    });

      if (!catData){
        res.status(404).json({message: "Id not found Please try a valid Id!"});
        return;
      }
    res.status(200).json(catData);
  } catch (err){
    res.status(500).json(err);
  }
});

module.exports = router;
