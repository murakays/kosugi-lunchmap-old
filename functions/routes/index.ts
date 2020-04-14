import * as express from "express";
const router = express.Router();

router.get("/", function(req, res) {
  res.send("test test");
});

export default router;
