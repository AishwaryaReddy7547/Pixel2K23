import React from 'react';
import './Event.css';

function Event() {
    return (
        <div className="boxlayout">
            <div className="boxlayoutinside">
                <img src="images/chess.jpg" onClick="" alt="Chess Event" />
            </div>
            <div className="boxlayoutinside">
                <img src="images/hackathon.jpg" onClick="" alt="Hackathon Event" />
            </div>
            <div className="boxlayoutinside">
                <img src="images/paperpresentation.jpg" onClick="" alt="Paper Presentation Event" />
            </div>
            <div className="boxlayoutinside">
                <img src="images/photography.jpg" onClick="" alt="Photography Event" />
            </div>
            <div className="boxlayoutinside">
                <img src="images/freefire.jpg" onClick="" alt="Freefire Event" />
            </div>
            <div className="boxlayoutinside">
                <img src="images/chess.jpg" onClick="" alt="Chess Event" />
            </div>
        </div>
    );
}

export default Event;
