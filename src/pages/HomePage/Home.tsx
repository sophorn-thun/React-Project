import React, { useEffect, useRef } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import styles from './HomePage.module.css';

import { SVGAttributes } from 'react';

function Home() {
  const h1Ref = useRef(null);
  const divRef = useRef(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      console.log(length);
    }
  }, []);

  return (
    <div className={styles['welcome-page']}>
      <div className={styles['welcome-text']}>
        <h1 ref={h1Ref} className={styles['fadeInScale']}>
          Virtual Art Gallery
        </h1>
        <div ref={divRef} className={styles['typingWelcome']}>
          <svg
            ref={svgRef}
            width="385"
            height="117"
            viewBox="0 0 385 117"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              ref={pathRef}
              d="M6 11.1974C6 27.796 7.34868 46.7185 13.1796 62.0516C16.4387 70.6216 17.9852 80.962 20.572 89.8944C21.1523 91.8981 28.9749 105.148 28.9749 98.7303C28.9749 92.04 33.4617 85.7531 34.6654 79.2785C36.0065 72.0653 38.5477 63.9157 38.5477 56.4577C38.5477 46.2896 40.4623 36.1379 40.4623 26.1358C40.4623 20.4045 41.4196 14.7166 41.4196 8.90894C41.4196 2.63599 41.4196 10.2376 41.4196 12.3416C41.4196 22.8907 42.4166 30.2111 46.206 39.8029C49.825 48.963 51.9329 59.2452 55.4066 68.472C57.8169 74.8741 58.7561 84.6663 62.6926 89.8944C63.4364 90.8822 65.2112 94.5258 65.3518 95.8698C65.716 99.3529 67.671 98.554 69.6595 99.8745C70.9979 100.763 71.9407 89.1273 72.0528 86.716C72.2959 81.4839 74.539 72.6899 76.3606 67.8999C79.4294 59.8301 79.0262 50.0746 81.8384 42.0914C84.1154 35.6273 85.4548 25.6595 85.4548 18.6348C85.4548 15.2022 85.4548 11.7695 85.4548 8.33683C85.4548 7.34161 85.4548 0.807422 85.4548 3.75995C85.4548 9.91805 84.4975 15.353 84.4975 21.4954C84.4975 32.1825 85.9525 45.531 90.4539 54.6778C92.0929 58.0081 97.0546 65.7723 99.8141 67.5185C102.835 69.43 113.924 72.0121 116.513 68.917C119.136 65.7821 116.732 54.9536 115.343 52.3893C111.888 46.0059 103.724 49.4281 99.3886 52.3893C96.4964 54.3648 97.8995 63.171 97.8995 66.6921C97.8995 72.5228 96.9422 78.3587 96.9422 84.4275C96.9422 88.3886 97.127 95.9597 100.346 98.1582C102.505 99.6326 103.955 102.421 106.09 103.879C108.564 105.569 111.302 105.191 113.748 106.422C119.814 109.475 121.751 104.428 126.193 100.383C129.855 97.0474 135.682 92.8553 137.148 87.161C138.478 81.9957 139.72 76.6831 141.19 71.5868C142.656 66.5041 143.576 61.3058 144.594 56.0763C145.944 49.1357 148.111 41.6377 148.583 34.5903C149.32 23.5724 151.964 23.0988 148.848 12.3416C147.092 6.27671 138.996 4.49217 136.191 11.1974C133.926 16.6122 136.191 14.0154 136.191 19.9062C136.191 25.9875 136.191 32.0688 136.191 38.1502C136.191 40.2231 136.665 45.9403 137.361 47.8125C138.82 51.7362 140.02 60.0935 140.02 64.4037C140.02 74.5632 145.049 85.0031 148.848 93.5813C151.011 98.4637 156.35 102.686 160.602 103.816C169.364 106.143 176.818 100.677 184.055 96.124C190.981 91.7669 199.372 80.5062 199.372 70.6969C199.372 62.3484 201.797 52.3893 192.618 52.3893C183.818 52.3893 174.052 49.9504 170.866 61.7974C167.589 73.9845 162.814 81.5916 166.345 94.7255C171.591 114.23 195.957 112.641 208.572 106.74C214.375 104.026 219.61 100.687 224.74 96.4419C227.319 94.3077 229.393 91.4871 231.281 88.4959C233.868 84.3977 240.288 76.3115 240.535 70.6969C240.906 62.2777 241.212 53.5791 232.824 52.3258C223.608 50.9489 213.731 50.8947 213.731 64.4037C213.731 71.6161 213.057 79.3207 213.891 86.4617C215.209 97.7511 221.611 101.876 228.835 107.312C232.266 109.894 236.042 108.268 238.621 105.024C240.225 103.005 249.656 98.6982 250.374 96.124C252.895 87.085 243.258 109.718 245.465 100.383C253.815 100.574 250.374 83.0972 253.937 57.5383C254.97 53.528 267.841 55.1069 271.168 59.3182C277.075 66.7938 272.867 73.5941 274.839 83.2833C275.713 87.5786 270.782 91.4854 271.168 95.8698C271.319 97.5852 274.997 102.23 274.997 98.7303C274.997 87.9439 277.84 81.5311 282 71.5868C284.914 64.6197 293.309 51.754 298.451 59.3182C302.638 65.477 307.69 75.118 308.449 83.2833C308.767 86.6953 308.499 89.9118 309.938 93.0092C313.091 99.7926 309.938 106.74 323.766 108.456C343.443 96.4419 345.89 79.8507 351.58 79.8507C351.58 66.6921 349.386 54.6778 336.051 54.6778C333.276 54.6778 325.236 52.9017 324.032 57.2205C322.204 63.7755 324.176 72.9969 323.766 79.8507C323.124 90.5951 323.814 91.2365 332.67 98.1582C338.399 102.636 339.98 108.947 345.89 106.74C349.429 105.418 353.647 106.168 357.324 106.168C358.761 106.168 377.95 104.019 379 105.024C382.038 107.929 353.905 109.222 351.58 109.6"
              stroke="url(#paint0_linear_5_2)"
              stroke-width="12"
              stroke-linecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_5_2"
                x1="6"
                y1="7.76472"
                x2="388.868"
                y2="80.9337"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.04714" stop-color="#BFE15E" />
                <stop offset="0.785142" stop-color="#AA445C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Carousel />
    </div>
  );
}

export default Home;
