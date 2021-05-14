const DivToken = artifacts.require("DivToken");

module.exports = function (deployer) {
  deployer.deploy(DivToken, 1000000);
};