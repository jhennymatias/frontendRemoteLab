import React from 'react';
import Menu from '../../components/menu';
import Footer from '../../components/footer';
import './styles.css';
import Webcam from '../../components/webcam';

function Home() {

    const [devices, setDevices] = React.useState([]);

    const handleDevices = React.useCallback(
        mediaDevices =>
            setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
        [setDevices]
    );

    React.useEffect(
        () => {
            navigator.mediaDevices.enumerateDevices().then(handleDevices);
        },
        [handleDevices]
    );
    return (
        <div className="main-student-container">
            <Menu />
            <div className="main-student-content">
                <div className="content-left">
                    <div className="camera">
                        <>
                            {devices.map((device, key) => (
                                <div className="webcam">
                                    <Webcam audio={false} videoConstraints={{ deviceId: device.deviceId }} />   
                                </div>

                            ))}
                        </>
                    </div>
                    <div className="terminal">
                        aqui terminal
                    </div>
                </div>
                <div className="content-right">
                    <button>
                        Electrical Schema FPGA Board
                    </button>
                    <button>
                        FAQ
                    </button>
                    <button>
                        Tutorial to download the bitstream
                    </button>
                    <button>
                        Task description
                    </button>
                    <button>
                        Send Result for Email
                    </button>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default Home;