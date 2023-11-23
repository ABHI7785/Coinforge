const express=require('express');
const Login = require('../Controller/Login');
const SignUp = require('../Controller/Signup');
const Createuser = require('../Controller/Createuser');
const Createcrypto = require('../Controller/Createcoin');
const getitems = require('../Controller/Getcrypto');

const createque = require('../Controller/Createquery');
const Createadminn = require('../Controller/Createadmin');
const query=require("../Controller/Getquery");
const AdminSignUp = require('../Controller/Admin');
const adminloginn = require('../Controller/Adminlogin');
const crptocoins = require('../Controller/Coinschema1');
const { Buycoin } = require('../Controller/Buyview');
const Createcart = require('../Controller/CartCreate');
const { getcart, Viewcart, Deletecart } = require('../Controller/Getcart');
const { createtrade, getprofile, DeleteTrade, UpdateTrade, getsingleprofile } = require('../Controller/Tradecrud');






const router=express.Router();
// const middleware=[protect]
router.route('/token').post(Createuser)

// router.route('/jwt').get(middleware,Createuser)
router.route("/loginn").post(Login)





router.route("/signupp").post(SignUp)


router.route("/Createcoin").post(Createcrypto)
router.route('/getcrypto').get(getitems)

router.route('/createquery').post(createque)
router.route('/getquery').get(query.getquery)
router.route('/createadmin').post(AdminSignUp)
router.route('/adminloginn').post(adminloginn)

router.route('/Buyview/:id').get(Buycoin)
router.route('/viewquery/:id').get(query.Viewquery)
router.route('/Deletequery/:id').delete(query.Deletequery)
router.route('/createcart').post(Createcart)
router.route('/getcart').get(getcart)
router.route('/viewcartt/:id').get(Viewcart)
router.route('/deletecartt/:id').delete(Deletecart)

//Trade Routes
router.route('/createprofile').post(createtrade)
router.route('/getprofile').get(getprofile)
router.route('/deleteprofile/:id').delete(DeleteTrade)
router.route('/updateprofile/:id').put(UpdateTrade)
router.route('/getsingleprofile/:id').get(getsingleprofile)






module.exports=router
