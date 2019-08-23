const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDb = require('./server/models/database');
const router = require('./server/routes');
const swaggerUi = require('swagger-ui-express');
const openApiDocs = require('./server/openapi');

const app = express();

const port = process.env.PORT || 8080;
app.use(express.json());
app.options('*', cors());
app.use(cors({credentials:true, origin: 'http://localhost:3000'}));
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(openApiDocs));
app.use('/api', router);

app.use( (err, req, res, next) => {
    return res.status(500).send(err);
})
app.get('/', (req, res) => {
    res.send('plan before you kkkllld');
})
if(process.env.NODE_ENV == 'production'){
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
    })
}

connectDb()
//listening port
app.listen(port, (err) =>{
    if(err) throw err ;
        console.log(`BucketList listening on port ${port}`);
} );