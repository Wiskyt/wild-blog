/*
This file define controller for Post, this class extend from Controller class.
With this extended class, this class obtain all methodd from parent class
*/
'use strict'
// Require parent class
let Controller = require('./Controller');
// Require model (schema) use with this controller
let Post = require('../models/post')

class PostsController extends Controller {


   constructor() {
      super(Post)
   }

   find(req, res, next) {
      this.model.find({ published: true }, (err, documents) => {
         res.json(documents)
      })
   }

   findById(req, res, next) {
      // Get a unique document by request param, this param need to be id
      this.model.findById(req.params.id, (err, document) => {
         if (err)
            next(err)
         else {
            if (document.published) {
               res.json(document)
            } else {
               res.status(403).json({ action: "redirect", to: "posts", message: "Cannot access invisible article" })
            }
         }
      })
   }

   findByBookmarks(req, res, next) {

      let obj = {
         published: true,
         _id: { $in: [req.params.bookmarks] }
      }
      
      this.model.find(obj, (err, documents) => {
         if (err)
            next(err)
         else {
            res.json(documents)
         }
      })
   }

}

module.exports = PostsController
