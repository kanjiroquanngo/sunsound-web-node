import express from "express";
import apicontroller from '../controller/apicontroller'

let router = express.Router()


const initAPIRoute = (app) => {
  //   router.get("/", (req, res) => {
  //     res.render("index.ejs");
  //   });
  
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  router.get("/orders", apicontroller.getAllOrders); //method GET -> Read data
  router.post("/createOrders", apicontroller.createOrders); //method POST -> create data
  router.put("/updateOrders", apicontroller.updateOrders); //method PUT -> update data
  router.delete("/deleteOrders/:id", apicontroller.deleteOrders); //method DELETE -> delete data
  router.get("/orders/:id", apicontroller.getOneOrders);
  return app.use("/api/v1", router); 
};


export default initAPIRoute;

//http://localhost:1234/api/v1/orders
//http://localhost:1234/api/v1/createOrders
//http://localhost:1234/api/v1/orders/40