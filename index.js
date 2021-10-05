import express from 'express';

const app = express();

//Configuración Bootstrap
app.use("/css", express.static('./node_modules/bootstrap/dist/css'));
app.use("/js", express.static("./node_modules/bootstrap/dist/js"));
app.use("/js", express.static("./node_modules/jquery/dist"));

//Setear como motor de plantillas ejs
//Va a buscar los archivos que terminen en .ejs
app.set('view engine', 'ejs');

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

//Iniciar servidor
app.listen(8000, () => {
    console.log("Servidor iniciado");
});