let contact = require('../model/contactModel');

exports.index = function(req, res){
    contact.get(function(err, results){
        if(err){
            res.json({
                status:"Error",
                message: err
            });
        }
        res.json({
            status: "Success",
            message: "Contacts retrieved",
            data: results
        });
    });
};

exports.new = function(req,res){
var cntact = new contact();
cntact.name = req.body.name ? req.body.name : cntact.name;
cntact.email = req.body.email;
cntact.gender = req.body.gender;
cntact.phone = req.body.phone;
cntact._id = req.body.contactId;
cntact.save(function(err){
    if(err){
        res.send(err);
    }
    res.json({
        status:"Success",
        message: "New Contact Saved",
        data: cntact
    });
});
};

exports.getById = function(req,res){
contact.findById(req.body.contactId, function(err,results){
if(err){
    res.send(err);
}
res.json({
    message: "Contact details for Id " + req.body.contactId,
    data: results
});
});
};

exports.update = function(req,res){
contact.findById(req.body.contactId,function(err,result){
if(err) res.send(err);
result.name = req.body.name ? req.body.name : result.name;
result.email = req.body.email;
result.gender = req.body.gender;
result.phone = req.body.phone;
result.save(function(err){
if(err) res.send(err);
res.json({
    message: "Updated contact details for Id " + req.body.contactId,
    data: result
});
});
});
};

exports.delete = function(req,res){
contact.remove({
    _id:req.body.contactId
}, function(err,results){
    if(err) res.send(err);
    res.json({
        message: "Deleted contact details for Id " + req.body.contactId,
        data: results
    });
});
};