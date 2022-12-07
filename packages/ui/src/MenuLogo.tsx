export const MenuLogo = () => {
  return (
    <div className="">
      <a href="https://pylar.org" className="">
        <picture>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="400" /* 150 x 2 = 300 */
            height="25" /* 25 x 2 = 50 */
            viewBox="0 0 3000 700"
            className="m-3 h-5 w-24"
          >
            <text
              fill="#000000"
              font-family="Roboto, sans-serif"
              font-size="500"
              font-weight="500"
            >
              <tspan x="30" y="600" className="">
                BCN Hostess
              </tspan>
            </text>
          </svg>
        </picture>
      </a>
    </div>
  );
};
