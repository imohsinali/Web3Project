const main =async ()=>{
    const waveContractFactory =await hre.ethers.getContractFactory("WavePortal")
    const waveContract=await waveContractFactory.deploy()
    await waveContract.deployed();
    console.log('Contract deployed to:',waveContract.address);
}

const runMain=async ()=>{
    try {
        await main()
    } catch (error) {
       console.warn(error)
       process.exit(1) 
        
    }
}

runMain()