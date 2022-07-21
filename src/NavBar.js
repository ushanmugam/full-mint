import React from "react";

const NavBar = ({accounts, setAccounts}) => {
    
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if(window.ethereum) {
            // returns all the accounts in the metamask wallet
            const accounts = await window.ethereum.request( {
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);

        }
    }
   return (  
        <div>
            <div> 
                {/* Left side - social media icons*/}
                <div> Facebook </div>
                <div> Twitter </div>
            </div>

            <div>
                <div> About </div>
                <div> Mint </div>
                <div> Team </div>
            </div>

            {/* Connect Button */}
            {isConnected ? (
                <p> Connected </p>
            ):(
                <button onClick={connectAccount}> Connect  </button>
            )}
        </div>
    ) 
};

export default NavBar; 