export const userComment = async (req, res) => {
  const { productId, comment } = req.body;

  if (!productId || !comment || productId === "" || comment === "") {
    return res
      .status(400)
      .json({ error: "Product ID and comment are required" });
  }

  try {
    // Assuming you have a Comment model to save the comment
    const newComment = new Comment({
      productId,
      userId: req.user._id, // Assuming user ID is available in req.user
      comment,
    });

    await newComment.save();
    res.json({ message: "Comment added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add comment" });
  }
};
