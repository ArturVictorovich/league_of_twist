import { Header } from '@/components/Header/Header';
import { GuessingGame } from '@/components/GuessingGame/GuessingGame';

function Home() {
  return (
    <div className="bg-bg  h-screen w-screen">
      <Header />
      <GuessingGame />
    </div>
  );
}

export default Home;
