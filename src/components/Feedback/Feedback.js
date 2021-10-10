import ClosedFeedback from "./ClosedFeedback";
import OpenForFeedback from "./OpenForFeedback";

const Feedback = () => {

  return (
    <div className='pb-10 bg-gray-100 sm:px-6 lg:px-52 px-4'>
      <OpenForFeedback />
      <ClosedFeedback />
    </div>
  );
}

export default Feedback;