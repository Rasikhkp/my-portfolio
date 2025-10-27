import useEmblaCarousel from "embla-carousel-react";
import Ss from "@/assets/ss.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePrevNextButtons } from "@/hooks/use-prev-next-buttons";

const ProjectCarousel = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel();
	const {
		onNextButtonClick,
		onPrevButtonClick,
		nextBtnDisabled,
		prevBtnDisabled,
	} = usePrevNextButtons(emblaApi);

	return (
		<div>
			<div className="w-full pr-20 fixed top-1/2 -translate-y-1/2">
				<div className="embla mb-4" ref={emblaRef}>
					<div className="embla__container">
						{Array.from({ length: 3 }).map((_, i) => (
							<div key={i} className="embla__slide">
								<div className="bg-[#262626] p-4 rounded-4xl">
									<img src={Ss} className="rounded-2xl mb-4" />
									<div className="text-xl text-white">Pestindo ERP</div>
									<div className="mb-4">PT. Pestindo Mandiri Utama</div>

									<button className="flex justify-center items-center w-full py-3 text-[#202020] rounded-2xl bg-white">
										More Details
									</button>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="flex gap-2 ">
					<button
						onClick={onPrevButtonClick}
						disabled={prevBtnDisabled}
						className="bg-white rounded-full text-[#202020] p-2"
					>
						<ChevronLeft />
					</button>
					<button
						onClick={onNextButtonClick}
						disabled={nextBtnDisabled}
						className="bg-white rounded-full text-[#202020] p-2"
					>
						<ChevronRight />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProjectCarousel;
