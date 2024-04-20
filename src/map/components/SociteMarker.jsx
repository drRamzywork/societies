import React, { useEffect, useState } from 'react'
import { SmallWhiteMark } from "../../assets/svg";

const SociteMarker = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  // console.log(windowWidth, windowHeight);
  useEffect(() => {
    // Function to update the window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial window width
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
      <div>
        <svg
          width="91"
          height="52"
          viewBox="0 0 91 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="svgMarks"
        >
          <g filter="url(#filter0_d_5088_4474)">
            <rect
              x="4"
              y="2.16602"
              width="82.1741"
              height="43.4026"
              rx="14.9818"
              fill="white"
            ></rect>
            <path
              className="text"
              d="M35.8654 19.0463L34.3415 17.5395L32.8347 19.0463L34.3586 20.553L35.8654 19.0463ZM38.8617 20.827C36.653 20.827 34.7182 22.1967 31.465 25.5869C31.3622 24.5938 31.191 23.5151 31.0198 22.3337H29.1364C29.5473 25.1075 29.8213 26.7512 29.8213 28.1723C29.8213 30.4496 28.7939 31.5796 26.6537 31.5796C24.6675 31.5796 23.9141 30.2441 23.9141 28.5148C23.9141 27.419 24.2052 26.1691 24.6675 24.9876H22.8697C22.4416 26.2718 22.1163 27.1793 22.1163 28.7716C22.1163 31.8707 23.7258 33.5487 26.5167 33.5487C29.4103 33.5487 31.1225 31.8536 31.5335 29.388C32.6978 29.6106 34.3757 29.8674 35.5229 29.8674C39.7521 29.8674 42.543 27.6929 42.543 24.5425C42.543 22.4193 40.9677 20.827 38.8617 20.827ZM35.3174 27.8984C34.0847 27.8984 32.6978 27.7785 31.6191 27.5731V27.5388C35.249 24.0459 36.9612 22.8131 38.5364 22.8131C39.7349 22.8131 40.6424 23.6692 40.6424 24.8335C40.6424 26.6142 38.5193 27.8984 35.3174 27.8984ZM46.4758 17.4539H44.5924V26.5971C44.5924 28.5319 45.8594 29.8674 48.2565 29.8674C48.3593 29.8674 48.4278 29.7818 48.4278 29.6791V28.0696C48.4278 27.9669 48.3593 27.8984 48.2565 27.8984C46.8868 27.8984 46.4758 27.4361 46.4758 26.4601V17.4539ZM48.2556 29.8674H49.6254C52.0225 29.8674 53.2895 28.5319 53.2895 26.5971C53.2895 25.4328 53.1525 24.1315 52.7758 21.5632H50.8924C51.2691 24.1315 51.4061 25.3814 51.4061 26.4601C51.4061 27.4361 50.9951 27.8984 49.6254 27.8984H48.2556C48.1529 27.8984 48.0844 27.9669 48.0844 28.0696V29.6791C48.0844 29.7818 48.1529 29.8674 48.2556 29.8674ZM53.5121 32.4871L51.9882 30.9804L50.7041 32.2474L49.4028 30.9804L47.896 32.4871L49.4199 33.9939L50.7041 32.7268L52.0053 33.9939L53.5121 32.4871ZM59.9991 27.8984C58.9204 27.8984 58.3725 27.6244 58.2697 26.8711L58.2184 26.5457C58.1328 25.0048 57.9787 23.498 57.7903 22.3337H55.9069C56.2493 25.0219 56.5062 27.2991 56.5062 29.3538C56.5062 30.9632 55.4788 31.7509 53.8865 31.7509V33.5487C56.5918 33.5487 58.3211 32.0762 58.3211 29.4907V29.1997C58.6464 29.662 59.1943 29.8674 59.9991 29.8674C60.1018 29.8674 60.1703 29.7818 60.1703 29.6791V28.0696C60.1703 27.9669 60.1018 27.8984 59.9991 27.8984ZM61.7743 17.4539V26.4601C61.7743 27.4361 61.3634 27.8984 59.9936 27.8984C59.8909 27.8984 59.8224 27.9669 59.8224 28.0696V29.6791C59.8224 29.7818 59.8909 29.8674 59.9936 29.8674C62.3907 29.8674 63.6577 28.5319 63.6577 26.5971V17.4539H61.7743ZM68.3654 17.4539H66.4819V29.8674H68.3654V17.4539Z"
              fill="#707070"
            ></path>
          </g>
          <defs>
            <filter
              id="filter0_d_5088_4474"
              x="0"
              y="0.166016"
              width="90.1741"
              height="51.4026"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
              ></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset dy="2"></feOffset>
              <feGaussianBlur stdDeviation="2"></feGaussianBlur>
              <feComposite in2="hardAlpha" operator="out"></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_5088_4474"
              ></feBlend>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_5088_4474"
                result="shape"
              ></feBlend>
            </filter>
          </defs>
        </svg>
        {/* <img src={Riyad} /> */}
        <img
          src={SmallWhiteMark}
          className="map_mark_white"
          style={{
            top: `${windowHeight * 0.027}px`,
            left: `${windowWidth * 0.003}px`,
          }}
        />
      </div>
    </>
  )
}

export default SociteMarker