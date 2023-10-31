import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 mb-10 mt-10 rounded">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative ">
          <img src={person} className=" w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 border-4 border-white rounded-lg absolute right-5 top-1/2 shadow-2xl"
          />
        </div>
        <div className=" lg:w-1/2">
          <h2 className=" text-[#FF3811] text-xl font-bold mb-2">About Us</h2>
          <h4 className="text-4xl font-bold">
            We are qualified <br /> & of experience <br /> in this field
          </h4>
          <p className="py-4 text-[#737373] mr-2">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="pb-4 text-[#737373]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn bg-[#FF3811] hover:bg-[#ff4825] text-white">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
