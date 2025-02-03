
const hardhat = require( 'hardhat' );

async function main() {
    // Deployment for SampleContract
    const contract      = await hardhat.ethers.getContractFactory( 'SampleContract' );
    const result        = await contract.deploy();
    const resultAddress = await result.getAddress();

    await result.waitForDeployment();
    console.log( 'SampleContract deployed to:', resultAddress );
}

main()
    .then( () => process.exit( 0 ) )
        .catch( ( error ) => {
            console.log( error );
            process.exit( 1 );
        } );
