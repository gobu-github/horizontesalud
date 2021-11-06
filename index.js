import express from 'express';

const app = express();

//Configuración Bootstrap
app.use("/css", express.static('./node_modules/bootstrap/dist/css'));
app.use("/js", express.static("./node_modules/bootstrap/dist/js"));
app.use("/js", express.static("./node_modules/jquery/dist"));

//Setear como motor de plantillas ejs
//Va a buscar los archivos que terminen en .ejs
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./views'));
app.use(express.static('./src'));
app.use(express.static('public'));

//Home page
app.get('/', function (req, res) {
    res.render('pages/home');
});

//About page
app.get('/about', function (req, res) {
    res.render('pages/about');
});

//Help page
app.get('/help', function (req, res) {
    res.render('pages/help');
});

//Legal page
app.get('/legal', function (req, res) {
    res.render('pages/legal');
});

//Contact page
app.get('/contact', function (req, res) {
    res.render('pages/contact');
});

//Iniciar servidor
app.listen(8000, () => {
    console.log("Servidor iniciado");
});
