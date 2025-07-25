import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { news } from "../../constants/news";

const News = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "8%", // for larger screens
  };

  return (
    <div className="mx-auto py-10 overflow-hidden">
      <Slider {...settings}>
        {news.map((t, index) => (
          <div key={index} className="p-4">
            <div className="bg-white shadow-lg rounded-3xl p-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-2">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="text-red-600 font-semibold">{t.name}</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-sm text-gray-500 text-right">
                    {t.day}
                  </div>
                  <div className="text-sm text-gray-500">{t.date}</div>
                </div>
              </div>
              <div className="mt-2 text-gray-700 text-sm">
                {t.content.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default News;
