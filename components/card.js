import utilStyles from '../styles/utils.module.css';
import cardStyles from '../styles/card.module.css'
import Image from 'next/image';

export default function Card({ children, img_path, reverse, card_title, card_txt, card_width, card_height }) {
  return (
    <div className={`${cardStyles.card}`}>
        {reverse ? (
            <div className={utilStyles.rightifyContent}>
                <div className={`${cardStyles.cardContainer}`}>
                    <h2>{card_title}</h2>
                    <p>{card_txt}</p>
                </div>
                <div className={cardStyles.cardImgMargin}>
                    <Image
                        priority
                        src={img_path}
                        className={`${cardStyles.cardImgRight} ${cardStyles.cardImgMargin}`}
                        height={card_height}
                        width={card_width}
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
                        height={card_height}
                        width={card_width}
                        alt={''}
                    />
                </div>
                <div className={`${cardStyles.cardContainer}`}>
                    <h2 className={utilStyles.rightifySingleElement}>{card_title}</h2>
                    <p>{card_txt}</p>
                </div>
            </div>
        }
    </div>
  );

}