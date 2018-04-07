var Migrations = artifacts.require("./Migrations.sol");
var Voting = artifacts.require("./Voting.sol");

module.exports = function(deployer) {
    deployer.deploy(Migrations);
    deployer.deploy(Voting, ['Rama', 'Nick', 'Jose'], {gas: 6700000});
};
