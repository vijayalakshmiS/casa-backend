/**
 * OperatorFunctionController
 *
 * @description :: Server-side logic for managing OperatorFunctions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `OperatorFunctionController.index()`
   */
  index: function (req, res) {
    return res.json({
      todo: 'index() is not implemented yet!'
    });
  },


  /**
   * `OperatorFunctionController.show()`
   */
  show: function (req, res) {
    var id = req.param('id');
    OperatorFunction.findOne(id, function(err, show){
      if(err){
        res.send(err, 400);
      }
      res.json(show);
    });
  },


  /**
   * `OperatorFunctionController.new()`
   */
  new: function (req, res) {
    return res.json({
      todo: 'new() is not implemented yet!'
    });
  },


  /**
   * `OperatorFunctionController.create()`
   */
  create: function (req, res) {
    var param = req.allParams();
    OperatorFunction.create(param, function(err, created){
      if(err){
        res.send(err, 500);
      }
      res.json(created);
    });
  },


  /**
   * `OperatorFunctionController.edit()`
   */
  edit: function (req, res) {
    var id = req.param('id');
    OperatorFunction.findOne(id, function(err, edited){
      if(err){
        res.send(err, 500);
      }
      res.json(edited);
    });
  },


  /**
   * `OperatorFunctionController.update()`
   */
  update: function (req, res) {
   var id = req.param('id');
   var param = req.allParams();
   OperatorFunction.update(id, param, function(err, updated){
    if(err){
      res.send(err, 500);
    }
    res.json(updated);
   });
  },


  /**
   * `OperatorFunctionController.destroy()`
   */
  destroy: function (req, res) {
   var id = req.param('id');
   OperatorFunction.findOne(id, function(err, findOperatorFunction){
    if(err){
      res.send(err, 500);
    }
    console.log(findOperatorFunction);
    OperatorFunction.destroy(id, function(err, destroyed){
      if(err){
        res.send(err, 500);
      }
      res.json(destroyed);
    });
   });
  }
};

