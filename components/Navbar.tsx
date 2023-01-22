export default function Navbar() {
  return (
    <header
      className={`h-24 top-0 fixed z-30 flex w-screen items-center justify-between px-6 transition-all duration-200 lg:px-12`}
    >
      <div className="aspect-square w-10 lg:w-11">
        <svg
          width="42"
          height="43"
          viewBox="0 0 42 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="main logo">
            <path
              id="Polygon 1"
              d="M3.81347 11.5773L21 1.6547L38.1865 11.5773V31.4226L21 41.3453L3.81347 31.4226V11.5773Z"
              stroke="#60FFD9"
              strokeWidth="2"
            />
            <path
              id="K"
              d="M18.008 28.5V15.54H19.816V21.652L22.792 15.54H24.472L21.912 21.252L24.888 28.5H23.128L20.648 22.42L19.816 23.924V28.5H18.008Z"
              fill="#60FFD9"
            />
          </g>
        </svg>
      </div>
    </header>
  );
}
