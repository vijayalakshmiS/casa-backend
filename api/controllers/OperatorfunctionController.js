/**
 * OperatorfunctionController
 *
 * @description :: Server-side logic for managing operatorfunctions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `OperatorfunctionController.index()`
   */
  index: function (req, res) {
    return res.json({
      todo: 'index() is not implemented yet!'
    });
  },


  /**
   * `OperatorfunctionController.show()`
   */
  show: function (req, res) {
    var id = req.param('id');
    Operatorfunction.findOne(id, function(err, show){
      if(err){
        res.send(err, 400);
      }
      console.log(show);
      res.json(show);
    });
  },


  /**
   * `OperatorfunctionController.new()`
   */
  new: function (req, res) {
    return res.json({
      todo: 'new() is not implemented yet!'
    });
  },


  /**
   * `OperatorfunctionController.create()`
   */
  create: function (req, res) {
    var param = req.allParams();
    console.log(param);
    Operatorfunction.create(param, function(err, created){
      if(err){
        res.send(err, 500);
      }
      console.log(created);
      res.json(created);
    });
  },


  /**
   * `OperatorfunctionController.edit()`
   */
  edit: function (req, res) {
    var id = req.param('id');
    Operatorfunction.findOne(id, function(err, edited){
      if(err){
        res.send(err, 500);
      }
      console.log(edited);
      res.json(edited);
    });
  },


  /**
   * `OperatorfunctionController.update()`
   */
  update: function (req, res) {
   var id = req.param('id');
   var param = req.allParams();
   Operatorfunction.update(id, param, function(err, updated){
    if(err){
      res.send(err, 500);
    }
    console.log(updated);
    res.json(updated);
   });
  },


  /**
   * `OperatorfunctionController.destroy()`
   */
  destroy: function (req, res) {
   var id = req.param('id');
   Operatorfunction.findOne(id, function(err, findoperator){
    if(err){
      res.send(err, 500);
    }
    console.log(findoperator);
    Operatorfunction.destroy(id, function(err, destroyed){
      if(err){
        res.send(err, 500);
      }
      console.log(destroyed);
      res.json(destroyed);
    });
   });
  }
};

