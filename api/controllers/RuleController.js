/**
 * RuleController
 *
 * @description :: Server-side logic for managing rules
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `RuleController.index()`
   */
  index: function (req, res) {
    return res.json({
      todo: 'index() is not implemented yet!'
    });
  },


  /**
   * `RuleController.show()`
   */
  show: function (req, res) {
    var id = req.param('id');
    Rule.findOne(id).populate('singleConditions').populate('nestedConditions').populate('customerSegments').exec(function (err, showRules) {
      if(err){
        res.send(err,500);
      }
     res.json(showRules);
    });
  },

  /**
   * `RuleController.new()`
   */
  new: function (req, res) {
    return res.json();
  },


  /**
   * `RuleController.create()`
   */
  create: function (req, res) {

   var param = _.extend(req.query || req.params || {},req.body || {});
   console.log(param);
   Rule.create(param,function(err,createRule){
    if(err){
      console.log(err);
      return res.send(err,500);
    }
  
    console.log(createRule);
    console.log(createRule.id);
    var id = createRule.id;
    console.log(id);
    Rule.findOne(id).populate('nestedConditions').populate('singleConditions').populate('customerSegments').exec(function (err, showRules) {
      if(err){
        res.send(err,500);
      }
     console.log(showRules);
     res.json(showRules);
    });
   });
  },


  /**
   * `RuleController.edit()`
   */
  edit: function (req, res) {
    var id = req.param('id');
    Rule.findOne(id,function(err,editRule){
      if(err){
        res.send(err,500);
      }
      res.json('editRule');
    });
  },


  /**
   * `RuleController.update()`
   */
  update: function (req, res) {
    var id = req.param('id');
    var param = req.allParams();
    Rule.update(id, param, function (err, updateRule){
      if(err){
        console.log(err);
        res.send(err,500);
      }
      res.json(updateRule);
    });
  },


  /**
   * `RuleController.destroy()`
   */
  destroy: function (req, res) {
     var id = req.param('id');
     SingleCondition.destroy({ ruleId: id}, function(err, deleteSingleCondition){
      if(err){
        res.send(err,500);
      }
     });
     NestedCondition.destroy({ruleId : id}, function(err, deleteNestedCondition){
        if(err){
          res.send(err,500);
        }
    });

     CustomerSegment.destroy({ ruleId : id}, function(err, deleteCustomerSegment){
      if(err){
        res.send(err, 500);
      }
     });
      Rule.destroy(id,function(err,deleteRule){
      if(err){
        res.send(err,500);
      }
      res.json('deleteRule');
    });
  }
};

