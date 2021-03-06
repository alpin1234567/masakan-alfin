const router = require('express').Router();
const route = router;

const controller = require('../controller/index');

route.get('/', (req, res) => {
    res.send({
        greet : 'Hello world 👋',
        message : 'visit link on bellow for documentation about masak apa hari ini 👇',
        documentation : 'https://github.com/alpin1234567/masakan-alfin'
    });
});

route.get('/api', (req, res) => {
    res.send({
        method : req.method,
        message : 'Hello there 🌹',
        status : 'On Progress 🚀',
        lets_connected : {
            github : 'https://github.com/alpin1234567/',
            whatsApp : '089690719275',
            instagram : 'alpinnigan'
        }
    });
});

route.get('/api/recipes', controller.newRecipes);
route.get('/api/recipes/:page', controller.newRecipesByPage);
route.get('/api/recipes-length/', controller.newRecipesLimit);
route.get('/api/categorys/recipes', controller.category);
route.get('/api/articles/new', controller.article);
route.get('/api/categorys/recipes/:key', controller.recipesByCategory);
route.get('/api/categorys/recipes/:key/:page', controller.recipesCategoryByPage);
route.get('/api/recipe/:key', controller.recipesDetail);
route.get('/api/search/', controller.searchRecipes);
route.get('/api/categorys/article', controller.articleCategory);
route.get('/api/categorys/article/:key', controller.articleByCategory);
route.get('/api/article/:tag/:key', controller.articleDetails);

route.get('*', (req, res) => {
    res.status(404).json({
        method : req.method,
        message : 'tidak dapat menemukan titik akhir tertentu, pastikan Anda membaca dokumentasi',
        status : false,
        code : 401,
    });
});

module.exports = route;
