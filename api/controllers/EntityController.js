/**
 * EntityController
 *
 * @description :: Server-side logic for managing entities
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    /**
     * `EntityController.new()`
     */
    new: function(req, res) {
        return res.json({
            todo: 'new() is not implemented yet!'
        });
    },


    /**
     * `EntityController.show()`
     */
    show: function(req, res) {      
        var id = req.param('id');
        Entity.find().populate('fields').exec(function(err, entityShow) {
            if (err) return res.send(err, 500);
            res.json({ entityshow: entityShow });
        });
    },


    /**
     * `EntityController.create()`
     */
    create: function(req, res) {
        var params = req.params.all();
        // console.log(params);
        Entity.create(params, function(err, create) {
            if (err) return res.send(err, 500)
            var id = create.id;
            Entity.findOne({ id: id }).populate('fields').exec(function(err, entityCreate) {
                if (err) return res.send(err, 500);
                // console.log(create);
                res.json(entityCreate);
            });
        });
    },


    /**
     * `EntityController.edit()`
     */
    edit: function(req, res) {
        return res.json({
            todo: 'edit() is not implemented yet!'
        });
    },


    /**
     * `EntityController.update()`
     */
    update: function(req, res) {
        var params = req.params.all();
        var id = req.param('id');
        Entity.update(id, params, function(err, entityUpdate) {
            if (err) return res.send(err, 500);
            Fields.destroy({ entityId: null }).exec(function(err, fieldDestroy) {
                if (err) return res.send(err, 500);
                console.log(fieldDestroy);
            });
            Entity.find({ id: id }).populate('fields').exec(function(err, update) {
                if (err) return res.send(err, 500);
                res.json({ entityupdate: update });
            });
        });
    },
    /**
     * `EntityController.destroy()`
     */
    destroy: function(req, res) {
        var id = req.param('id');
        Entity.find(id, function(err, destroy) {
            if (err) return res.send(err, 500);
            Entity.destroy({ id: id }).exec(function(err, entityDelete) {
                if (err) return res.send(err, 500);
                Fields.destroy({ entityId: id }).exec(function(err, fieldsDelete) {
                    if (err) return res.send(err, 500);
                    res.json({ entitydelete: "delete" });
                });
            });
        });
    }
};
