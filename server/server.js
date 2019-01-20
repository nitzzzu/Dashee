const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.post('/emit', (req, res) => {
    let e = req.query.event;
    io.emit(e, req.body);
    res.status(200).send();
});

io.on('connection', () => { 
    console.log('client connected');
    io.emit('dashboard.message', { message: 'hello from server'});
});
server.listen(3000);