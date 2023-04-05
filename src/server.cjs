const jsonServer = require('json-server');
const path = require('path')
const server = jsonServer.create()
const jwt = require('jsonwebtoken');
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
const db = require('./db.json')
// Set default middlewares (logger, static, cors and no-cache) 
server.use(middlewares)
server.use(jsonServer.bodyParser)
// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})
  server.get('/employees',(req, res, next)=>{
    next();
  })
  
  function filterObject(obj, param) {
    return Object.fromEntries(Object.entries(obj).
      filter(([key, val])=>val.email==param?true:false));
  }
  
  server.post('/login',(req, res)=>{
    console.log(req.body);
    console.log(
      filterObject(db.employees,req.body.email)
    )
   let employee = Object.values(filterObject(db.employees,req.body.email))[0];
   console.log(employee)
   if(!employee){
    res.status(404).send({
      message:'user not found'
    }
      );
   }
   if(employee.password==req.body.password){
    let token = jwt.sign({ user:employee }, 'shhhhh');
      res.json(token);
      console.log("match")
      
   }
   else{
    console.log("not match")
      res.status(404).send(
        {
     message: 'This is an error!'
  }
      )
   }
  })

// Use default router
server.use(router)
server.listen(8080, () => {
  console.log('JSON Server is running')
})
