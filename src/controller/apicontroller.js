import pool from "../configs/connectDB";

let getAllOrders = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM orders");
  return res.status(200).json({
    message: "ok",
    data: rows,
  });
};

let createOrders = async (req, res) => {
  let { fullname, amount, customername, phoneNumber, address } = req.body;
  if (!fullname || !amount || !customername || !phoneNumber || !address) {
    return res.status(400).json({
      message: "Missing required params",
    });
  }
  await pool.execute(
    "insert into orders(fullname, amount, customername, phoneNumber, address) values (?, ?, ?, ?, ?)",
    [fullname, amount, customername, phoneNumber, address]
  );

  return res.status(200).json({
    message: "ok",
  });
};

let updateOrders = async (req, res) => {
  let { fullname, amount, customername, phoneNumber, address, id } = req.body;
  if (
    !fullname ||
    !amount ||
    !customername ||
    !phoneNumber ||
    !address ||
    !id
  ) {
    return res.status(400).json({
      message: "Missing required params",
    });
  }
  await pool.execute(
    "update orders set fullname= ?, amount= ?, customername=?, phoneNumber=?, address= ? where id= ?",
    [fullname, amount, customername, phoneNumber, address, id]
  );
  return res.status(200).json({
    message: "ok",
  });
};

let deleteOrders = async (req, res) => {
    let orderID = req.params.id;
    if (!orderID) {
        return res.status(400).json({
          message: "Missing required params",
        });
      }
    await pool.execute('delete from orders where id = ? ',[orderID])
    return res.status(200).json({
        message: "ok",
      });
};

let getOneOrders = async (req, res) => {
  let ordersID = req.params.id;
  if (!ordersID) {
      return res.status(400).json({
        message: "Missing required params",
      });
    }
  const [rows, fields] = await pool.execute('select * from orders where id = ? ',[ordersID])
  return res.json(rows);
};
module.exports = {
  getAllOrders,
  createOrders,
  updateOrders,
  deleteOrders,
  getOneOrders,
};

