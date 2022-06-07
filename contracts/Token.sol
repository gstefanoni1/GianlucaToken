// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// This is the main building block for smart contracts.
contract Token is ERC20{
    // Some string type variables to identify the token.
    // The `public` modifier makes a variable readable from outside the contract.
    string private name = "GianlucaToken";
    string private symbol = "GLT";

    // The fixed amount of tokens stored in an unsigned integer type variable.
    uint256 private totalSupply = 1000000;

    // An address type variable is used to store ethereum accounts.
    address private owner;

    // A mapping is a key/value map. Here we store each account balance.
    mapping(address => uint256) balances;

    
    /**
     * Contract initialization.
     *
     * The `constructor` is executed only once when the contract is created.
     */
    constructor() ERC20(name, symbol) public {
        _mint(msg.sender, totalSupply);
        owner = msg.sender;
    }

    function updateAdmin(address newOwner) external {
        require(msg.sender == owner, 'only admin');
        owner = newOwner;
    }
    function mint(address to, uint amount) external {
        require(msg.sender == owner, 'only admin');
        _mint(to, amount);
    }
    function burn(address tokenOwner, uint amount) external {
        require(msg.sender == owner, 'only admin');
        _burn(tokenOwner, amount);
    }

    ///////First implementation//////
    /**
     * A function to transfer tokens.
     *
     * The `external` modifier makes a function *only* callable from outside
     * the contract.
     */
    /*function transfer(address to, uint256 amount) external {
        console.log("Sender balance is %s tokens", balances[msg.sender]);
        console.log("Trying to send %s tokens to %s", amount, to);

        // Check if the transaction sender has enough tokens.
        // If `require`'s first argument evaluates to `false` then the
        // transaction will revert.
        require(balances[msg.sender] >= amount, "Not enough tokens");

        // Transfer the amount.
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }*/

    /**
     * Read only function to retrieve the token balance of a given account.
     *
     * The `view` modifier indicates that it doesn't modify the contract's
     * state, which allows us to call it without executing a transaction.
     */
    /*function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }*/

}