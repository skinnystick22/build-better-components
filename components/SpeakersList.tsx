import Speaker from "./Speaker";
import {data} from "../SpeakerData";
import {useState} from "react";

const SpeakersList = (props: any) => {
    const {showSessions} = props

    const [speakersData, setSpeakersData] = useState(data)

    const onFavoriteToggle = (id: any) => {
        const speakersRecPrevious = speakersData.find((rec) => {
            return rec.id === id
        })

        const speakerRecUpdated = {
            ...speakersRecPrevious,
            favorite: !speakersRecPrevious.favorite
        }

        const speakersDataNew = speakersData.map((rec) => {
            return rec.id === id ? speakerRecUpdated : rec
        })

        setSpeakersData(speakersDataNew)
    }

    return (
        <div className={"container speakers-list"}>
            <div className={"row"}>
                {speakersData.map((speaker: any) => {
                    return (
                        <Speaker key={speaker.id} speaker={speaker} showSessions={showSessions}
                                 onFavoriteToggle={() => {
                                     onFavoriteToggle(speaker.id)
                                 }}/>
                    );
                })}
            </div>
        </div>
    )
}

export default SpeakersList
