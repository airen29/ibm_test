function getSolution(req, res) {
  return res.status(200).send({message: 'You passed element: ' + req.params.number});
}

module.exports = {
  getSolution
};
