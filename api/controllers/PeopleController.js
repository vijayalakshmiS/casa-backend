/**
 * PeopleController
 *
 * @description :: Server-side logic for managing people
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  /**
   * `PeopleController.create()`
   */
  create: function (req, res) {
    console.log('people create')
    console.log(req.params.all())
   People.create(req.params.all(),function(err,created){
    if (err) {
      return res.send(err,500);
    }
     People.findOne(created.id).populate('groups').exec(function(err,findVal){
      if (err) {
        return res.send(err,500)
      }
      res.json(findVal);
    });
   });
  },

  /**
   * `PeopleController.show()`
   */
  show: function (req, res) {
    People.find().populate('groups').exec(function(err,values){
      if (err) {
        return res.send(err,500)
      }
      res.json(values)
    });
  },


  /**
   * `PeopleController.update()`
   */
  update: function (req, res) {
    console.log('people update')
    console.log(req.params.all())
    // People.findOne(req.param('id')).exec(function(err, p) {
    //   if (err) {
    //     return res.send(err,500);
    //   }
    //   p.groups.add(req.param('groups'));
    //   p.save(function(err) {
    //     if (err) 
    //     return res.send(err,500);
    //        People.findOne({ id: req.param('id') }).populate('groups').exec(function(err, values){
    //   if (err) {
    //     return res.send(err,500)
    //   }
    //   console.log('values')
    //   console.log(values)
    //   res.json(values);
      
    // });
    //   });
    // });
    People.update(req.param('id'),req.params.all(),function(err,updated){
      if (err) {
        return res.send(err,500);
      }
      console.log(updated)
       People.findOne(req.param('id')).populate('groups').exec(function(err,findVal){
      if (err) {
        return res.send(err,500)
      }
      console.log('findVal')
      console.log(findVal)
      res.json(findVal);
    });
       });

    //   People.findOne({ id: req.param('id') }).populate('groups').exec(function(err, values){
    //   if (err) {
    //     return res.send(err,500)
    //   }
      
    // });
      
   
  },


  /**
   * `PeopleController.destroy()`
   */
  destroy: function (req, res) {
    People.destroy(req.param('id'),function(err,destroy){
      if (err) {
        return res.send(err,500);
      }
      res.json("deleted");
    });
  }
};

