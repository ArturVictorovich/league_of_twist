import { Header } from '@/components/Header/Header';
import { GuessingGame } from '@/components/GuessingGame/GuessingGame';

function Home() {
  return (
    <div className="relative  flex flex-col justify-center items-center h-dvh overflow-hidden w-full ">
      <div className="absolute inset-0 -z-10 bg-[url('/images/bg.mobile.webp')] bg-cover bg-center"></div>
      <div className="absolute inset-0 -z-9 opacity-30 bg-black"></div>
      <div className="layout  py-4 px-2 w-full bg-app-bg h-full flex flex-col  items-center">
        <Header />
        <GuessingGame />
      </div>
    </div>
  );
}

export default Home;
