let router = require("express").Router();
let contactController = require("../controller/contactController");

router.get("/",function(req, res){
   // res.send("Hello World");
   res.json({
    status: 'API Its Working',
    message: 'Welcome to RESTHub crafted with love!',
   });
});

router.route("/Contacts")
.get(contactController.index)
.post(contactController.new);

router.route("/Contacts/:contactId")
.get(contactController.getById)
.patch(contactController.update)
.delete(contactController.delete);

module.exports = router; 