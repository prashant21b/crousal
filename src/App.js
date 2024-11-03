import "./styles.css";
import { data } from "./Constant";
import { useEffect, useState } from "react";

export default function App() {
  //console.log(data);
  const [activeIndex, setActiveIndex] = useState(0);
  function prevHandler() {
    setActiveIndex(activeIndex === 0 ? data.length - 1 : activeIndex - 1);
  }
  function nextHandler() {
    setActiveIndex((activeIndex + 1) % data.length);
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      nextHandler();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeIndex]);
  return (
    <div className="App">
      <button className="btn" onClick={prevHandler}>
        Prev
      </button>
      {data.map((url, index) => {
        return (
          <img
            key={index}
            className={`image ${
              index === activeIndex ? "active" : "notactive"
            }`}
            src={url}
            alt="wallpaper"
          />
        );
      })}
      <button className="btn" onClick={nextHandler}>
        next
      </button>
    </div>
  );
}
