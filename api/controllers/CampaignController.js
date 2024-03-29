var Q = require("q");
/**
 * CampaignController
 *
 * @description :: Server-side logic for managing campaigns
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


    show: function(req, res) {

        var temp = [];

        //todo: support pagination, use meaning fullvairable names - plural when its list, avoid e,f,g,show
        Campaign.find().exec(function(err, campaigns) {
            if (err) {
                res.send(err, 500);
            }

            Q.all(_.map(campaigns, campaign => {
                    var id = campaign.id;
                    var result = campaign;
                    return Channel.find().where({ campaignId: id }).populate(['email', 'sms', 'webPush', 'pushNotification']).then(function(campChannel) {
                        if (_.isEmpty(campChannel) == true) {
                                result["Channel"] = [];
                            }
                        return Escalation.findOne().where({ campaignid: id }).then(function(foundEscalation) {
                            if (_.isEmpty(foundEscalation) == true) {
                                result["Channel"] = campChannel;
                                return result;
                            }
                            var escalation = foundEscalation;
                            var id = escalation.id;
                            return Channel.find().where({ escalationId: id })
                                .populate(['email', 'sms', 'webPush', 'pushNotification'])
                                .then(function(escChannel) {
                                        result["Channel"] = campChannel;
                                        escalation["Channel"] = escChannel;
                                        result["Escalation"] = escalation;
                                        return result;
                                });

                        });
                    });
                }))
                .then(function(value) {
                    res.json(value);
                }, function(err) {
                    if (err) {
                        res.send(err, 500);
                    }
                });

        });
    },



    /**
     * `CampaignController.create()`
     */
    create: function(req, res) {
        var param = req.allParams();
        var firstCampaign;

        Campaign.create(param).then(function(createdCampaign) {
                    var id = createdCampaign.id;
                    var result = createdCampaign;
                    console.log("createdCampaign-->",createdCampaign);
                    return Channel.find().where({ campaignId: id }).populate(['email', 'sms', 'webPush', 'pushNotification']).then(function(campChannel) {
                        if (_.isEmpty(campChannel) == true) {
                                result["Channel"] = [];
                            }                                                       
                        return Escalation.findOne().where({ campaignid: id }).then(function(foundEscalation) {
                            if (_.isEmpty(foundEscalation) == true) {
                                result["Channel"] = campChannel;
                                return result;
                            }
                            var escalation = foundEscalation;
                            var id = escalation.id;
                            return Channel.find().where({ escalationId: id })
                                .populate(['email', 'sms', 'webPush', 'pushNotification'])
                                .then(function(escChannel) {
                                        result["Channel"] = campChannel;
                                        escalation["Channel"] = escChannel;
                                        result["Escalation"] = escalation;
                                        return result;
                                });

                        });
                    });
                })
                .then(function(value) {
                    res.json(value);
                }, function(err) {
                    if (err) {
                        res.send(err, 500);
                    }
                });
    },


    /**
     * `CampaignController.edit()`
     */
    edit: function(req, res) {
        var id = req.param('id');
        Campaign.findOne(id, function(err, edit) {
            if (err) {
                res.send(err, 500);
            }
            res.json(edit);
        });
    },


    /**
     * `CampaignController.update()`
     */
    update: function(req, res) {
        var id = req.param('id');
        var param = req.allParams();

        Campaign.update(id, param, function(err, updatedCampaign) {
             Q.all(_.map(updatedCampaign, campaign => {
                    var id = campaign.id;
                    var result = campaign;
                    console.log("updatedCampaign-->",result);
                    return Channel.find().where({ campaignId: id }).populate(['email', 'sms', 'webPush', 'pushNotification']).then(function(campChannel) {
                        if (_.isEmpty(campChannel) == true) {
                                result["Channel"] = [];
                            }                                                       
                                console.log(result);
                        return Escalation.findOne().where({ campaignid: id }).then(function(foundEscalation) {
                            if (_.isEmpty(foundEscalation) == true) {
                                result["Channel"] = campChannel;
                                return result;
                            }
                            var escalation = foundEscalation;
                            var id = escalation.id;
                            return Channel.find().where({ escalationId: id })
                                .populate(['email', 'sms', 'webPush', 'pushNotification'])
                                .then(function(escChannel) {
                                        result["Channel"] = campChannel;
                                        escalation["Channel"] = escChannel;
                                        result["Escalation"] = escalation;
                                        return result;
                                });

                        });
                    });
             })).then(function(value) {
                    console.log("result------>",value);
                    res.json(value);
                }, function(err) {
                    if (err) {
                        res.send(err, 500);
                    }
                });
           
                });
    },


    /**
     * `CampaignController.destroy()`
     */
    destroy: function(req, res) {
        var id = req.param('id');
        Campaign.find(id, function(err, findcampaign) {
            if (err) {
                console.log(err);
                res.send(err, 500);
            }
            Campaign.destroy({ id: id }).exec(function(err, campaigndelete) {
                if (err) return res.send(err, 500);
                    if (err) return res.send(err, 500);
                    Escalation.destroy({ campaignid: id }).exec(function(err, escalationdelete) {
                        if (err) return res.send(err, 500);
                        Channel.destroy({ campaignId: id }).exec(function(err, channeldelete) {
                            if (err) return res.send(err, 500);
                            res.json({ campaigndelete: "delete" });
                        });

                    });
            });
        });

    }
};
