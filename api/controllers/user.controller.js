export const test = (req, res) => {
  res.json({ message: "API Is Working" });
  console.log(req.body);
};
