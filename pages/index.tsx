import {data} from "../SpeakerData";
import Speaker from "../components/Speaker";

const IndexPage = () => {
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
};

export default IndexPage;
