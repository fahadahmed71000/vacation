import Content from '../Content';
import Destination from '../Destination';
import Bagan from '../Bagan';
import Rome from '../Rome';
import Sydney from '../Sydney';
import Review from '../Review';

function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Content />
      <Destination />
      <Bagan />
      <Rome />
      <Sydney />
      <Review />
    </div>
  );
}

export default Home;
