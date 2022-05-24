import React from 'react';
import './seasonDisplay.css';
const seasonConfig = {
    summer: {
        text: 'Let Hit The Beach',
        setIcons: 'sun'
    },
    winter: {
        text: 'Burr,it is Chilly',
        setIcons: 'showFlake'
    }
}
const getSeason = (lat, month) => {

    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }
    else {
        return lat < 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth());
    const { text, setIcons } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`${setIcons} icon icon-left massive`} />
            <h1>{text}</h1>
            <i className={`${setIcons} icon icon-right massive`} />
        </div>

    )
}

export default SeasonDisplay