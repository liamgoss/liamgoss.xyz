// Import Assets
import React, { useState, useEffect, useRef } from 'react';
import arbitrade from '../assets/Arbitrade.png';
import usnscc from '../assets/USNSCC.png';
import Modal from './Modal/Modal';
import usb2can from '../assets/USB2CAN_top.jpg';

const Projects = () => {
    const [height, setHeight] = useState(0)
    const ref = useRef(null)

    useEffect(() => {setHeight(ref.current.clientHeight)})

    var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div ref={ref} className="projects__card" style={{ height: 'auto' }}>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <h3>Arbitrade</h3>
                </div>

                    
                    <img src={arbitrade} alt="Arbitrade" />
                    <p>A decentralized cryptocurrency trading platform designed for risk-free arbitrage trading using flashloans!</p>

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
                    <p>Python code written to utilize the Korlan usb2can hardware to send and receive data over the can-bus on a 2008 Nissan 350z
                    </p>
                    
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
                    <p>Built and maintained the website for the United States Naval Sea Cadet Corps Kings County Squadron</p>

                    
                </div>
            </div>
            
        </section>
    );
}

export default Projects;