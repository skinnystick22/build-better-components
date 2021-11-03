import Speaker from "./Speaker";

const SpeakersList = (props: any) => {
    const {data} = props

    return (
        <div className={"container speakers-list"}>
            <div className={"row"}>
                {data.map((speaker: any) => {
                    return (
                        <Speaker key={speaker.id} speaker={speaker}/>
                    );
                })}
            </div>
        </div>
    )
}

export default SpeakersList
