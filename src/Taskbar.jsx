import './Taskbar.css'


function Taskbar() {
    return(
        <div className="taskbar">
            <div className="icons">
                <div className="icons-left">
                    <button id="start-menu" type="button">démarrer</button>
                    
                </div>
                <div className="icons-right">
                    <a href="#up" id="up" className="small-icons"><i className="fas fa-chevron-up"></i></a>
                    <a href="#sound-modal" id="sound" className="small-icons"></a>
                    <a href="#wifi-modal" id="wifi" className="small-icons"></a>
                    <div className="datetime">
                        <span className="hour">17:44</span>
                        <span className="date">25/11/2022</span>
                    </div>
                    <a href="#notifications" id="notifications"><i className="far fa-bell"></i></a>
                    <a href="#" className="clear disabled"></a>
                    <a href="#" id="return"></a>
                </div>
            </div>
        </div>
    )


}

export default Taskbar