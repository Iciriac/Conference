import Heading from "../General/Heading";
import Title from "../General/Title";

const Dates = () => {

      return (
        <div>
            <Heading />
            <Title title="Important Dates"/>
            <div className="my-[3rem] px-[5rem] flex flex-col items-center leading-[2rem] text-[1.2rem]">
            
                <div className="flex justify-between w-[24rem]">
                    <p>Paper Submission:</p>
                    {/* <s>20.01.2024</s> */}
                    <div><span className="outline-none">10.01.2025</span></div>
                </div>
                <div className="flex justify-between w-[24rem]">
                    <p>Paper Acceptance:</p>
                    {/* <s>03.02.2024</s> */}
                    <p>20.01.2025</p>
                </div>
                <div className="flex justify-between w-[24rem]">
                    <p>Registration:</p>
                    {/* <s>05.02.2024</s> */}
                    <p>02.02.205</p>
                </div>
                <div className="flex justify-between w-[24rem]">
                    <p>Conference Date:</p>
                    <p>28.02.2025</p>
                </div>
            </div>
            
        </div>
    );

}

export default Dates;