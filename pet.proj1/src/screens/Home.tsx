import { Header } from '@/components/Header/Header';
import { GuessingGame } from '@/components/GuessingGame/GuessingGame';

function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen w-screen">
      <div className="absolute inset-0 -z-10 bg-[url('/images/bg.mobile.webp')] bg-cover bg-center"></div>
      <div className="absolute inset-0 -z-9 opacity-30 bg-black"></div>
      <div className="layout w-full md:w-5/6 flex flex-col justify-center items-center">
        <Header />
        <GuessingGame />
      </div>
    </div>
  );
}

export default Home;
