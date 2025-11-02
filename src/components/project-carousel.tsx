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
		<div className="w-full px-12 lg:px-0 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
			<div className="embla mb-4" ref={emblaRef}>
				<div className="embla__container">
					{Array.from({ length: 10 }).map((_, i) => (
						<div key={i} className="embla__slide">
							<div className="bg-[#262626] p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl lg:rounded-4xl">
								<img
									src={Ss}
									className="rounded-xl sm:rounded-2xl mb-4 w-full h-auto object-cover"
									alt="Project screenshot"
								/>
								<div className="text-lg sm:text-xl lg:text-2xl text-white font-semibold mb-2">
									Pestindo ERP
								</div>
								<div className="mb-4 text-sm sm:text-base text-gray-300">
									PT. Pestindo Mandiri Utama
								</div>
								<button className="flex justify-center items-center w-full py-2.5 sm:py-3 text-[#202020] rounded-xl sm:rounded-2xl bg-white hover:bg-gray-100 transition-colors text-sm sm:text-base font-medium">
									More Details
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="flex gap-2 justify-center">
				<button
					onClick={onPrevButtonClick}
					disabled={prevBtnDisabled}
					className="bg-white rounded-full cursor-pointer text-[#202020] p-2 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
				>
					<ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
				</button>
				<button
					onClick={onNextButtonClick}
					disabled={nextBtnDisabled}
					className="bg-white rounded-full cursor-pointer text-[#202020] p-2 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
				>
					<ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
				</button>
			</div>
		</div>
	);
};

export default ProjectCarousel;
