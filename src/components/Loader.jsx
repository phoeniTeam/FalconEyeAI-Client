import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Loader = ({ size = 80, color = '#4a4a4a', duration = 2 }) => {
    const [progress, setProgress] = useState(0);

    
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev < 100 ? prev + 1 : 0)); 
        }, (duration * 1000) / 100);

        return () => clearInterval(interval);
    }, [duration]);

    return (
        <div style={styles.spinnerWrapper}>
            <div style={{ width: `${size}px`, height: `${size}px` }}>
                <CircularProgressbar
                    value={progress}
                    text={''} 
                    styles={buildStyles({
                        pathColor: color,
                        trailColor: '#2c2c2c', 
                        pathTransitionDuration: duration / 2,
                        pathTransition: 'stroke-dashoffset 0.5s ease 0s',
                        strokeLinecap: 'round', 
                    })}
                />
            </div>
        </div>
    );
};

const styles = {
    spinnerWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
       
    },
};

export default Loader;
