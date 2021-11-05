import ClosedFeedback from "./ClosedFeedback";
import OpenForFeedback from "./OpenForFeedback";

const Feedback = () => {

  return (
    <div className='pb-10 md:pb-20 bg-gray-100 sm:px-6 lg:w-4/5 mx-auto px-4 lg:px-0 pt-5'>
      <OpenForFeedback />
      <ClosedFeedback />
    </div>
  );
}

export default Feedback;