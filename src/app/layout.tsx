import type { Metadata } from "next";
import { Russo_One } from "next/font/google";
import "./globals.css";

const russo = Russo_One({
  variable: "--font-russo-one",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${russo.variable} antialiased p-4 min-h-[100vh] bg-black bg-gradient-to-tl from-black via-zinc-600/20 to-black text-white`}
      >
        <header className="">
          <svg viewBox="0 0 508.202 42.201" xmlns="http://www.w3.org/2000/svg">
            <g
              id="svgGroup"
              strokeLinecap="round"
              fillRule="evenodd"
              fontSize="9pt"
              stroke="inherit"
              strokeWidth="0.25mm"
              fill="white"
              // style="stroke:#000;stroke-width:0.25mm;fill:#000"
            >
              <path
                d="M 282.901 9.001 L 280.501 10.701 Q 278.001 7.201 274.001 5.101 A 18.432 18.432 0 0 0 266.991 3.087 A 22.461 22.461 0 0 0 265.001 3.001 A 20.104 20.104 0 0 0 258.791 3.937 A 18.047 18.047 0 0 0 255.451 5.401 Q 251.201 7.801 248.751 11.851 A 17.062 17.062 0 0 0 246.364 19.464 A 20.974 20.974 0 0 0 246.301 21.101 A 18.227 18.227 0 0 0 247.407 27.502 A 16.978 16.978 0 0 0 248.751 30.301 Q 251.201 34.401 255.451 36.801 A 18.729 18.729 0 0 0 263.682 39.163 A 22.575 22.575 0 0 0 265.001 39.201 A 20.052 20.052 0 0 0 271.71 38.105 A 18.16 18.16 0 0 0 275.801 36.051 Q 280.501 32.901 282.501 27.801 L 266.901 27.801 L 266.901 24.801 L 285.601 24.801 L 285.601 27.801 Q 283.501 34.201 277.951 38.201 A 21.236 21.236 0 0 1 266.429 42.162 A 26.422 26.422 0 0 1 265.001 42.201 A 22.881 22.881 0 0 1 257.845 41.107 A 20.697 20.697 0 0 1 254.001 39.401 Q 249.101 36.601 246.201 31.801 A 20.281 20.281 0 0 1 243.301 21.147 A 23.9 23.9 0 0 1 243.301 21.101 A 21.231 21.231 0 0 1 244.43 14.099 A 19.317 19.317 0 0 1 246.201 10.351 Q 249.101 5.601 254.001 2.801 A 21.437 21.437 0 0 1 263.681 0.034 A 25.758 25.758 0 0 1 265.001 0.001 A 22.973 22.973 0 0 1 272.366 1.159 A 21.088 21.088 0 0 1 275.401 2.451 A 20.779 20.779 0 0 1 281.176 6.825 A 19.412 19.412 0 0 1 282.901 9.001 Z M 38.601 7.701 L 36.301 9.501 A 17.494 17.494 0 0 0 30.702 5.09 A 20.401 20.401 0 0 0 30.001 4.751 A 19.349 19.349 0 0 0 22.608 3.019 A 22.614 22.614 0 0 0 21.701 3.001 A 20.104 20.104 0 0 0 15.491 3.937 A 18.047 18.047 0 0 0 12.151 5.401 Q 7.901 7.801 5.451 11.851 A 17.062 17.062 0 0 0 3.064 19.464 A 20.974 20.974 0 0 0 3.001 21.101 A 18.227 18.227 0 0 0 4.107 27.502 A 16.978 16.978 0 0 0 5.451 30.301 Q 7.901 34.401 12.151 36.801 A 18.729 18.729 0 0 0 20.382 39.163 A 22.575 22.575 0 0 0 21.701 39.201 A 20.23 20.23 0 0 0 27.808 38.297 A 18.547 18.547 0 0 0 30.001 37.451 A 18.197 18.197 0 0 0 34.881 34.206 A 16.845 16.845 0 0 0 36.301 32.701 L 38.601 34.501 A 20.916 20.916 0 0 1 32.113 39.695 A 24.375 24.375 0 0 1 31.301 40.101 A 21.833 21.833 0 0 1 22.358 42.192 A 25.384 25.384 0 0 1 21.701 42.201 A 22.881 22.881 0 0 1 14.545 41.107 A 20.697 20.697 0 0 1 10.701 39.401 Q 5.801 36.601 2.901 31.801 A 20.281 20.281 0 0 1 0.001 21.147 A 23.9 23.9 0 0 1 0.001 21.101 A 21.231 21.231 0 0 1 1.13 14.099 A 19.317 19.317 0 0 1 2.901 10.351 Q 5.801 5.601 10.701 2.801 A 21.437 21.437 0 0 1 20.381 0.034 A 25.758 25.758 0 0 1 21.701 0.001 Q 26.901 0.001 31.301 2.101 A 21.768 21.768 0 0 1 36.954 5.94 A 20.086 20.086 0 0 1 38.601 7.701 Z M 400.801 41.201 L 397.601 41.201 L 412.201 1.001 L 415.401 1.001 L 430.001 41.201 L 426.801 41.201 L 413.801 5.401 L 411.901 10.601 L 423.001 41.201 L 419.801 41.201 L 418.101 36.401 L 402.501 36.401 L 400.801 41.201 Z M 115.101 41.201 L 112.101 41.201 L 112.101 1.001 L 115.101 1.001 L 132.301 24.901 L 132.301 1.001 L 135.301 1.001 L 135.301 41.201 L 132.301 41.201 L 115.101 17.301 L 115.101 41.201 Z M 292.601 26.201 L 292.601 1.001 L 295.601 1.001 L 295.601 26.101 Q 295.601 31.627 298.472 34.879 A 10.481 10.481 0 0 0 299.451 35.851 Q 303.301 39.201 308.601 39.201 Q 313.901 39.201 317.751 35.851 Q 321.56 32.537 321.601 26.238 A 21.109 21.109 0 0 0 321.601 26.101 L 321.601 1.001 L 324.601 1.001 L 324.601 26.201 A 20.913 20.913 0 0 1 324.152 30.228 A 14.985 14.985 0 0 1 322.351 34.851 Q 320.201 38.401 316.601 40.301 A 16.584 16.584 0 0 1 309.688 42.171 A 19.717 19.717 0 0 1 308.601 42.201 Q 304.201 42.201 300.551 40.301 Q 296.901 38.401 294.751 34.801 A 14.903 14.903 0 0 1 292.903 29.754 A 20.026 20.026 0 0 1 292.601 26.201 Z M 54.701 41.201 L 51.701 41.201 L 51.701 1.001 L 54.701 1.001 L 54.701 16.301 L 70.301 16.301 L 70.301 1.001 L 73.301 1.001 L 73.301 41.201 L 70.301 41.201 L 70.301 25.901 L 54.701 25.901 L 54.701 41.201 Z M 476.301 31.101 L 479.301 30.701 A 8.344 8.344 0 0 0 482.559 36.309 A 11.583 11.583 0 0 0 483.301 36.851 A 13.227 13.227 0 0 0 487.697 38.718 Q 489.481 39.137 491.558 39.192 A 24.044 24.044 0 0 0 492.201 39.201 A 20.72 20.72 0 0 0 496.164 38.843 Q 498.532 38.382 500.404 37.324 A 11.824 11.824 0 0 0 501.601 36.551 Q 505.201 33.901 505.201 29.301 A 9.679 9.679 0 0 0 504.825 26.538 A 7.54 7.54 0 0 0 502.901 23.301 Q 501.014 21.413 497.712 20.334 A 22.162 22.162 0 0 0 496.201 19.901 L 490.101 18.301 A 23.858 23.858 0 0 1 488.042 17.662 Q 486.11 16.958 484.901 16.051 A 4.616 4.616 0 0 1 483.686 14.734 Q 483.119 13.786 483.102 12.579 A 5.324 5.324 0 0 1 483.101 12.501 A 4.659 4.659 0 0 1 484.784 8.839 A 6.879 6.879 0 0 1 485.651 8.201 Q 487.882 6.801 491.222 6.626 A 18.688 18.688 0 0 1 492.201 6.601 A 15.632 15.632 0 0 1 494.959 6.831 Q 496.534 7.113 497.822 7.742 A 9.184 9.184 0 0 1 498.401 8.051 A 7.216 7.216 0 0 1 499.749 9.04 A 4.531 4.531 0 0 1 501.201 11.801 L 498.301 12.201 A 2.499 2.499 0 0 0 496.971 10.47 Q 495.438 9.601 492.201 9.601 A 17.005 17.005 0 0 0 490.487 9.681 Q 489.648 9.767 488.947 9.942 A 6.975 6.975 0 0 0 487.751 10.351 A 3.95 3.95 0 0 0 486.993 10.793 Q 486.101 11.471 486.101 12.501 Q 486.101 13.275 486.916 13.865 A 3.685 3.685 0 0 0 487.201 14.051 A 6.199 6.199 0 0 0 487.807 14.357 Q 489.11 14.941 492.001 15.801 L 497.301 17.301 Q 502.501 18.801 505.351 21.701 A 9.777 9.777 0 0 1 508.044 27.196 A 13.634 13.634 0 0 1 508.201 29.301 A 12.978 12.978 0 0 1 507.495 33.677 A 11.009 11.009 0 0 1 503.751 38.751 Q 499.301 42.201 492.201 42.201 A 23.146 23.146 0 0 1 487.299 41.708 A 16.196 16.196 0 0 1 481.251 39.101 A 12.752 12.752 0 0 1 478.248 36.165 A 10.793 10.793 0 0 1 476.301 31.101 Z M 482.801 30.201 L 485.801 29.801 A 2.003 2.003 0 0 0 486.467 31.135 Q 486.756 31.407 487.169 31.637 A 5.243 5.243 0 0 0 487.601 31.851 A 7.535 7.535 0 0 0 489.011 32.3 Q 489.731 32.46 490.586 32.535 A 18.582 18.582 0 0 0 492.201 32.601 A 22.081 22.081 0 0 0 494.294 32.51 Q 498.601 32.097 498.601 29.801 A 2.223 2.223 0 0 0 498.131 28.447 Q 497.897 28.134 497.547 27.842 A 4.923 4.923 0 0 0 497.301 27.651 Q 496.307 26.924 494.084 26.168 A 37.4 37.4 0 0 0 492.601 25.701 L 487.501 24.201 Q 482.801 22.801 479.651 20.001 A 9.231 9.231 0 0 1 476.563 13.785 A 12.914 12.914 0 0 1 476.501 12.501 Q 476.501 8.901 478.551 6.101 Q 480.601 3.301 484.201 1.651 A 18.281 18.281 0 0 1 490.281 0.082 A 22.139 22.139 0 0 1 492.201 0.001 A 21.822 21.822 0 0 1 497.141 0.532 A 15.867 15.867 0 0 1 502.901 3.101 Q 507.201 6.201 507.801 11.101 L 504.801 11.401 A 7.959 7.959 0 0 0 501.571 5.745 A 11.054 11.054 0 0 0 500.951 5.301 Q 497.698 3.132 492.8 3.008 A 23.71 23.71 0 0 0 492.201 3.001 A 18.432 18.432 0 0 0 488.12 3.429 A 13.07 13.07 0 0 0 483.101 5.701 A 9.848 9.848 0 0 0 480.925 7.897 A 7.807 7.807 0 0 0 479.501 12.501 A 9.137 9.137 0 0 0 479.785 14.843 A 6.384 6.384 0 0 0 481.901 18.201 A 13.377 13.377 0 0 0 484.131 19.683 Q 485.273 20.298 486.67 20.823 A 29.591 29.591 0 0 0 488.701 21.501 L 494.201 23.101 A 21.523 21.523 0 0 1 496.994 24.127 Q 500.074 25.532 501.095 27.55 A 4.697 4.697 0 0 1 501.601 29.701 A 4.846 4.846 0 0 1 501.003 32.12 Q 500.485 33.039 499.52 33.739 A 6.922 6.922 0 0 1 499.051 34.051 A 9.587 9.587 0 0 1 496.536 35.096 Q 495.359 35.412 493.96 35.53 A 20.927 20.927 0 0 1 492.201 35.601 Q 488.201 35.601 485.651 34.101 A 7.23 7.23 0 0 1 484.227 33.026 A 4.706 4.706 0 0 1 482.801 30.201 Z M 388.101 41.201 L 367.201 41.201 L 367.201 1.001 L 370.201 1.001 L 370.201 31.601 L 388.101 31.601 L 388.101 34.601 L 370.201 34.601 L 370.201 38.201 L 388.101 38.201 L 388.101 41.201 Z M 299.201 26.201 L 299.201 1.001 L 302.201 1.001 L 302.201 26.101 A 9.59 9.59 0 0 0 302.366 27.945 Q 302.761 29.958 304.101 31.051 A 6.866 6.866 0 0 0 308.437 32.599 A 8.613 8.613 0 0 0 308.601 32.601 Q 311.201 32.601 313.101 31.051 A 4.796 4.796 0 0 0 314.611 28.802 Q 314.879 28.004 314.963 27.026 A 10.844 10.844 0 0 0 315.001 26.101 L 315.001 1.001 L 318.001 1.001 L 318.001 26.201 A 13.04 13.04 0 0 1 317.665 28.97 Q 317.244 30.721 316.303 32.009 A 7.279 7.279 0 0 1 315.151 33.251 A 9.742 9.742 0 0 1 308.66 35.6 A 12.235 12.235 0 0 1 308.601 35.601 Q 304.801 35.601 302.001 33.201 A 7.733 7.733 0 0 1 299.506 28.998 A 12.047 12.047 0 0 1 299.201 26.201 Z M 277.501 12.701 L 275.001 14.401 A 11.281 11.281 0 0 0 266.77 9.696 A 16.023 16.023 0 0 0 265.001 9.601 A 13.669 13.669 0 0 0 260.665 10.262 A 11.533 11.533 0 0 0 256.351 12.851 A 10.774 10.774 0 0 0 252.906 20.713 A 14.202 14.202 0 0 0 252.901 21.101 A 11.421 11.421 0 0 0 253.846 25.792 A 11.049 11.049 0 0 0 256.351 29.301 A 11.789 11.789 0 0 0 263.963 32.567 A 15.59 15.59 0 0 0 265.001 32.601 Q 271.501 32.601 275.001 27.801 L 278.501 27.801 Q 276.601 31.301 273.051 33.451 A 14.952 14.952 0 0 1 266.111 35.567 A 18.13 18.13 0 0 1 265.001 35.601 A 16.665 16.665 0 0 1 260.33 34.966 A 14.46 14.46 0 0 1 257.301 33.701 Q 253.901 31.801 251.901 28.501 A 13.914 13.914 0 0 1 249.905 21.483 A 16.585 16.585 0 0 1 249.901 21.101 A 14.436 14.436 0 0 1 250.846 15.841 A 13.602 13.602 0 0 1 251.901 13.701 Q 253.901 10.401 257.301 8.501 A 15.038 15.038 0 0 1 263.42 6.667 A 18.396 18.396 0 0 1 265.001 6.601 A 16.74 16.74 0 0 1 269.653 7.229 A 14.725 14.725 0 0 1 272.251 8.251 A 14.518 14.518 0 0 1 276.566 11.531 A 13.84 13.84 0 0 1 277.501 12.701 Z M 33.401 11.801 L 31.001 13.601 A 11.131 11.131 0 0 0 23.484 9.698 A 15.813 15.813 0 0 0 21.701 9.601 A 13.669 13.669 0 0 0 17.365 10.262 A 11.533 11.533 0 0 0 13.051 12.851 A 10.774 10.774 0 0 0 9.606 20.713 A 14.202 14.202 0 0 0 9.601 21.101 A 11.421 11.421 0 0 0 10.546 25.792 A 11.049 11.049 0 0 0 13.051 29.301 A 11.789 11.789 0 0 0 20.663 32.567 A 15.59 15.59 0 0 0 21.701 32.601 Q 27.601 32.601 31.001 28.601 L 33.401 30.401 A 13.968 13.968 0 0 1 28.916 33.928 A 16.359 16.359 0 0 1 28.351 34.201 A 15.567 15.567 0 0 1 22.371 35.588 A 18.13 18.13 0 0 1 21.701 35.601 A 16.665 16.665 0 0 1 17.03 34.966 A 14.46 14.46 0 0 1 14.001 33.701 Q 10.601 31.801 8.601 28.501 A 13.914 13.914 0 0 1 6.605 21.483 A 16.585 16.585 0 0 1 6.601 21.101 A 14.436 14.436 0 0 1 7.546 15.841 A 13.602 13.602 0 0 1 8.601 13.701 Q 10.601 10.401 14.001 8.501 A 15.038 15.038 0 0 1 20.12 6.667 A 18.396 18.396 0 0 1 21.701 6.601 A 16.201 16.201 0 0 1 26.692 7.356 A 14.942 14.942 0 0 1 28.351 8.001 Q 31.401 9.401 33.401 11.801 Z M 166.201 4.001 L 159.501 4.001 L 159.501 7.601 L 166.501 7.601 A 19.566 19.566 0 0 1 171.276 8.228 A 14.17 14.17 0 0 1 177.201 11.401 A 12.231 12.231 0 0 1 181.271 20.086 A 16.733 16.733 0 0 1 181.301 21.101 A 14.521 14.521 0 0 1 180.616 25.661 A 11.906 11.906 0 0 1 177.151 30.901 A 14.373 14.373 0 0 1 169.788 34.34 A 19.915 19.915 0 0 1 166.501 34.601 L 159.501 34.601 L 159.501 38.201 L 166.201 38.201 A 24.719 24.719 0 0 0 171.143 37.728 A 18.879 18.879 0 0 0 176.001 36.051 Q 180.201 33.901 182.551 30.001 A 16.473 16.473 0 0 0 184.842 22.655 A 20.235 20.235 0 0 0 184.901 21.101 A 18.721 18.721 0 0 0 184.281 16.191 A 15.475 15.475 0 0 0 182.551 12.151 Q 180.201 8.301 176.001 6.151 A 19.267 19.267 0 0 0 170.204 4.303 A 25.503 25.503 0 0 0 166.201 4.001 Z M 208.445 41.107 A 22.881 22.881 0 0 0 215.601 42.201 A 25.758 25.758 0 0 0 216.921 42.167 A 21.437 21.437 0 0 0 226.601 39.401 Q 231.501 36.601 234.401 31.801 A 20.077 20.077 0 0 0 235.531 29.648 A 20.606 20.606 0 0 0 237.301 21.101 A 24.115 24.115 0 0 0 237.274 19.964 A 19.94 19.94 0 0 0 234.401 10.351 Q 231.501 5.601 226.601 2.801 A 20.697 20.697 0 0 0 222.757 1.094 A 22.881 22.881 0 0 0 215.601 0.001 A 25.758 25.758 0 0 0 214.281 0.034 A 21.437 21.437 0 0 0 204.601 2.801 Q 199.701 5.601 196.801 10.351 A 19.317 19.317 0 0 0 195.03 14.099 A 21.231 21.231 0 0 0 193.901 21.101 A 23.9 23.9 0 0 0 193.901 21.147 A 20.281 20.281 0 0 0 196.801 31.801 Q 199.701 36.601 204.601 39.401 A 20.697 20.697 0 0 0 208.445 41.107 Z M 458.201 41.201 L 441.601 41.201 L 441.601 1.001 L 457.401 1.001 Q 462.301 1.101 465.801 4.351 A 10.696 10.696 0 0 1 469.039 10.367 A 15.69 15.69 0 0 1 469.301 13.301 A 15.758 15.758 0 0 1 469.088 15.932 A 13.6 13.6 0 0 1 468.851 17.051 A 13.544 13.544 0 0 1 468.152 19.101 A 11.45 11.45 0 0 1 467.601 20.201 A 11.781 11.781 0 0 1 470.084 25.805 A 16.146 16.146 0 0 1 470.301 28.501 A 16.79 16.79 0 0 1 469.9 32.283 Q 469.269 35.013 467.644 36.959 A 10.285 10.285 0 0 1 466.751 37.901 Q 463.201 41.201 458.201 41.201 Z M 166.501 41.201 L 156.501 41.201 L 156.501 1.001 L 166.501 1.001 Q 172.801 1.101 177.601 3.701 Q 182.401 6.301 185.151 10.801 A 18.834 18.834 0 0 1 187.827 19.232 A 23.203 23.203 0 0 1 187.901 21.101 A 20.882 20.882 0 0 1 186.944 27.508 A 18.522 18.522 0 0 1 185.151 31.451 Q 182.401 36.001 177.551 38.601 Q 172.701 41.201 166.501 41.201 Z M 234.301 21.101 A 18.814 18.814 0 0 0 233.504 15.543 A 16.444 16.444 0 0 0 231.851 11.851 Q 229.401 7.801 225.151 5.401 A 18.729 18.729 0 0 0 216.92 3.039 A 22.575 22.575 0 0 0 215.601 3.001 A 20.104 20.104 0 0 0 209.391 3.937 A 18.047 18.047 0 0 0 206.051 5.401 Q 201.801 7.801 199.351 11.851 A 17.062 17.062 0 0 0 196.964 19.464 A 20.974 20.974 0 0 0 196.901 21.101 A 18.227 18.227 0 0 0 198.007 27.502 A 16.978 16.978 0 0 0 199.351 30.301 Q 201.801 34.401 206.051 36.801 A 18.729 18.729 0 0 0 214.282 39.163 A 22.575 22.575 0 0 0 215.601 39.201 A 20.104 20.104 0 0 0 221.811 38.265 A 18.047 18.047 0 0 0 225.151 36.801 Q 229.401 34.401 231.851 30.301 A 17.446 17.446 0 0 0 234.291 21.734 A 20.853 20.853 0 0 0 234.301 21.101 Z M 458.101 19.001 L 444.601 19.001 L 444.601 22.601 L 458.201 22.601 A 6.317 6.317 0 0 1 460.001 22.845 A 4.852 4.852 0 0 1 462.201 24.201 A 5.384 5.384 0 0 1 463.52 26.756 A 7.94 7.94 0 0 1 463.701 28.501 Q 463.701 31.301 462.201 32.951 A 4.959 4.959 0 0 1 458.958 34.56 A 6.92 6.92 0 0 1 458.201 34.601 L 444.601 34.601 L 444.601 38.201 L 458.101 38.201 A 10.004 10.004 0 0 0 461.878 37.503 A 9.338 9.338 0 0 0 464.601 35.801 Q 467.301 33.401 467.301 28.501 Q 467.301 24.924 465.737 22.679 A 7.248 7.248 0 0 0 464.601 21.401 A 9.425 9.425 0 0 0 458.219 19.001 A 11.951 11.951 0 0 0 458.101 19.001 Z M 210.93 34.966 A 16.665 16.665 0 0 0 215.601 35.601 A 18.396 18.396 0 0 0 217.182 35.534 A 15.038 15.038 0 0 0 223.301 33.701 Q 226.701 31.801 228.701 28.501 A 13.602 13.602 0 0 0 229.756 26.36 A 14.436 14.436 0 0 0 230.701 21.101 A 16.585 16.585 0 0 0 230.697 20.718 A 13.914 13.914 0 0 0 228.701 13.701 Q 226.701 10.401 223.301 8.501 A 14.46 14.46 0 0 0 220.272 7.236 A 16.665 16.665 0 0 0 215.601 6.601 A 18.396 18.396 0 0 0 214.02 6.667 A 15.038 15.038 0 0 0 207.901 8.501 Q 204.501 10.401 202.501 13.701 A 13.602 13.602 0 0 0 201.446 15.841 A 14.436 14.436 0 0 0 200.501 21.101 A 16.585 16.585 0 0 0 200.505 21.483 A 13.914 13.914 0 0 0 202.501 28.501 Q 204.501 31.801 207.901 33.701 A 14.46 14.46 0 0 0 210.93 34.966 Z M 393.801 41.201 L 390.601 41.201 L 405.201 1.001 L 408.401 1.001 L 393.801 41.201 Z M 141.901 41.201 L 138.901 41.201 L 138.901 1.001 L 141.901 1.001 L 141.901 41.201 Z M 48.101 41.201 L 45.101 41.201 L 45.101 1.001 L 48.101 1.001 L 48.101 41.201 Z M 79.901 41.201 L 76.901 41.201 L 76.901 1.001 L 79.901 1.001 L 79.901 41.201 Z M 97.501 41.201 L 94.501 41.201 L 94.501 1.001 L 97.501 1.001 L 97.501 41.201 Z M 90.901 41.201 L 87.901 41.201 L 87.901 1.001 L 90.901 1.001 L 90.901 41.201 Z M 108.501 41.201 L 105.501 41.201 L 105.501 1.001 L 108.501 1.001 L 108.501 41.201 Z M 152.901 41.201 L 149.901 41.201 L 149.901 1.001 L 152.901 1.001 L 152.901 41.201 Z M 363.601 41.201 L 360.601 41.201 L 360.601 1.001 L 363.601 1.001 L 363.601 41.201 Z M 438.001 41.201 L 435.001 41.201 L 435.001 1.001 L 438.001 1.001 L 438.001 41.201 Z M 227.701 21.101 Q 227.701 16.101 224.251 12.851 A 11.846 11.846 0 0 0 216.796 9.645 A 15.712 15.712 0 0 0 215.601 9.601 A 13.669 13.669 0 0 0 211.265 10.262 A 11.533 11.533 0 0 0 206.951 12.851 A 10.774 10.774 0 0 0 203.506 20.713 A 14.202 14.202 0 0 0 203.501 21.101 A 11.421 11.421 0 0 0 204.446 25.792 A 11.049 11.049 0 0 0 206.951 29.301 A 11.789 11.789 0 0 0 214.563 32.567 A 15.59 15.59 0 0 0 215.601 32.601 A 13.47 13.47 0 0 0 219.954 31.923 A 11.501 11.501 0 0 0 224.251 29.301 A 10.846 10.846 0 0 0 227.698 21.405 A 13.71 13.71 0 0 0 227.701 21.101 Z M 132.301 36.101 L 132.301 30.001 L 115.101 6.101 L 115.101 12.201 L 132.301 36.101 Z M 166.201 10.601 L 159.501 10.601 L 159.501 31.601 L 166.201 31.601 Q 171.801 31.601 175.051 28.801 A 9.172 9.172 0 0 0 178.187 22.864 A 13.158 13.158 0 0 0 178.301 21.101 A 11.863 11.863 0 0 0 177.846 17.729 A 8.944 8.944 0 0 0 175.051 13.401 A 10.974 10.974 0 0 0 170.687 11.146 Q 169.05 10.703 167.112 10.62 A 21.268 21.268 0 0 0 166.201 10.601 Z M 457.201 4.001 L 444.601 4.001 L 444.601 7.601 L 457.401 7.601 A 6.332 6.332 0 0 1 459.194 7.921 A 4.984 4.984 0 0 1 461.251 9.251 A 5.28 5.28 0 0 1 462.593 12.004 A 7.433 7.433 0 0 1 462.701 13.301 Q 462.701 15.201 461.901 16.501 A 13.983 13.983 0 0 1 464.312 17.508 A 12.112 12.112 0 0 1 465.301 18.101 Q 466.301 16.001 466.301 13.301 Q 466.301 8.701 463.651 6.351 Q 461.001 4.001 457.201 4.001 Z M 285.601 21.201 L 266.901 21.201 L 266.901 18.201 L 285.601 18.201 L 285.601 21.201 Z M 458.101 25.601 L 444.601 25.601 L 444.601 31.601 L 458.101 31.601 A 2.852 2.852 0 0 0 459.084 31.436 A 2.53 2.53 0 0 0 459.951 30.901 Q 460.701 30.201 460.701 28.501 A 5.371 5.371 0 0 0 460.648 27.718 Q 460.502 26.728 459.951 26.251 A 2.643 2.643 0 0 0 458.436 25.616 A 3.465 3.465 0 0 0 458.101 25.601 Z M 457.201 10.601 L 444.601 10.601 L 444.601 16.001 L 458.201 16.001 L 458.801 16.001 A 4.196 4.196 0 0 0 459.361 15.07 A 4.851 4.851 0 0 0 459.451 14.851 A 3.541 3.541 0 0 0 459.634 14.162 Q 459.701 13.765 459.701 13.301 A 4.425 4.425 0 0 0 459.641 12.545 Q 459.571 12.142 459.42 11.827 A 1.896 1.896 0 0 0 459.001 11.251 A 2.399 2.399 0 0 0 457.695 10.636 A 3.296 3.296 0 0 0 457.201 10.601 Z M 54.701 19.301 L 54.701 22.901 L 70.301 22.901 L 70.301 19.301 L 54.701 19.301 Z M 410.301 15.001 L 406.001 26.801 L 414.601 26.801 L 410.301 15.001 Z M 404.901 29.801 L 403.601 33.401 L 417.001 33.401 L 415.701 29.801 L 404.901 29.801 Z"
                vectorEffect="non-scaling-stroke"
              />
            </g>
          </svg>
          {/* <nav className="flex justify-center pt-6">
            <ul className="flex gap-6 text-[24px] font-russo font-extrabold">
              <li>
                <Link href="#about" prefetch>
                  about
                </Link>
              </li>
              <li>
                <Link href="#portfolio" prefetch>
                  portfolio
                </Link>
              </li>

              <li>
                <Link href="#contact" prefetch>
                  contact
                </Link>
              </li>
            </ul>
          </nav> */}
        </header>
        {children}
      </body>
    </html>
  );
}
