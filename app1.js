const express = require('express');
const app = express();
const mongoose = require('mongoose')
const Post = require('./models/usermodel');

//register view engine
app.set('view engine', 'ejs')

//mongoose connection
const dbURI = 'mongodb+srv://ayush:<password>@cluster0.jawu5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('connected').catch((err) => console.log('some error occured'))
});

app.use(express.static('public'))
app.use(express.urlencoded({ encoded: true }))


app.get('/', (req, res) => {
    res.end('you are index page');
})

app.get('/home', (req, res) => {
    res.render('index');
})

app.get('/posts', (req, res) => {
    res.render('posts');
})

app.get('/new-post', (req, res) => {
    const post = new Post({
        title: 'ayush  1st post',
        content: 'this is just  a little bit post'
    })
    post.save().then((result) => {
        res.send('saved your content');
    }).catch((err) => {
        res.send('error occurdx')
    });
})

app.get('/show-post', (req, res) => {
    Post.find().then((result) => {
            res.render('posts', { title: 'All Posts', posts: result })
        })
        .catch((err) => {
            res.send('error occured')
        })
})

//route variable : that changes its url
app.get('/particularpost/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    Post.findById(id).then((result) => {
            res.render('particularpostfile', { data: result })

        })
        .catch((err) => {
            console.log(err)
            res.send('error')
        })
})

app.delete('/particularpost/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    Post.findByIdAndDelete(id).then((result) => {
            res.json({ redirect: '/show-post' })

        })
        .catch((err) => {
            console.log(err)
            res.send('error')
        })
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/form', (req, res) => {
    res.render('form');
})

app.post('/form', (req, res) => {
    console.log(req.body);
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    })
    post.save().then((result) => {
        res.redirect('show-post');
    }).catch((err) => {
        res.send('error occurdx')
    });
})


app.use('/', (req, res) => {
    res.render('404');
})


app.listen(80, 'localhost', () => {
    console.log('Listening at ')
})