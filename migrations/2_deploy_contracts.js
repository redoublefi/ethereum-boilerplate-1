// const ConvertLib = artifacts.require("ConvertLib");
// const MetaCoin = artifacts.require("MetaCoin");

// module.exports = function (deployer) {
//   deployer.deploy(ConvertLib);
//   deployer.link(ConvertLib, MetaCoin);
//   deployer.deploy(MetaCoin);
// };

const Aggregator = artifacts.require("Aggregator");

module.exports = function (deployer) {
  deployer.deploy(Aggregator);
};
