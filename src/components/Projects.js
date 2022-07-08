// Import Assets
import React, { useState, useEffect, useRef } from 'react';
import arbitrade from '../assets/Arbitrade.png';
import usnscc from '../assets/USNSCC.png';
import Modal from './Modal/Modal';
import usb2can from '../assets/USB2CAN_top.jpg';
import ethCircuit from '../assets/Ethereum_Circuits.jpg';
import tfLogo from "../assets/Tensorflow_logo.png";
import ipfsLogo from "../assets/ipfs.png";

const Projects = () => {
    const [height, setHeight] = useState(0)
    const ref = useRef(null)
    useEffect(() => {setHeight(ref.current.clientHeight)})

    
    return (
        <>
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div ref={ref} className="projects__card" style={{ height: 'auto' }}>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <h3>Arbitrade</h3>
                </div>

                    
                    <img src={arbitrade} alt="Arbitrade" />
                    <center>A decentralized cryptocurrency trading platform designed for risk-free arbitrage trading using flashloans!</center>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        
                    }}><Modal></Modal></div>
                    
                </div>

                <div ref={ref} className="projects__card" style={{ height: 'auto' }}>
                    <div style={{display: 'flex',  textAlign: 'center', alignItems:'center'}}>
                        <h3>Nissan CAN Bus Reverse Engineering</h3>
                    </div>
                    <img src={usb2can} alt="Nissan CAN Bus Reverse Engineering" />
                    <center>Python code written to utilize the Korlan usb2can hardware to send and receive data over the can-bus on a 2008 Nissan 350z
                    </center>
                    
                    <a href="https://github.com/liamgoss/nissan_ecu_hacking" target="_blank" className="button" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        
                    }}>Code</a>    
                        
                    
                    
                </div>

                <div className="projects__card" style={{ height: 'auto' }} >
                    

                    <div style={{display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center'}}><h3>Nonprofit Web Development</h3>
                    </div>
                    
                    <img src={usnscc} alt="Nonprofit Web Development" />
                    <center>Built and maintained the website for the United States Naval Sea Cadet Corps Kings County Squadron</center>
                    <br></br>
                    
                </div>

                <div className="projects__card" style={{ height: 'auto' }} >
                    

                    <div style={{display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center'}}><h3>Ethereum Wallet Private Key Generator</h3>
                    </div>
                    
                    <img src={ethCircuit} alt="Ethereum circuit logo" />
                    <center>This code is also useful for creating your own Ethereum mainnet compatible address and private key without the need for a third party like Metamask! This code is for educational purposes only</center>
                    <a href="https://github.com/liamgoss/Ethereum-Wallet-Private-Key-Generation" target="_blank" className="button" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        
                    }}>Code</a> 
                    
                </div>

                <div className="projects__card" style={{ height: 'auto' }} >
                    

                    <div style={{display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center'}}><h3>Neural Networks and Machine Learning</h3>
                    </div>
                    
                    <img src={tfLogo} alt="Tensorflow logo" />
                    <center>A random compilation of Machine Learning and Neural Networks I have worked on (most will include Tensorflow, Keras, etc.)

Notable projects present here: Flappy Bird AI, SMS Spam Detection, and ReCaptcha V2 image identificaiton (WIP), art producing GAN (WIP)</center>
                    <a href="https://github.com/liamgoss/neuralNetworks" target="_blank" className="button" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        
                    }}>Code</a> 
                    
                </div>


                <div className="projects__card" style={{ height: 'auto' }} >
                    

                    <div style={{display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center'}}><h3>This website, liamgoss.xyz, is hosted using IPFS</h3>
                    </div>
                    
                    <img src={ipfsLogo} alt="IPFS logo" />
                    <center>This website was made using React.js in combination with Fleek.co to completely host and store this site using IPFS!</center>
                    <a href="https://github.com/liamgoss/neuralNetworks" target="_blank" className="button" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        
                    }}>Code</a> 
                    
                </div>

            </div>

            
        </section>
        </>
    );
}

export default Projects;