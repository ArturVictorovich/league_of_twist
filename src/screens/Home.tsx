import { Header } from '@/components/Header/Header';

import { Footer } from '@/components/Footer/Footer';
import { GameLayout } from '@/components/GuessingGame/GameLayout';

function Home() {
  return (
    <div className="bg-card-bg-secondary relative isolate flex min-h-dvh w-full flex-col items-center overflow-y-auto lg:h-dvh lg:min-h-0 lg:overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/images/bg.mobile.webp')] bg-cover bg-center bg-no-repeat opacity-95 lg:bg-[url('/images/bg.webp')]"></div>
      <div className="pointer-events-none absolute inset-0 z-0 bg-black/60" />
      <div className="bg-app-bg/60 scrollbar-hidden relative z-10 flex min-h-0 w-full flex-1 flex-col items-center gap-3 p-2 backdrop-blur-[1px] min-[390px]:max-w-134.5 min-[390px]:px-2 sm:max-w-full sm:px-3 md:max-w-10/12 md:p-3 lg:min-h-0 lg:max-w-full lg:overflow-hidden lg:p-2 xl:max-w-430 xl:p-5 2xl:max-w-384 2xl:gap-4">
        <Header />

        <main className="relative flex min-h-0 w-full flex-1 flex-col">
          <GameLayout />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
