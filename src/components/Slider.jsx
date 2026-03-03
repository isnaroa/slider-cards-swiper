import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Slider({ productos }) {
  return (
    <div className="w-full mx-auto py-20 relative z-10 md:px-16">
      <Swiper
        modules={[Navigation, Pagination]}
        grabCursor={true}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        className="pb-16!"
      >
        {productos.map((producto) => (
          <SwiperSlide key={producto.id} className="max-w-[380px] h-auto!">
            <div className="group relative h-full flex p-px rounded-2xl bg-linear-to-br from-white/25 to-transparent hover:bg-indigo-500 hover:shadow-[0_0_50px_-12px_rgba(79,70,229,0.6)] transition-all duration-500">
              <div className="bg-[#0a0a1a] rounded-2xl overflow-hidden flex flex-col w-full h-full border border-white/5">
                <div className="relative aspect-5/4 p-4">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-[#1a1a2e]">
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:-rotate-3 transition-transform"
                    />
                  </div>
                </div>

                <div className="font-bebas-neue px-6 pb-6 flex flex-col grow">
                  <div className="flex justify-between items-center mb-2 uppercase font-bold tracking-tighter">
                    <h3 className="text-sm md:text-base text-white">
                      {producto.nombre}
                    </h3>
                    <span className="text-white/90">
                      $ {producto.precio.toFixed(2)}
                    </span>
                  </div>

                  <p className="text-sm text-white/50 leading-relaxed line-clamp-2 mb-4">
                    {producto.descripcionCorta}
                  </p>

                  <div className="flex gap-2 mb-6">
                    {producto.tallas.map((talla) => (
                      <span
                        key={talla}
                        className="p-2 aspect-square flex items-center justify-center text-xs border border-white/20 rounded-md text-white/40 hover:border-indigo-500 hover:text-white transition-colors cursor-pointer"
                      >
                        {talla}
                      </span>
                    ))}
                  </div>

                  <button className="w-full tracking-wider cursor-pointer py-3 rounded-xl font-bold text-xs uppercase transition-all duration-300 bg-white/10 text-white/60 hover:bg-indigo-600 hover:text-white hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] mt-auto">
                    Añadir al carrito
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="button-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white hover:bg-indigo-600 transition-all">
        <ChevronLeft />
      </button>

      <button className="button-next absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white hover:bg-indigo-600 transition-all">
        <ChevronRight />
      </button>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .swiper-button-next, .swiper-button-prev { display: none; }
            .button-next,
            .button-prev {
              margin-top: -46px;
            }
            .swiper-pagination-bullet {
                background: #a5b4fc;
                opacity: 0.7;
            }
            .swiper-pagination-bullet-active {
                background: #4f46e5 !important;
                opacity: 1;
                width: 20px;
                border-radius: 5px;
                transition: all 0.3s;
            }
        `,
        }}
      />
    </div>
  );
}
