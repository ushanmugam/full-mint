import { useState } from "react";
import { ethers, BigNumber } from "hardhat";
import  wingBat  from "./WingBat.json";

const wingBatAddress = "0xdbb07eaC293Db79b55C2A87260c22c4F7aE04723";

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if(window.ethereum) {
            const provider = new ethers.provider.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                wingBatAddress, 
                wingBat.abi,
                signer,
            );

            try {
                    const response = await contract.mint(BigNumber.from(mintAmount));
                    console.log('response: ', response);
            } catch(err) {
                    console.log('error: ', err);
            }
        }
    }

    const handleDecrement = () => {
        if(mintAmount <= 1 ) return;
        setMintAmount(mintAmount - 1);
    }

    const handleIncrement = () => {
        if(mintAmount >= 3 ) return;
        setMintAmount(mintAmount + 1);
    }

    return (
        <div>
        <div>
            <h1>
                Wingbats
            </h1>
        </div>

        {isConnected ? (
            <div>
                <div>
                    <button onClick={handleDecrement}> - </button>
                    <input type="number" value={mintAmount} />
                    <button onClick={handleIncrement}> + </button> 
                </div>
                <button onClick={handleMint}> Mint Now </button>
            </div>
        ):(
           <p> You must be connected to mint.  </p>
        )}
    </div>
    );
}

export default MainMint;