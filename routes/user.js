var express = require('express');
var router = express.Router();
var User=require('../models/User');

router.get('/:userId?',function(req,res,next){
  if(req.params.userId){
    User.getUserById(req.params.userId,function(err,rows){
      if(err){
          res.json(err);
      }else{
          res.json(rows);
      }
    });
  }else{
    User.getAllUsers(function(err,rows){
      if(err){
          res.json(err);
      }else{
          res.json(rows);
      }
    });
  }
});

router.post('/',function(req,res,next){
  User.addUser(req.body,function(err,count){
    if(err){
        res.json(err);
    }else{
            res.json(req.body);//or return count for 1 & 0
    }
  });
});

router.post('/:userId',function(req,res,next){
  User.deleteAll(req.body,function(err,count){
    if(err){
      res.json(err);
    }else{
      res.json(count);
    }
  });
});

router.delete('/:userId',function(req,res,next){
  User.deleteUser(req.params.userId,function(err,count){
    if(err){
        res.json(err);
    }else{
        res.json(count);
    }
  });
});

router.put('/:userId',function(req,res,next){
  User.updateUser(req.params.userId,req.body,function(err,rows){
    if(err){
      res.json(err);
    }else{
      res.json(rows);
    }
  });
});

module.exports=router;
