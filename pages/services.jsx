//Import Design
import "../scss/Services.scss";

const Services = () => {
  return (
    <section id="Services">
      <div className="Container">
        <div className="Boxes">
          <div className="Box">
            <div className="Round">
              <svg
                className="Prog-Lang"
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 57 57"
                fill="none"
              >
                <path
                  d="M28.5 32.9068C30.9594 32.9068 32.9531 30.9131 32.9531 28.4537C32.9531 25.9943 30.9594 24.0006 28.5 24.0006C26.0406 24.0006 24.0469 25.9943 24.0469 28.4537C24.0469 30.9131 26.0406 32.9068 28.5 32.9068Z"
                  fill="#8A0000"
                />
                <path
                  d="M28.5 38.6638C23.1476 38.7933 17.8086 38.0718 12.6825 36.5263C10.3145 35.7757 8.106 34.5932 6.16847 33.0386C5.42913 32.5076 4.81342 31.8228 4.3636 31.0314C3.91378 30.24 3.6405 29.3607 3.5625 28.4537C3.5625 25.5093 6.79725 22.6237 12.2158 20.7355C17.4789 19.0625 22.978 18.2517 28.5 18.3344C33.9483 18.2583 39.3737 19.0545 44.5704 20.6928C46.8509 21.4198 48.9846 22.5451 50.8725 24.0166C51.5992 24.5229 52.2057 25.1828 52.6489 25.9496C53.0922 26.7164 53.3614 27.5713 53.4375 28.4537C53.4375 31.5139 49.8216 34.615 43.9969 36.5423C38.9701 38.0375 33.7437 38.7529 28.5 38.6638ZM28.5 20.4648C23.217 20.3942 17.9565 21.165 12.9158 22.7483C7.92834 24.4886 5.69288 26.8684 5.69288 28.4483C5.69288 30.1013 8.09578 32.7002 13.3718 34.5046C18.2758 35.9757 23.3818 36.6604 28.5 36.5334C33.5167 36.6232 38.5176 35.9444 43.3289 34.5206C48.8063 32.7055 51.3 30.1031 51.3 28.4537C51.2101 27.8877 51.0039 27.3464 50.6942 26.8641C50.3845 26.3819 49.9782 25.9691 49.5009 25.6518C47.8119 24.3464 45.9058 23.3491 43.8704 22.7056C38.899 21.1448 33.7101 20.3883 28.5 20.4648Z"
                  fill="#8A0000"
                />
                <path
                  d="M18.3825 50.6641C17.5516 50.6832 16.7304 50.4816 16.0028 50.0798C13.452 48.6085 12.5685 44.3656 13.639 38.7279C14.8194 33.3327 16.8645 28.1639 19.6953 23.4217C22.3507 18.6641 25.7501 14.3621 29.7647 10.6786C31.5338 9.06603 33.5746 7.77968 35.7924 6.87919C36.5946 6.50323 37.4697 6.30835 38.3557 6.30835C39.2416 6.30835 40.1167 6.50323 40.9189 6.87919C43.5712 8.4075 44.4493 13.0886 43.2114 19.0968C41.9946 24.1993 40.0025 29.085 37.3047 33.5837C34.7428 38.285 31.4504 42.5496 27.5506 46.2181C25.7173 47.8939 23.5897 49.2158 21.2753 50.1172C20.3487 50.4611 19.3707 50.646 18.3825 50.6641ZM21.5407 24.4797C18.8405 29.0207 16.8803 33.9626 15.7338 39.1198C14.7488 44.3122 15.6946 47.4347 17.0697 48.2291C18.4947 49.0538 21.9539 48.2719 26.1541 44.6025C29.877 41.088 33.0195 37.0058 35.4647 32.5078C38.0492 28.207 39.96 23.5359 41.1308 18.6568C42.2958 13.0013 41.2894 9.53859 39.8608 8.71565C39.3254 8.5105 38.7532 8.41867 38.1805 8.44595C37.6078 8.47324 37.0469 8.61906 36.5334 8.87419C34.5592 9.68883 32.7442 10.8454 31.1719 12.2906C27.3363 15.8189 24.0891 19.9374 21.5531 24.4904L21.5407 24.4797Z"
                  fill="#8A0000"
                />
                <path
                  d="M38.6121 50.6872C36.1986 50.6872 33.133 49.2266 29.941 46.4817C25.8561 42.7647 22.3992 38.4116 19.7042 33.5908C16.9089 28.9139 14.88 23.8198 13.6942 18.5018C13.18 16.1621 13.0847 13.7498 13.4128 11.3768C13.4887 10.4966 13.7567 9.64363 14.198 8.87821C14.6394 8.11279 15.2433 7.45351 15.9671 6.94687C18.6158 5.41321 23.1099 6.98962 27.6966 11.0616C31.5096 14.6636 34.7475 18.8291 37.2976 23.4127C40.0911 27.9805 42.1413 32.963 43.3716 38.174C43.908 40.5995 43.9907 43.1034 43.6157 45.559C43.5264 46.4646 43.2424 47.3402 42.7831 48.1258C42.3237 48.9113 41.7 49.5882 40.9545 50.1101C40.2387 50.5068 39.4303 50.706 38.6121 50.6872ZM21.5478 32.5185C24.1331 37.1256 27.4353 41.2918 31.3304 44.8608C35.3364 48.3075 38.5142 49.0485 39.8804 48.2451C41.3054 47.4169 42.3563 44.0361 41.2733 38.5658C40.0868 33.5907 38.1203 28.8347 35.4469 24.4744C33.0134 20.0874 29.9227 16.0987 26.2823 12.6469C21.9646 8.81362 18.4626 7.95684 17.0359 8.78334C16.5912 9.14472 16.2262 9.59438 15.9641 10.1039C15.702 10.6135 15.5483 11.1718 15.5129 11.7438C15.2297 13.8601 15.3219 16.0097 15.7854 18.0939C16.926 23.1796 18.8719 28.0504 21.5496 32.5221L21.5478 32.5185Z"
                  fill="#8A0000"
                />
              </svg>
            </div>
            <div className="Details">
              <h1>React</h1>
              <p>
                I excel in React.js, crafting efficient, scalable apps with
                dynamic UIs. Proficient in state management, I optimize for
                performance and user-friendliness.
              </p>
            </div>
          </div>

          <div className="Box">
            <div className="Round">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="39"
                viewBox="0 0 62 49"
                fill="none"
                className="Prog-Lang"
                id="Bootstrap"
              >
                <path
                  d="M12.8776 0C9.33996 0 6.72216 3.07091 6.83938 6.40123C6.95199 9.60064 6.80571 13.7447 5.75389 17.1241C4.69892 20.5132 2.91448 22.6601 0 22.9358V26.0478C2.91448 26.3236 4.69892 28.4704 5.75389 31.8598C6.80571 35.2392 6.95199 39.3828 6.83938 42.5824C6.72216 45.9123 9.33996 48.9837 12.8781 48.9837H49.127C52.6649 48.9837 55.282 45.9128 55.1647 42.5824C55.0524 39.383 55.1984 35.2392 56.2502 31.8598C57.3059 28.4707 59.0855 26.3233 62 26.0478V22.9358C59.0855 22.6601 57.3059 20.5132 56.2505 17.1241C55.1984 13.7452 55.0524 9.60088 55.1647 6.40123C55.282 3.07139 52.6649 0 49.127 0H12.8771H12.8776ZM42.0341 30.1525C42.0341 34.7384 38.5853 37.5193 32.8619 37.5193H23.1187C22.8401 37.5193 22.5728 37.4095 22.3758 37.214C22.1788 37.0186 22.0681 36.7535 22.0681 36.4771V12.5065C22.0681 12.3696 22.0953 12.2341 22.148 12.1076C22.2008 11.9811 22.2782 11.8662 22.3758 11.7694C22.4734 11.6726 22.5893 11.5958 22.7168 11.5434C22.8443 11.491 22.981 11.4641 23.119 11.4641H32.8062C37.5785 11.4641 40.7105 14.0282 40.7105 17.9645C40.7105 20.7275 38.6035 23.201 35.9193 23.6341V23.7785C39.5737 24.176 42.0341 26.6858 42.0341 30.1525ZM31.7992 14.768H26.2442V22.5503H30.9232C34.5401 22.5503 36.5347 21.1058 36.5347 18.5237C36.5347 16.1042 34.8193 14.768 31.7992 14.768ZM26.2442 25.6383V34.2145H32.0039C35.7694 34.2145 37.7645 32.7159 37.7645 29.8994C37.7645 27.0823 35.7139 25.6378 31.7617 25.6378H26.2442V25.6383Z"
                  fill="#8A0000"
                />
                <defs>
                  <clipPath id="clip0_23_78">
                    <rect width="62" height="49" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="Details">
              <h1>Bootstrap</h1>
              <p>
                I craft mobile-friendly, visually appealing interfaces using
                Bootstrap&spos;s grid, components, and CSS. I ensure seamless
                design across devices with precision and efficiency.
              </p>
            </div>
          </div>

          <div className="Box">
            <div className="Round">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 64 64"
                fill="none"
                id="CSS"
              >
                <path
                  d="M20.0053 0H26.88V2.87467H22.88V5.74933H26.88V8.624H20.0053V0ZM28.2533 0H35.1306V2.50133H31.1306V3H35.1306V8.74933H28.2533V6.12533H32.2533V5.624H28.2533V0ZM36.5066 0H43.3786V2.50133H39.3786V3H43.3786V8.74933H36.5066V6.12533H40.5066V5.624H36.5066V0Z"
                  fill="#8A0000"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M31.976 64L13.4587 58.8587L8 12.5787H56L50.544 58.8533L31.976 64ZM18.792 33.528L19.3013 39.2027H38.9733L38.3147 46.5627L31.984 48.2747H31.9787L25.6587 46.568L25.2533 42.0427H19.5547L20.3493 50.9547L31.976 54.1813L43.6213 50.9547L45.04 35.0507L45.1787 33.528L46.2027 22.0373H17.7707L18.288 27.7147H39.984L39.4667 33.528H18.792Z"
                  fill="#8A0000"
                />
                <defs>
                  <clipPath id="clip0_28_272">
                    <rect width="64" height="64" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="Details">
              <h1>CSS</h1>
              <p>
                Proficient in CSS, I adeptly manage styles, employ modern
                techniques for cross-browser compatibility, ensuring visually
                appealing, responsive designs across devices with comprehensive
                understanding of selectors and layouts.
              </p>
            </div>
          </div>

          <div className="Box">
            <div className="Round">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 64 64"
                fill="none"
                id="HTML"
              >
                <path
                  d="M13.5467 0H16.432V2.85067H19.072V0H21.9573V8.62933H19.072V5.74133H16.432V8.62933H13.5493L13.5467 0ZM25.7493 2.86133H23.2107V0H31.176V2.86133H28.6347V8.62933H25.7493V2.86133ZM32.44 0H35.448L37.2987 3.032L39.1467 0H42.1547V8.62933H39.2827V4.352L37.2987 7.42133H37.248L35.2613 4.35467V8.62933H32.44V0ZM43.5893 0H46.4773V5.77867H50.5307V8.632H43.5893V0Z"
                  fill="#8A0000"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.456 58.8587L8 12.5787H56L50.5413 58.8533L31.9733 64L13.456 58.8587ZM24.488 33.5253L23.9707 27.712H45.6907L46.1973 22.0373H17.7707L19.3013 39.2027H38.9733L38.3147 46.5627L31.984 48.2747H31.9787L25.6587 46.568L25.2533 42.0427H19.552L20.3467 50.9547L31.9733 54.1813L43.6187 50.9547L45.0373 35.0507L45.176 33.528H24.488V33.5253Z"
                  fill="#8A0000"
                />
                <defs>
                  <clipPath id="clip0_28_264">
                    <rect width="64" height="64" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="Details">
              <h1>HTML</h1>
              <p>
                My strength lies in optimizing HTML, structuring content with
                semantic tags for accessibility. I ensure compatibility,
                responsive design, and enriched user experiences through best
                practices in coding.
              </p>
            </div>
          </div>

          <div className="Box">
            <div className="Round">
              <svg
                id="SCSS"
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
              >
                <path
                  d="M55.8594 11.1719H36.9688L32.7031 19.7031H8.9375V53.8281H60.125V11.1719H55.8594ZM55.8594 19.7031H39.2031L41.4375 15.4375H55.8594V19.7031Z"
                  fill="#8A0000"
                />
                <path
                  d="M41.6406 20.3125C45.8589 20.3125 49.9825 21.5634 53.4899 23.9069C56.9973 26.2505 59.731 29.5815 61.3452 33.4787C62.9595 37.3759 63.3819 41.6643 62.5589 45.8015C61.736 49.9388 59.7047 53.7391 56.7219 56.7219C53.7391 59.7047 49.9388 61.736 45.8015 62.5589C41.6643 63.3819 37.3759 62.9595 33.4787 61.3452C29.5815 59.731 26.2505 56.9973 23.9069 53.4899C21.5634 49.9825 20.3125 45.8589 20.3125 41.6406C20.3125 35.9841 22.5596 30.5592 26.5594 26.5594C30.5592 22.5596 35.9841 20.3125 41.6406 20.3125Z"
                  fill="#8A0000"
                />
                <path
                  d="M55.0184 29.4409C54.0536 25.6526 47.7709 24.4075 41.8275 26.52C38.1046 27.7706 34.6651 29.7434 31.7058 32.3253C28.4314 35.3884 27.9094 38.0534 28.1247 39.1665C28.8844 43.097 34.2692 45.6665 36.4812 47.5718V47.584C35.8292 47.905 31.0517 50.3222 29.9325 52.7942C28.7523 55.4023 30.1194 57.2629 31.0253 57.525C32.3858 57.8523 33.8146 57.7457 35.1114 57.22C36.4082 56.6944 37.508 55.7761 38.2566 54.5939C38.8752 53.6355 39.2622 52.5463 39.387 51.4125C39.5118 50.2787 39.371 49.1313 38.9756 48.0614C40.0417 47.7907 41.1498 47.7272 42.2398 47.8745C45.9814 48.3112 46.7086 50.6472 46.5745 51.6242C46.5087 51.9728 46.3685 52.3032 46.1634 52.5927C45.9584 52.8823 45.6933 53.1242 45.3862 53.302C45.1242 53.4645 45.043 53.5214 45.0653 53.6412C45.0978 53.8159 45.2177 53.8098 45.4431 53.7712C46.0046 53.5935 46.4991 53.2501 46.8617 52.786C47.2242 52.3219 47.4378 51.759 47.4744 51.1712C47.5637 48.88 45.368 46.3165 41.4802 46.3836C40.3511 46.3493 39.2242 46.5017 38.1448 46.8345C38.0911 46.7726 38.0363 46.7116 37.9803 46.6517C35.5773 44.0882 31.133 42.2723 31.3219 38.8253C31.3909 37.572 31.8256 34.2712 39.8531 30.2676C46.4344 26.9892 51.7034 27.8911 52.6134 29.8898C53.9134 32.7478 49.7981 38.0575 42.963 38.8273C42.2076 38.9809 41.4274 38.9625 40.6801 38.7733C39.9329 38.5841 39.2378 38.2291 38.6466 37.7345C38.287 37.3384 38.2403 37.3283 38.1002 37.3953C37.8828 37.5172 38.0209 37.8665 38.1002 38.0737C38.3618 38.5456 38.715 38.9605 39.1392 39.2939C39.5633 39.6274 40.0499 39.8727 40.5702 40.0156C43.2575 40.5997 46.0605 40.3225 48.5814 39.2234C52.7353 37.6207 55.9691 33.1662 55.0184 29.4409ZM37.4014 48.75C37.7038 49.7931 37.6883 50.9027 37.3567 51.937C37.3215 52.0453 37.2822 52.1516 37.2389 52.2559C37.1956 52.3602 37.1495 52.4638 37.1008 52.5667C36.8445 53.0911 36.5126 53.5749 36.1156 54.0028C34.8766 55.3556 33.1459 55.8654 32.4025 55.4348C31.6002 54.9697 31.9963 53.0643 33.4384 51.545C34.5425 50.4529 35.8155 49.5462 37.2084 48.8597L37.4014 48.75Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="Details">
              <h1>SCSS</h1>
              <p>
                I adeptly use SCSS, employing nesting, mixins, functions, and
                variables for streamlined CSS workflows. I create maintainable,
                scalable web designs, utilizing inheritance and advanced
                features for visual appeal.
              </p>
            </div>
          </div>

          <div className="Box">
            <div className="Round">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
              >
                <path
                  d="M0 32.5C0 41.9417 14.5509 49.5965 32.5 49.5965C50.4491 49.5965 65 41.9417 65 32.5C65 23.0582 50.4486 15.4034 32.5 15.4034C14.5509 15.4034 0 23.0582 0 32.5Z"
                  fill="url(#paint0_radial_24_176)"
                />
                <path
                  d="M32.5 48.327C49.7479 48.327 63.7305 41.2404 63.7305 32.5C63.7305 23.7585 49.7479 16.673 32.5 16.673C15.2521 16.673 1.26953 23.7585 1.26953 32.5C1.26953 41.2404 15.2521 48.327 32.5 48.327Z"
                  fill="#8A0000"
                />
                <path
                  d="M17.6577 34.4622C19.076 34.4622 20.1343 34.2006 20.8041 33.6852C21.4673 33.1744 21.9248 32.2903 22.165 31.0573C22.3884 29.9045 22.3031 29.1002 21.9111 28.6655C21.5109 28.2217 20.6451 27.9967 19.338 27.9967H17.0711L15.8153 34.4622H17.6577ZM10.2441 42.4262C10.1921 42.4261 10.1407 42.4145 10.0937 42.3923C10.0467 42.37 10.0052 42.3376 9.97223 42.2974C9.93922 42.2572 9.91552 42.2102 9.90282 42.1598C9.89013 42.1094 9.88875 42.0568 9.89879 42.0057L13.2285 24.8731C13.2443 24.793 13.2873 24.7209 13.3502 24.6689C13.4132 24.617 13.4922 24.5885 13.5738 24.5883H20.7513C23.007 24.5883 24.6858 25.2007 25.7415 26.4088C26.8018 27.6224 27.1299 29.3206 26.715 31.4539C26.5459 32.3227 26.2554 33.1297 25.8517 33.8528C25.4315 34.5966 24.8952 35.2686 24.2633 35.8434C23.4858 36.5706 22.6058 37.0987 21.6496 37.409C20.7091 37.7157 19.5005 37.8711 18.0593 37.8711H15.1526L14.3229 42.1408C14.3072 42.2212 14.2641 42.2936 14.2009 42.3456C14.1377 42.3977 14.0584 42.4262 13.9765 42.4262H10.2441Z"
                  fill="#D9D9D9"
                />
                <path
                  d="M17.3621 28.3491H19.338C20.9158 28.3491 21.4637 28.6954 21.6501 28.9021C21.9583 29.2444 22.0172 29.967 21.8182 30.9903C21.5952 32.1364 21.1819 32.9494 20.5893 33.4054C19.9829 33.8726 18.9957 34.1092 17.6577 34.1092H16.2429L17.3621 28.3491ZM20.7512 24.2358H13.5743C13.4107 24.2359 13.2521 24.2927 13.1257 24.3968C12.9994 24.5008 12.9131 24.6455 12.8817 24.8061L9.55195 41.9392C9.53228 42.0413 9.5354 42.1464 9.56107 42.2471C9.58674 42.3478 9.63434 42.4416 9.70046 42.5218C9.76658 42.602 9.84959 42.6666 9.94357 42.711C10.0375 42.7554 10.1402 42.7785 10.2441 42.7786H13.9765C14.1402 42.7785 14.2987 42.7214 14.4249 42.6173C14.5512 42.5132 14.6374 42.3685 14.6687 42.2078L15.4431 38.2235H18.0588C19.5376 38.2235 20.7827 38.0621 21.7593 37.7442C22.7632 37.4181 23.6869 36.8651 24.5045 36.1004C25.1628 35.5008 25.7214 34.8002 26.1594 34.0249C26.5814 33.2698 26.8851 32.4269 27.0608 31.5209C27.4975 29.2749 27.1426 27.4767 26.0066 26.1767C24.8813 24.8884 23.1131 24.2358 20.7512 24.2358ZM15.3872 34.8141H17.6577C19.1623 34.8141 20.283 34.5312 21.0194 33.9635C21.7562 33.3968 22.2523 32.4502 22.5113 31.1243C22.7576 29.8507 22.6454 28.9524 22.1736 28.4288C21.7009 27.9058 20.7563 27.6438 19.338 27.6438H16.7807L15.3872 34.8141ZM20.7518 24.9397C22.911 24.9397 24.4857 25.5069 25.4759 26.6398C26.4662 27.7733 26.7637 29.3551 26.3697 31.3858C26.2062 32.2227 25.9314 32.9875 25.5445 33.6801C25.1565 34.3738 24.6507 35.0076 24.0256 35.5829C23.2802 36.2801 22.4529 36.7773 21.5414 37.0733C20.6304 37.3699 19.4695 37.5177 18.0593 37.5177H14.8621L13.977 42.0728H10.2446L13.5748 24.9397H20.7518Z"
                  fill="#1E1E1E"
                />
                <path
                  d="M35.2721 37.8711C35.2201 37.8712 35.1687 37.8597 35.1216 37.8376C35.0745 37.8154 35.0329 37.7831 34.9998 37.7429C34.9667 37.7028 34.9429 37.6558 34.9301 37.6053C34.9173 37.5549 34.9158 37.5023 34.9258 37.4512L36.3985 29.8705C36.5391 29.1495 36.5046 28.6325 36.302 28.4131C36.1776 28.2796 35.8048 28.0556 34.7024 28.0556H32.0333L30.1818 37.5862C30.1659 37.6665 30.1227 37.7387 30.0594 37.7906C29.9961 37.8425 29.9168 37.8708 29.835 37.8706H26.133C26.081 37.8707 26.0297 37.8592 25.9826 37.8371C25.9356 37.8149 25.894 37.7827 25.8608 37.7426C25.8277 37.7025 25.8038 37.6556 25.7909 37.6052C25.778 37.5549 25.7764 37.5022 25.7862 37.4512L29.1164 20.3181C29.1322 20.2378 29.1754 20.1655 29.2385 20.1136C29.3017 20.0616 29.381 20.0332 29.4628 20.0332H33.1647C33.2167 20.0332 33.2681 20.0446 33.3152 20.0668C33.3622 20.0889 33.4038 20.1212 33.4369 20.1612C33.4701 20.2013 33.494 20.2482 33.5069 20.2986C33.5198 20.349 33.5214 20.4016 33.5116 20.4527L32.7082 24.5883H35.5789C37.766 24.5883 39.2488 24.9732 40.1126 25.7669C40.9927 26.5759 41.2679 27.8693 40.9292 29.6126L39.3798 37.5862C39.364 37.6664 39.3208 37.7386 39.2576 37.7905C39.1944 37.8423 39.1152 37.8707 39.0335 37.8706L35.2721 37.8711Z"
                  fill="#D9D9D9"
                />
                <path
                  d="M33.1652 19.6803H29.4628C29.299 19.6803 29.1404 19.7373 29.014 19.8414C28.8877 19.9455 28.8014 20.0904 28.7701 20.2511L25.4404 37.3837C25.4206 37.4857 25.4237 37.5909 25.4493 37.6917C25.475 37.7925 25.5225 37.8864 25.5887 37.9666C25.6548 38.0469 25.7378 38.1115 25.8319 38.1559C25.9259 38.2003 26.0285 38.2235 26.1325 38.2236H29.835C29.9987 38.2235 30.1574 38.1666 30.2837 38.0625C30.4101 37.9583 30.4963 37.8135 30.5277 37.6528L32.3238 28.4081H34.7014C35.8023 28.4081 36.0339 28.6432 36.0425 28.6539C36.1095 28.7249 36.1974 29.0576 36.0521 29.8035L34.5795 37.3837C34.5597 37.4858 34.5628 37.591 34.5885 37.6918C34.6141 37.7927 34.6617 37.8865 34.7279 37.9668C34.7941 38.0471 34.8772 38.1117 34.9713 38.1561C35.0654 38.2005 35.1681 38.2235 35.2721 38.2236H39.034C39.1977 38.2234 39.3562 38.1664 39.4824 38.0623C39.6087 37.9582 39.6949 37.8134 39.7262 37.6528L41.2755 29.6801C41.6386 27.8083 41.3278 26.4047 40.3513 25.5074C39.4189 24.6513 37.8579 24.2354 35.5789 24.2354H33.1363L33.8579 20.5207C33.8777 20.4186 33.8747 20.3133 33.8491 20.2124C33.8235 20.1115 33.7759 20.0175 33.7097 19.9372C33.6435 19.8569 33.5603 19.7922 33.4662 19.7478C33.3721 19.7034 33.2693 19.6803 33.1652 19.6803ZM33.1652 20.3862L32.2801 24.9402H35.5789C37.6543 24.9402 39.0863 25.3028 39.8734 26.0269C40.6621 26.7511 40.8977 27.9236 40.5834 29.5461L39.0335 37.5182H35.2721L36.7453 29.9376C36.9129 29.0753 36.8509 28.4873 36.56 28.1735C36.269 27.8601 35.6494 27.7032 34.7024 27.7032H31.7423L29.835 37.5177H26.132L29.4623 20.3846H33.1652V20.3862Z"
                  fill="#1E1E1E"
                />
                <path
                  d="M46.7878 34.4622C48.2061 34.4622 49.2649 34.2006 49.9352 33.6852C50.5974 33.1744 51.0555 32.2903 51.2957 31.0573C51.5191 29.9045 51.4343 29.1002 51.0418 28.6655C50.6416 28.2217 49.7758 27.9967 48.4687 27.9967H46.2023L44.9455 34.4622H46.7878ZM39.3758 42.4262C39.3237 42.4263 39.2722 42.4148 39.2251 42.3926C39.178 42.3704 39.1363 42.338 39.1032 42.2978C39.0701 42.2576 39.0463 42.2106 39.0336 42.1601C39.0208 42.1095 39.0194 42.0568 39.0295 42.0057L42.3592 24.8731C42.375 24.7929 42.4181 24.7206 42.4813 24.6686C42.5445 24.6167 42.6237 24.5883 42.7055 24.5883H49.8824C52.1381 24.5883 53.817 25.2007 54.8722 26.4088C55.933 27.6224 56.2606 29.3206 55.8457 31.4539C55.6871 32.2942 55.3959 33.104 54.9829 33.8528C54.5625 34.5965 54.0263 35.2684 53.3945 35.8434C52.6175 36.5706 51.7365 37.0987 50.7807 37.409C49.8403 37.7157 48.6317 37.8711 47.19 37.8711H44.2838L43.4545 42.1408C43.4389 42.2212 43.3957 42.2937 43.3324 42.3458C43.2691 42.3979 43.1897 42.4263 43.1077 42.4262H39.3758Z"
                  fill="#D9D9D9"
                />
                <path
                  d="M46.4928 28.3491H48.4687C50.0464 28.3491 50.5944 28.6954 50.7802 28.9021C51.09 29.2444 51.1479 29.967 50.9493 30.9903C50.7259 32.1364 50.3125 32.9494 49.7199 33.4054C49.1131 33.8726 48.1259 34.1092 46.7883 34.1092H45.3736L46.4928 28.3491ZM49.8819 24.2358H42.705C42.5414 24.236 42.383 24.2929 42.2567 24.3969C42.1305 24.5009 42.0443 24.6456 42.0129 24.8061L38.6826 41.9392C38.6629 42.0413 38.6661 42.1465 38.6918 42.2472C38.7175 42.348 38.7651 42.4418 38.8313 42.522C38.8975 42.6022 38.9805 42.6668 39.0746 42.7111C39.1686 42.7555 39.2713 42.7785 39.3753 42.7786H43.1077C43.2713 42.7785 43.4299 42.7214 43.5561 42.6173C43.6824 42.5132 43.7685 42.3685 43.7998 42.2078L44.5743 38.2235H47.1895C48.6677 38.2235 49.9134 38.0621 50.8894 37.7442C51.8939 37.4181 52.8176 36.8651 53.6357 36.0999C54.2937 35.5004 54.8522 34.8 55.2901 34.0249C55.7126 33.2698 56.0153 32.4269 56.1915 31.5209C56.6282 29.2749 56.2738 27.4767 55.1373 26.1767C54.012 24.8884 52.2448 24.2358 49.8819 24.2358ZM44.5179 34.8141H46.7878C48.293 34.8141 49.4132 34.5312 50.1506 33.9635C50.8869 33.3968 51.3835 32.4502 51.6415 31.1243C51.8888 29.8507 51.7766 28.9524 51.3038 28.4288C50.8315 27.9058 49.8865 27.6438 48.4687 27.6438H45.9118L44.5179 34.8141ZM49.8819 24.9397C52.0406 24.9397 53.6164 25.5069 54.6061 26.6398C55.5963 27.7733 55.8944 29.3551 55.4993 31.3858C55.3368 32.2227 55.0616 32.9875 54.6747 33.6801C54.2872 34.3738 53.7809 35.0076 53.1553 35.5829C52.4103 36.2801 51.5826 36.7773 50.6711 37.0733C49.7605 37.3699 48.6002 37.5177 47.1895 37.5177H43.9928L43.1067 42.0728H39.3743L42.7045 24.9397H49.8819Z"
                  fill="#1E1E1E"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_24_176"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(19.5132 21.4139) scale(42.6773)"
                  >
                    <stop stopColor="#D80000" />
                    <stop offset="0.3" stopColor="#CA8787" />
                    <stop offset="0.75" stopColor="#FF1C1C" />
                    <stop offset="1" stopColor="#940000" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <div className="Details">
              <h1>PHP</h1>
              <p>
                Mastering PHP, I adeptly craft dynamic web apps, maximizing
                backend features for secure, efficient database integration and
                robust functionality, ensuring seamless code execution.
              </p>
            </div>
          </div>
        </div>

        <div className="Title">
          <h1>Services</h1>
          <hr />

          <div className="btns">
            <a href="/projects" className="Links">View My Works!</a>
            <a href="./assets/Resume.pdf" target="_blank" className="Links">View My Resume!</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;