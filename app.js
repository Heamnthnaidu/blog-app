import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import postRoutes from './routes/posts.js'

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.use('/', postRoutes);

app.listen(3000, ()=>{
    console.log("port successfully running at 3000.");
});

