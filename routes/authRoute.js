import express from 'express';

import { registerController, loginController, testController, forgetPasswordController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController } from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
// import { cors } from 'cors';

const router = express.Router();

router.post('/register', registerController)

//  LOGIN /
router.post("/login", loginController)

// forgetpassword post

router.post("/forget-password", forgetPasswordController);



// text router 
router.get("/test", requireSignIn, isAdmin, testController)

// router.get('/user-auth', requireSignIn, (res, req) => {
//   res.status(200).send({ ok: true })
// });


router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// admine route 
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});



//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router