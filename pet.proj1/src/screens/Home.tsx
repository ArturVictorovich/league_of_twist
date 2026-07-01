import { Header } from '@/components/Header/Header';
import { GuessingGame } from '@/components/GuessingGame/GuessingGame';
import { StartGame } from '@/components/GuessingGame/StartGame';

function Home() {
  return (
    <div className="bg-card-bg-secondary relative flex h-dvh w-full flex-col items-center justify-center overflow-hidden">
      <div className="layout bg-app-bg scrollbar-hidden flex h-full min-h-0 w-full flex-col items-center overflow-y-auto px-2 py-4 min-[390px]:px-4 md:max-w-full md:overflow-hidden xl:max-w-[1920px]">
        <Header />

        <main className="flex min-h-0 w-full flex-1 flex-col">
          <StartGame />
          <GuessingGame />
        </main>
      </div>
    </div>
  );
}

export default Home;
