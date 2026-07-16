import { Header } from '@/components/Header/Header';
import { GuessingGame } from '@/components/GuessingGame/GuessingGame';

import { Footer } from '@/components/Footer/Footer';

function Home() {
  return (
    <div className="bg-card-bg-secondary relative flex min-h-dvh w-full flex-col items-center justify-center overflow-y-auto lg:h-dvh lg:min-h-0 lg:overflow-hidden">
      <div className="layout bg-app-bg scrollbar-hidden flex min-h-0 w-full flex-1 flex-col items-center gap-3 p-2 min-[390px]:max-w-134.5 min-[390px]:px-2 sm:max-w-full sm:px-3 md:max-w-10/12 md:p-3 lg:min-h-0 lg:max-w-full lg:overflow-hidden lg:p-2 xl:max-w-430 xl:p-5 2xl:max-w-[1536px]">
        <Header />

        <main className="relative flex min-h-0 w-full flex-1 flex-col">
          <GuessingGame />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
