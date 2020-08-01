import React, { useRef, useEffect, useState } from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

const url = (name, wrap = false) =>
    `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
const ParallaxComponent = () => {
    var parallax = useRef(null)
    const [ref, setRef]= useState(null)
    useEffect(() => {
        setRef(parallax)
    }, [ref])
    return (
        <Parallax ref={ref => (parallax = ref)} pages={3}>
            <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
            <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

            <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />

            <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
                <img alt="parallax-view" src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                <img alt="parallax-view" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                <img alt="parallax-view" src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                <img alt="parallax-view" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                <img alt="parallax-view" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                <img alt="parallax-view" src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                <img alt="parallax-view" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                <img alt="parallax-view" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                <img alt="parallax-view" src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                <img alt="parallax-view" src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                <img alt="parallax-view" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                <img alt="parallax-view" src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                <img alt="parallax-view" src={url('earth')} style={{ width: '60%' }} />
            </ParallaxLayer>
            <ParallaxLayer
                offset={0}
                speed={0.1}
                onClick={() => ref.scrollTo(1)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img alt="parallax-view" src={url('server')} style={{ width: '20%' }} />
            </ParallaxLayer>

            <ParallaxLayer
                offset={1}
                speed={0.1}
                onClick={() => ref.scrollTo(2)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img alt="parallax-view" src={url('bash')} style={{ width: '40%' }} />
            </ParallaxLayer>

            <ParallaxLayer
                offset={2}
                speed={-0}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                onClick={() => ref.scrollTo(0)}>
                <img alt="parallax-view" src={url('clients-main')} style={{ width: '40%' }} />
            </ParallaxLayer>
        </Parallax>
    )
}

export default ParallaxComponent