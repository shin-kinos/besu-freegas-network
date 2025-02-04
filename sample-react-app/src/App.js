
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserProvider, Contract } from 'ethers';

// Import smart contract address and ABIs
const contractAddress = '0xa50a51c09a5c451C52BB714527E1974b686D8e77';
const contractAbi     = [
  // Function to say hello
  'function greeting() pure returns ( string memory )',
  // Function to add number
  'function addNumber( int256 number )',
  // Function to get total number
  'function getTotalNumber() view returns ( int256 )',
];

// Function to call greeting()
async function callGreeting() {
  // Blockchain go !!!
  try {
    // Define provider
    const provider = new BrowserProvider( window.ethereum );
    if ( !provider ) { throw new Error( 'Failed to connect via the Ethereum provider!' ); }

    // Create a contract
    const contract = new Contract( contractAddress, contractAbi, provider );
    if ( !contract ) { throw new Error( 'Failed to create contract!' ); }

    // Call greeting() function!
    const result = await contract[ 'greeting' ]();
    if ( !result ) { throw new Error( 'Failed to call greeting() function!' ); }
    alert( `KABOOEY! The Blockchain said "${result}".` );

    // All good ?
  } catch( error ) {
    const errorMessage = `Bah! Something bad happend!: "${error}".`;
    console.error( errorMessage );
    alert( errorMessage );
  }
}

// Function to call addNumber()
async function callAddNumber( inputNumber ) {
  inputNumber = Number( inputNumber );
  // Blockchain go !!!
  try {
    // Define provider
    const provider = new BrowserProvider( window.ethereum );
    if ( !provider ) { throw new Error( 'Failed to connect via the Ethereum provider!' ); }

    // Get signer
    const signer = await provider.getSigner();
    if ( !signer ) { throw new Error( 'Failed to get signer!' ); }

    // Create a contract
    const contract = new Contract( contractAddress, contractAbi, signer );
    if ( !contract ) { throw new Error( 'Failed to create contract!' ); }

    // Call addNumber() function!
    const result = await contract[ 'addNumber' ]( inputNumber );
    if ( !result ) { throw new Error( 'Failed to call greeting() function!' ); }
    alert( `KABOOEY! ${inputNumber} was added!` );

    // All good ?
  } catch( error ) {
    const errorMessage = `Bah! Something bad happend!: "${error}".`;
    console.error( errorMessage );
    alert( errorMessage );
  }
}

// Function to call getTotalNumber()
async function callGetTotalNumber() {
  // Blockchain go !!!
  try {
    // Define provider
    const provider = new BrowserProvider( window.ethereum );
    if ( !provider ) { throw new Error( 'Failed to connect via the Ethereum provider!' ); }

    // Create a contract
    const contract = new Contract( contractAddress, contractAbi, provider );
    if ( !contract ) { throw new Error( 'Failed to create contract!' ); }

    // Call getNumber() function!
    const result = await contract[ 'getTotalNumber' ]();
    if ( !result ) { throw new Error( 'Failed to call greeting() function!' ); }
    alert( `KABOOEY! The total number is ${result}!` );

    // All good ?
  } catch( error ) {
    const errorMessage = `Bah! Something bad happend!: "${error}".`;
    console.error( errorMessage );
    alert( errorMessage );
  }
}

function App() {
  // Input values handling as omajinai
  const [ inputNumber, setNumber ] = useState( '5' );
  const handleInputChange = ( event ) => { setNumber( event.target.value ); };

  // Sent input number to callAddNumber()
  function handleAddNumber() {
    callAddNumber( inputNumber );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo"/>
  
        <div class="container mb-4">
          Sample React App with Besu Private Net!
        </div>
  
        <div class="container mb-4">
          <button
            type    = "button"
            class   = "btn btn-success"
            onClick = { callGreeting }>
            Say hello to Blockchain!
          </button>
        </div>

        <div class="container col-sm-4 mb-4">
          <div class="input-group">
            <input
              type             = "number"
              class            = "form-control"
              placeholder      = "Input number!"
              aria-describedby = "button-addon-1"
              value            = { inputNumber }
              onChange         = { handleInputChange }/>
            <div class="input-group-append" id="button-addon-1">
              <button
                type    = "button"
                class   = "btn btn-outline-primary"
                onClick = { handleAddNumber }>
                Add number!
              </button>
            </div>
          </div>
        </div>

        <div class="container">
          <button
            type    = "button"
            class   = "btn btn-danger"
            onClick = { callGetTotalNumber }>
            Get total number!
          </button>
        </div>

      </header>
    </div>
  );
}

export default App;
