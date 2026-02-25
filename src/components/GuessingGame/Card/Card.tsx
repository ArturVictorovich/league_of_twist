import { cn } from '@/lib/utils/cn';
import { CHAMPIONS } from '../champion.date';
import { Feature } from './Feature';

export const Card = () => {
  return (
    <div className="flex text-text-primary text-xs flex-row justify-between mb-2">
      {/* {CHAMPIONS.map((champ) => {
        return (
          <>
            <Feature key={champ.id}>
              <div className="absolute z-10">{champ.name}</div>
              <img className="relative" src={champ.image} />
            </Feature>
            <Feature key={champ.id}>{champ.region}</Feature>
            <Feature key={champ.id}>{champ.role}</Feature>
          </>
        );
      })} */}
      <Feature className={cn(`relative`)}>
        <div className="absolute">
          <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg" />
        </div>

        <div className="z-10">Кайса</div>
      </Feature>
      <Feature>иония</Feature>
      <Feature>дальня</Feature>
      <Feature>adc</Feature>
      <Feature>женс</Feature>
      <Feature>2015</Feature>
    </div>
  );
};
