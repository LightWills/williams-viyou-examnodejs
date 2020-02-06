
const express = require('express');
const CakesRoutes = require('./routes/CakeRoute');


const app = express();


const normalizePort = val => {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
  };
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

app.listen(port, () => {
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});
  


// Middleware
//General Midelware 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json());   //active le parsing d'objets JSON dans le body des req


app.get('/', (req,res) => {
  res.send('Welcome to my happy Cakes world');
});
app.use( CakesRoutes);
