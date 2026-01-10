export const logOut = async (req, res) => {
  res.clearCookie("auth");
  res.json({ success: true });
};