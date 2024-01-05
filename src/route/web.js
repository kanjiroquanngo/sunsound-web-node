import express, { Router } from "express";
import homeController from "../controller/homeController";
let router = express.Router();

const initWebRoute = (app) => {
  //   router.get("/", (req, res) => {
  //     res.render("index.ejs");
  //   });

  router.get("/", homeController.getHomepageAuth);
  router.get("/aboutUs", homeController.getAboutUs);
  router.get("/product",homeController.getProduct);
  router.get("/news", homeController.getNews);
  router.get("/partners", homeController.getDoiTac);
  router.get("/feedback", homeController.getFeedback);

  router.get("/fordevelopment", homeController.getHomepage);
  router.get("/order", homeController.getOrder);
  router.get("/detail/orders/:id",homeController.getDetailPage);
  router.post("/createNewOrders", homeController.createNewOrders);
  router.post('/delete-order', homeController.deleteOrder);
  router.post('/updateOrder',homeController.postUpdateOrder)
  router.get('/edit-order/:id', homeController.getEditPage);
  
  return app.use("/", router);
};

export default initWebRoute;
