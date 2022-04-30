import styles from "./styles.module.scss";

import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade} from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";

import Slide1 from "../../../../public/bg-slide1.svg";
import Slide2 from "../../../../public/bg-slide2.svg";
import Mochila from "../../../../public/mochila.svg";
import Estrelas from "../../../../public/estrelas.png";
import Pokebola1 from "../../../../public/pokebola1.png";
import Pokebola2 from "../../../../public/pokebola2.png";
import Seta from "../../../../public/arrow-down-white.svg";

export function SectionHero() {
	return (
		<section className={styles.sHero}>
			<Swiper className={styles.slider} modules={[EffectFade]} effect="fade">
				<SwiperSlide>
					<div className={styles.mainArea} style={{backgroundImage: `url(${Slide1.src})`}}>
						<div className={`container ${styles.cont}`}>
							<div className={styles.text}>
								<div className="tag">
									<div className="icon">
										<Image src={Mochila} alt="mochila" />
									</div>
									<span>pokedex</span>
								</div>

								<h1>Who is that Pokémon?</h1>
								<p>The perfect guide for those who want to hunt Pokémons around the world</p>

								<div className={styles.img}>
									<Image src={Estrelas} alt="Estrelas" className={styles.estrelas} />
									<Image src={Pokebola1} alt="Pokebola" className={styles.pokebola} />
								</div>
							</div>

							<div className={styles.areaExplore}>
								<div className={styles.txt}>
									<div className={styles.icon}>
										<Image src={Seta} alt="seta" />
									</div>
									<span>explore</span>
								</div>
								<div className={styles.swiperPagination}></div>
							</div>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className={styles.mainArea} style={{backgroundImage: `url(${Slide2.src})`}}>
						<div className={`container ${styles.cont}`}>
							<div className={styles.text}>
								<div className="tag blue">
									<div className="icon">
										<Image src={Mochila} alt="mochila" />
									</div>
									<span>pokedex</span>
								</div>

								<h1>Who is that Pokémon?</h1>
								<p>The perfect guide for those who want to hunt Pokémons around the world</p>

								<div className={styles.img}>
									<Image src={Estrelas} alt="Estrelas" className={styles.estrelas} />
									<Image src={Pokebola2} alt="Pokebola" className={styles.pokebola} />
								</div>
							</div>

							<div className={styles.areaExplore}>
								<div className={styles.txt}>
									<div className={styles.icon}>
										<Image src={Seta} alt="seta" />
									</div>
									<span>explore</span>
								</div>
								<div className={styles.swiperPagination}></div>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	);
}
