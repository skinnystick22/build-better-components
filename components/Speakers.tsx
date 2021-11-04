import SpeakersToolbar from "./SpeakersToolbar";
import SpeakersList from "./SpeakersList";
import React, {useState} from "react";

const Speakers = (props: any) => {
    const [showSessions, setShowSessions] = useState(true);

    const {theme, setTheme} = props

    return (
        <React.Fragment>
            <SpeakersToolbar theme={theme} setTheme={setTheme} showSessions={showSessions}
                             setShowSessions={setShowSessions}/>
            <SpeakersList showSessions={showSessions}/>
        </React.Fragment>
    )
}

export default Speakers
