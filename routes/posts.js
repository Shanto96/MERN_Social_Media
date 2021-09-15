const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

router.post("/", async (req, res) => {
  const newPost = new Post({ ...req.body });

  try {
    const post = await newPost.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json("something went wrong");
  }
});
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      const post = await Post.findOneAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Post has been Updated");
    } else {
      res.status(403).json("You can't update other post");
    }
  } catch (error) {
    res.status(404).json("something went wrong");
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post.userId === req.body.userId) {
      const post = await Post.findOneAndDelete(req.params.id);
      res.status(200).json("Post has been deleted");
    } else {
      res.status(403).json("You can't delete other post");
    }
  } catch (error) {
    res.status(404).json("something went wrong");
  }
});
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post.like.includes(req.body.userId)) {
      let like = await post.updateOne({ $push: { like: req.body.userId } });
      res.status(200).json("Post has been Liked");
    } else {
      let unlike = await post.updateOne({ $pull: { like: req.body.userId } });
      res.status(200).json("Post has been unliked");
    }
  } catch (error) {
    console.log(error);
    res.status(404).json("something went wrong");
  }
});
router.get("/timeline/all/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const userPost = await Post.find({ userId: user._id });
    const friendsPost = await Promise.all(
      user.following.map((friend_id) => {
        console.log(friend_id)
        return Post.find({ userId: friend_id });
        
      })
    );
    console.log(friendsPost);
    res.json(userPost.concat(...friendsPost));                                                       
  } catch (error) {
    console.log({error});
    res.status(404).json("something went wrong");
  }
});

module.exports = router;
