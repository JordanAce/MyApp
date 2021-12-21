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
  // User.findOne({userName: favoritesTitle}, function (err, response) {
  //   if (err) {
  //     console.log(err)
  //   }
  //   if (response) {
  //     console.log("Already saved to favorites")
  //   }
  //   else {
  //     let newFavorite = new Star (favoriteData);
  //     newFavorite.save(function(err, response) {
  //       if (err) {
  //         console.log(err)
  //       } else {
  //         console.log("Saved to favorites")
  //       }
  //     })
  //   }
  // })
}

module.exports.save = save;
