const _ = require('lodash')
const Product = require('../models/product.js')
// function product(app){

// }

const product = app => {
 let _products = []

 //create
 app.post('/api/products',(req,res) => {
     const newProduct = new Product(req.body)
     newProduct.save().then(()=>{
         res.json({'info' : 'Product Created !'})
     }).catch(err => {
         console.log(error)
     })
    //  _products.push(req.body)
    //  res.json({'info' : 'Product Created !'})
 })

 //read
 app.get('/api/products',(req,res) => {
     Product.find().then(products=>{
        res.json(products)
     }).catch(err => {
         console.log(error)
     })
    //  res.send(_products)
 })

//update
app.put('/api/products/:id',(req,res) => {
    Product.update({_id:req.params.id},req.body).then(()=>{
        res.json({'info' : 'Product Updated !'})
    }).catch(err => {
         console.log(error)
     })
    // const index = _.findIndex(_products,{
    //     id: parseInt(req.params.id)
    // })
    // _.merge(_products[index],req.body)
    // res.json({'info' : 'Product Updated !'})
})

//delete
app.delete('/api/products/:id',(req,res)=>{
    Product.remove({_id:req.params.id}).then(()=>{
        res.json({'info' : 'Product Removed !'})
    }).catch(err => {
         console.log(error)
     })
    // _.remove(_products,product => {
    //     return product.id === parseInt(req.params.id)
    // })
    //  res.json({'info' : 'Product Removed !'})
})

}

module.exports = product