import React, { useEffect, useState } from "react";
import "./Slider.scss";

function Slider() {
  const [data, setData] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`,
        { method: "GET" }
      );
      const json = await response.json();
      const filtredJson = await json.filter((elem) => elem.price < 5);
      setData(filtredJson);
    } catch (e) {
      console.log("Request error. Please try again.", e);
    }
  };

  const sliderData = (data) => {
    return data?.map((elem) => {
      return (
        <div className="slider__content" key={elem.id}>
          <div className="slider__quotes">“</div>
          <div className="slider__info">{elem.name}</div>
          <div className="slider__description">{`${elem.price}$`}</div>
          <div className="slider__dots dots">
            {data?.map((item, i) => {
              return (
                <div
                  className={
                    item.id === elem.id ? "dots__dot active" : "dots__dot"
                  }
                  key={item.id}
                  onClick={() => setActiveSlide(i)}
                >
                  •
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="slider">
      <div className="slider__wrap">
        <div
          className={
            activeSlide === 0 ? "slider__chevron disabled" : "slider__chevron"
          }
          onClick={() => setActiveSlide(activeSlide - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-chevron-compact-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"
            />
          </svg>
        </div>
        {data.length ? sliderData(data)[activeSlide] : ""}
        <div
          className={
            activeSlide === data?.length - 1
              ? "slider__chevron disabled"
              : "slider__chevron"
          }
          onClick={() => setActiveSlide(activeSlide + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-chevron-compact-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Slider;
