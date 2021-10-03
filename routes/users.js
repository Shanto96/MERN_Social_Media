const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

//update User

router.put("/:id", async (req, res) => {
  if (req.body.username == req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (error) {
        res.status(500).json("Something Went Wrong");
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).send("Account updated successfully");
    } catch (error) {
      res.status(500).json("Something Went Wrong");
    }
  } else {
    res.status(500).json("You can only update your own account");
  }
});
router.delete("/:id", async (req, res) => {
  if (req.body.userId == req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).send("Account deleted successfully");
    } catch (error) {
      res.status(500).json("Something Went Wrong");
    }
  } else {
    res.status(500).json("You can only delete your own account");
  }
});
router.get("/", async (req, res) => {
   userId =  req.query.userId;
   userName = req.query.userName;
  try {
    const user = userId? await User.findById(userId): await User.findOne({username:userName});

    const { password, updatedAt, createdAt, isAdmin, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json("Something Went Wrong");
  }
});
router.put("/:id/follow", async (req, res) => {
  if (req.body.userId != req.params.id) {
    try {
      const userToFollow = await User.findById(req.params.id);
      const user = await User.findById(req.body.userId);
      console.log(userToFollow.followers.includes(req.body.userId));
      console.log(userToFollow, user);

      if (!userToFollow.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { following: req.params.id } });
        await userToFollow.updateOne({ $push: { followers: req.body.userId } });
        res.status(200).json("You're successfully following this person");
      } else {
        res.status(200).json("You already following this person");
      }
    } catch (error) {
      res.status(500).json("error from here");
    }
  } else {
    res.status(500).json("You can't follow yourself");
  }
});
router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId != req.params.id) {
    try {
      const userToUnFollow = await User.findById(req.params.id);
      const user = await User.findById(req.body.userId);

      if (userToUnFollow.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { following: req.params.id } });
        await userToUnFollow.updateOne({
          $pull: { followers: req.body.userId },
        });
        res.status(200).json("You're successfully unfollowed this person");
      } else {
        res.status(200).json("You're not following this person");
      }
    } catch (error) {
      res.status(500).json("error from here");
    }
  } else {
    res.status(500).json("You can't follow yourself");
  }
});

////////User Friends List
router.get("/friends/:userId" , async(req,res)=>{
  try {
    const user =await  User.findById(req.params.userId);
    const friends =  await Promise.all(
      user.following.map((friend_id)=>{
           return User.findById(friend_id)
      })
    );
    let friendList = [];
     friends.map((friend)=>{
      const  {_id,username,profilePicture}=friend;
      friendList.push({_id,username,profilePicture});
    })
    return res.status(200).json(friendList)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router;
