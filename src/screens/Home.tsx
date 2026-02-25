import { Header } from '@/components/Header/Header';
import { GuessingGame } from '@/components/GuessingGame/GuessingGame';
import { CardList } from '@/components/GuessingGame/CardList';
function Home() {
  return (
    <div className="bg-bg h-screen w-screen">
      <Header />
      <GuessingGame />
      <CardList />
    </div>
  );
}

export default Home;
