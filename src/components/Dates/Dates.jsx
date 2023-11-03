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
                    <div><span className="outline-none">10.01.2024</span></div>
                </div>
                <div className="flex justify-between w-[24rem]">
                    <p>Paper Acceptance:</p>
                    <p>18.01.2024</p>
                </div>
                <div className="flex justify-between w-[24rem]">
                    <p>Registration:</p>
                    <p>21.01.2024</p>
                </div>
                <div className="flex justify-between w-[24rem]">
                    <p>Conference Date:</p>
                    <p>02.02.2024</p>
                </div>
            </div>
            
        </div>
    );

}

export default Dates;