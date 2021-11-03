import Image from "next/image";

const Session = (props: any) => {
    const {title, room} = props.session;
    return (
        <span className={"session w-100"}>
                                        {title} <strong>Room: {room.name}</strong>
                                    </span>
    );
}

const Sessions = (props: any) => {
    const {sessions} = props
    return (
        <div className={"sessionBox card h-250"}>
            <Session session={sessions[0]}/>
        </div>
    );
}

const SpeakerImage = (props: any) => {
    const {id, first, last} = props;
    return (
        <div
            className={"speaker-img d-flex flex-row justify-content-center align-items-center h-300"}>
            <Image src={`/images/speaker-${id}.jpg`} alt={`${first} ${last}`}
                   className={"contain-fit"}
                   width={300}
                   height={300}/>
        </div>
    )
}

const SpeakerDemographics = (props: any) => {
    const {first, last, bio, company, twitterHandle} = props
    return (
        <div className={"speaker-info"}>
            <div className={"d-flex justify-content-between mb-3"}>
                <h3 className={"text-truncate w-200"}>
                    {first} {last}
                </h3>
            </div>
            <div>
                <p className={"card-description"}>
                    {bio}
                </p>
                <div className={"social d-flex flex-row mt-4"}>
                    <div className={"company"}>
                        <h5>Company</h5>
                        <h6>{company}</h6>
                    </div>
                    <div className={"twitter"}>
                        <h5>Twitter</h5>
                        <h6>{twitterHandle}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Speaker = (props: any) => {
    const {speaker} = props
    const {id, first, last, sessions} = speaker
    return (
        <div className={"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12"}>
            <div className={"card card-height p-4 mt-4"}>
                <SpeakerImage id={id} first={first} last={last} />
                <SpeakerDemographics {...speaker}/>
                <Sessions sessions={sessions}/>
            </div>
        </div>
    )
}

export default Speaker
