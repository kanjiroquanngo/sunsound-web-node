import pool from "../configs/connectDB";

// let getHomepage = (req, res) => {
//   //logic
//   // simple query
//   let data = [];
//   connection.query("SELECT * FROM `user` ", function (err, results, fields) {
//     results.map((row) => {
//       data.push({
//         id: row.id,
//         fullname: row.name,
//         birthday: row.birthday,
//         gender: row.gender,
//         phone: row.phoneNumber,
//         address: row.address,
//       })
//     });

//   return res.render('index.ejs', { dataUser: data });
//   });
// };

let getHomepage = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM orders");
  return res.render("index.ejs", { dataUser: rows });
}

let getHomepageAuth = async (req, res) => {
  return res.render("homepage.ejs");
}

let getAboutUs =  async (req, res,next) => {
  return res.render("aboutUs.ejs");
}

let getProduct = async (req, res) => {
  return res.render("sanpham.ejs");
}

let getOrder = (req, res) => {
  return res.render("donhang.ejs");
}

let getNews = (req, res) => {
  return res.render("tintuc.ejs");
}

let getDoiTac = (req, res) => {
  return res.render("doitac.ejs");
}

let getFeedback = (req, res) => {
  return res.render("feedback.ejs");
}


let getDetailPage = async (req, res) => {
  let id = req.params.id;
  let user = await pool.execute('SELECT * FROM orders WHERE id = ?', [id]);
  return res.send(JSON.stringify(user[0]));
}
let createNewOrders = async (req, res) => {
let {fullname, amount, customername, phoneNumber, address} = req.body;
  await pool.execute('insert into orders(fullname, amount, customername, phoneNumber, address) values (?, ?, ?, ?, ?)',
  [fullname, amount, customername, phoneNumber, address]);
  return res.redirect('/order');
}
let getEditPage = async (req, res) => {
  let id = req.params.id;
  let [order] = await pool.execute('Select * from orders where id = ? ',[id]);
  return res.render('update.ejs', {dataUser: order[0]});
}
let postUpdateOrder = async (req, res) => { 
  let {fullname, amount, customername, phoneNumber, address, id} = req.body;
  await pool.execute('update orders set fullname= ?, amount= ?, customername=?, phoneNumber=?, address= ? where id= ?',
  [fullname, amount, customername, phoneNumber, address, id]);
  return res.redirect('/fordevelopment');
}
let deleteOrder = async (req, res) =>{
  let orderID = req.body.orderID;
  await pool.execute('delete from orders where id = ? ',[orderID])
  return res.redirect('/fordevelopment');
}

module.exports = {
  getHomepage,
  getOrder,
  getDetailPage,
  createNewOrders,
  deleteOrder,
  getEditPage,
  postUpdateOrder,
  
  getHomepageAuth,
  getAboutUs,
  getProduct,
  getNews,
  getDoiTac,
  getFeedback,
};

