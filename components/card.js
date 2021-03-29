import utilStyles from '../styles/utils.module.css';
import cardStyles from '../styles/card.module.css'
import Image from 'next/image';

export default function Card({ children, img_path, reverse }) {
  return (
    <div className={`${cardStyles.card}`}>
        {reverse ? (
            <div className={utilStyles.rightifyContent}>
                <div className={`${cardStyles.cardContainer}`}>
                    <h2>Interior Designer</h2>
                    <p>amdoaidn oin odn iddnidoidnindi ndidnodindin idndon idn nd idondi nd i ndi ndo ndi iodi n  ndio ndoi indo nidon d d oindo idnoi ndondin  iodno nidin o dni don odin oidn  diondondionod</p>
                </div>
                <div className={cardStyles.cardImgMargin}>
                    <Image
                        priority
                        src={img_path}
                        className={`${cardStyles.cardImgRight} ${cardStyles.cardImgMargin}`}
                        height={1008}
                        width={420}
                        alt={''}
                    />
                </div>
            </div>
        ) :
            <div className={utilStyles.leftifyContent}>
                <div className={cardStyles.cardImgMargin}>
                    <Image
                        priority
                        src={img_path}
                        className={`${cardStyles.cardImgLeft} ${cardStyles.cardImgMargin}`}
                        height={1008}
                        width={420}
                        alt={''}
                    />
                </div>
                <div className={`${cardStyles.cardContainer}`}>
                    <h2 className={utilStyles.rightifySingleElement}>Interior Designer</h2>
                    <p>amdoaidn oin odn iddnidoidnindi ndidnodindin idndon idn nd idondi nd i ndi ndo ndi iodi n  ndio ndoi indo nidon d d oindo idnoi ndondin  iodno nidin o dni don odin oidn  diondondionod</p>
                </div>
            </div>
        }
    </div>
  );

}