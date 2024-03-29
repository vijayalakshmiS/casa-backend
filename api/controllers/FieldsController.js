/**
 * FieldController
 *
 * @description :: Server-side logic for managing fields
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



    /**
     * `FieldController.new()`
     */
    new: function(req, res) {
        return res.json({
            todo: 'new() is not implemented yet!'
        });
    },


    /**
     * `FieldController.show()`
     */
    show: function(req, res) {
        var id = req.param('id');
        Fields.find().exec(function(err, fieldShow) {
            if (err) return res.send(err, 500);
            res.json({ fieldshow: fieldShow });
        });
    },


    /**
     * `FieldController.create()`
     */
    create: function(req, res) {  
        var params = req.params.all();
        console.log(params);
        Fields.create(params, function(err, fieldCreate) {
            if (err) return res.send(err, 500);
            res.json({ fieldcreate: fieldCreate });
        });
    },


    /**
     * `FieldController.edit()`
     */
    edit: function(req, res) {
        return res.json({
            todo: 'edit() is not implemented yet!'
        });
    },


    /**
     * `FieldController.update()`
     */
    update: function(req, res) {
        var param = req.params.all();
        var id = req.param('id');

        Fields.update(id, param, function(err, fieldUpdate) {
            if (err) return res.send(err, 500);
            res.json({ fieldupdate: fieldUpdate });
        });

    },


    /**
     * `FieldController.destroy()`
     */
    destroy: function(req, res) {
        var id = req.param('id');
        console.log(id);
        Fields.destroy(id, function(err, fieldDestroy) {
            if (err) return res.send(err, 500);
            res.json({ fielddelete: "delete" });
        });
    }
};
