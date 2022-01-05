const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/appUsers');

const userSchema = new mongoose.Schema ({
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const User = mongoose.model('appUsers', userSchema);

const save = (user) => {
  console.log('Inside Save Function', user);
  User.findOne({userName: user.userName}, function (err, response) {
    if (err) {
      console.log(err)
    }
    if (response) {
      console.log("Already saved to users")
      return response;
    }
    else {
      let newUser = new User (user);
      newUser.save(function(err, response) {
        if (err) {
          console.log('Error Saving to Database', err)
        } else {
          console.log("Saved to users")
        }
      })
    }
  })
}

module.exports.save = save;
