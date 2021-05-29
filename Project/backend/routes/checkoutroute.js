const express1=require('express');

const CheckoutRouter=express1.Router();

const Checkout=require('../Models/checkout');

CheckoutRouter.route('/getdetails').get((req,res,next) => {
    Checkout.find({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

CheckoutRouter.route('/adduser').post((req,res,next) => {
    Checkout.create(req.body)
    .then((resp) => {
        console.log('new responce ', resp);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

CheckoutRouter.route('/getuser/:email/:password').get((req,res,next) => {
    Checkout.find({ email: req.params.email, password : req.params.password})
    .then((resp) => {
        if(resp.length==0)
        {
            const err=new Error('Invalid details');
            res.statusCode = 404;
            res.setHeader('Content-Type', 'application/json');
            res.json(err);
            return next(err);
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        return res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

// detailsRouter.route('/update/:email').put((req,res,next) => {
//     detail.findOneAndUpdate({email : req.params.email}, {
//         $set: req.body
//     }, { new: true })
//     .then((resp) => {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'application/json');
//         res.json(resp);
//     }, (err) => next(err))
//     .catch((err) => next(err));
// });


module.exports = CheckoutRouter;