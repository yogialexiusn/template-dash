const icons = {
  folder: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
      <path
        fill="#6C87FE"
        d="M57.5 31h-23c-1.4 0-2.5-1.1-2.5-2.5v-10c0-1.4 1.1-2.5 2.5-2.5h23c1.4 0 2.5 1.1 2.5 2.5v10c0 1.4-1.1 2.5-2.5 2.5z"
      ></path>
      <path
        fill="#8AA3FF"
        d="M59.8 61H12.2C8.8 61 6 58 6 54.4V17.6C6 14 8.8 11 12.2 11h18.5c1.7 0 3.3 1 4.1 2.6L38 24h21.8c3.4 0 6.2 2.4 6.2 6v24.4c0 3.6-2.8 6.6-6.2 6.6z"
      ></path>
      <path fill="#798BFF" d="M7.7 59c2.2 2.4 4.7 2 6.3 2h45c1.1 0 3.2.1 5.3-2H7.7z"></path>
    </svg>
  ),
  folderSecure: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
      <rect width="28" height="15" x="32" y="16" fill="#6c87fe" rx="2.5" ry="2.5"></rect>
      <path
        fill="#8aa3ff"
        d="M59.778 61H12.222A6.421 6.421 0 016 54.396V17.604A6.421 6.421 0 0112.222 11h18.476a4.671 4.671 0 014.113 2.564L38 24h21.778A5.91 5.91 0 0166 30v24.396A6.421 6.421 0 0159.778 61z"
      ></path>
      <path fill="#798bff" d="M8.015 59c2.169 2.383 4.698 2.016 6.195 2h44.57a6.277 6.277 0 005.207-2z"></path>
      <path
        fill="#4b66bc"
        d="M42.223 40H41.5v-2.556a5.5 5.5 0 00-11 0V40h-.723A2.801 2.801 0 0027 42.818v6.364A2.801 2.801 0 0029.777 52h12.446A2.801 2.801 0 0045 49.182v-6.364A2.801 2.801 0 0042.223 40zM36 48a2 2 0 112-2 2.002 2.002 0 01-2 2zm3.5-8h-7v-2.556a3.5 3.5 0 017 0z"
      ></path>
    </svg>
  ),
  folderShared: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
      <rect width="28" height="15" x="32" y="16" fill="#6c87fe" rx="2.5" ry="2.5"></rect>
      <path
        fill="#8aa3ff"
        d="M59.778 61H12.222A6.421 6.421 0 016 54.396V17.604A6.421 6.421 0 0112.222 11h18.476a4.671 4.671 0 014.113 2.564L38 24h21.778A5.91 5.91 0 0166 30v24.396A6.421 6.421 0 0159.778 61z"
      ></path>
      <path fill="#798bff" d="M7.745 58.98C9.935 61.387 12.488 61.017 14 61h45a6.337 6.337 0 005.256-2.02z"></path>
      <path
        fill="#4b66bc"
        d="M29.63 37.36a3.024 3.024 0 01-.86-2.39A4.375 4.375 0 0132.997 31h.008a4.36 4.36 0 014.22 3.912 3.053 3.053 0 01-.855 2.448 4.416 4.416 0 01-3.139 1.17c-.077 0-.153-.002-.23-.005a4.519 4.519 0 01-3.37-1.165zm13.837 2.755a1 1 0 10-.934 1.77c.72.38 1.466 2.126 1.467 4.39V48a1 1 0 002 0v-1.726c-.001-2.93-.995-5.347-2.533-6.159zm-3.302-2.718c-.144.084-.29.168-.432.254a1 1 0 00.522 1.854.989.989 0 00.52-.147c.129-.078.26-.154.392-.23a4.231 4.231 0 002.146-2.124.984.984 0 00.031-.104 3.841 3.841 0 00-2.844-4.365 1 1 0 00-.492 1.94 1.877 1.877 0 011.4 1.909 2.835 2.835 0 01-1.243 1.013zM36.5 41h-7c-2.523 0-4.5 2.782-4.5 6.333V48.5a.836.836 0 00.059.291.973.973 0 00.35.495C26.466 50.281 29.462 51 33 51s6.535-.719 7.59-1.714a.973.973 0 00.35-.495.836.836 0 00.06-.291v-1.167C41 43.783 39.023 41 36.5 41z"
      ></path>
    </svg>
  ),
  folderAlt: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
      <rect width="28" height="15" x="32" y="16" fill="#f29611" rx="2.5" ry="2.5"></rect>
      <path
        fill="#ffb32c"
        d="M59.778 61H12.222A6.421 6.421 0 016 54.396V17.604A6.421 6.421 0 0112.222 11h18.476a4.671 4.671 0 014.113 2.564L38 24h21.778A5.91 5.91 0 0166 30v24.396A6.421 6.421 0 0159.778 61z"
      ></path>
      <path fill="#f2a222" d="M8.015 59c2.169 2.383 4.698 2.016 6.195 2h44.57a6.277 6.277 0 005.207-2z"></path>
    </svg>
  ),
  folderSecureAlt: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
      <rect width="28" height="15" x="32" y="16" fill="#f29611" rx="2.5" ry="2.5"></rect>
      <path
        fill="#ffb32c"
        d="M59.778 61H12.222A6.421 6.421 0 016 54.396V17.604A6.421 6.421 0 0112.222 11h18.476a4.671 4.671 0 014.113 2.564L38 24h21.778A5.91 5.91 0 0166 30v24.396A6.421 6.421 0 0159.778 61z"
      ></path>
      <path fill="#f2a222" d="M8.015 59c2.169 2.383 4.698 2.016 6.195 2h44.57a6.277 6.277 0 005.207-2z"></path>
      <path
        fill="#c67424"
        d="M42.223 40H41.5v-2.556a5.5 5.5 0 00-11 0V40h-.723A2.801 2.801 0 0027 42.818v6.364A2.801 2.801 0 0029.777 52h12.446A2.801 2.801 0 0045 49.182v-6.364A2.801 2.801 0 0042.223 40zM36 48a2 2 0 112-2 2.002 2.002 0 01-2 2zm3.5-8h-7v-2.556a3.5 3.5 0 017 0z"
      ></path>
    </svg>
  ),
  folderSharedAlt: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
      <rect width="28" height="15" x="32" y="16" fill="#f29611" rx="2.5" ry="2.5"></rect>
      <path
        fill="#ffb32c"
        d="M59.778 61H12.222A6.421 6.421 0 016 54.396V17.604A6.421 6.421 0 0112.222 11h18.476a4.671 4.671 0 014.113 2.564L38 24h21.778A5.91 5.91 0 0166 30v24.396A6.421 6.421 0 0159.778 61z"
      ></path>
      <path fill="#f2a222" d="M8.015 59c2.169 2.383 4.698 2.016 6.195 2h44.57a6.277 6.277 0 005.207-2z"></path>
      <path
        fill="#c67424"
        d="M29.63 37.36a3.024 3.024 0 01-.86-2.39A4.375 4.375 0 0132.997 31h.008a4.36 4.36 0 014.22 3.912 3.053 3.053 0 01-.855 2.448 4.416 4.416 0 01-3.139 1.17c-.077 0-.153-.002-.23-.005a4.519 4.519 0 01-3.37-1.165zm13.837 2.74a1 1 0 10-.934 1.77c.72.38 1.466 2.126 1.467 4.39v1.726a1 1 0 002 0V46.26c-.001-2.93-.995-5.348-2.533-6.16zm-3.302-2.718c-.144.084-.29.168-.432.255a1 1 0 00.522 1.853.989.989 0 00.52-.147c.129-.078.26-.154.392-.23a4.231 4.231 0 002.146-2.124.984.984 0 00.031-.104A3.841 3.841 0 0040.5 32.52a1 1 0 10-.492 1.94 1.877 1.877 0 011.4 1.909 2.835 2.835 0 01-1.243 1.013zM36.5 41h-7c-2.523 0-4.5 2.782-4.5 6.333V48.5a.836.836 0 00.059.291.973.973 0 00.35.495C26.466 50.281 29.462 51 33 51s6.535-.719 7.59-1.714a.973.973 0 00.35-.495.836.836 0 00.06-.291v-1.167C41 43.783 39.023 41 36.5 41z"
      ></path>
    </svg>
  ),
  fileCode: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
      <path fill="#0089ff" d="M50 61H22a6 6 0 01-6-6V22l9-11h25a6 6 0 016 6v38a6 6 0 01-6 6z"></path>
      <path fill="#9bd5f9" d="M25 20.556A1.444 1.444 0 0123.556 22H16l9-11z"></path>
      <path
        fill="#fff"
        d="M44.709 39.72a2.007 2.007 0 01-.672-1.13 13.652 13.652 0 01-.177-2.588 20.143 20.143 0 00-.141-2.699 2.831 2.831 0 00-.568-1.365 2.392 2.392 0 00-1.104-.77 4.722 4.722 0 00-1.48-.168h-.583v1.636h.323a2.236 2.236 0 011.328.276 1.395 1.395 0 01.412.974q.052.396.052 2.428a7.437 7.437 0 00.49 3.183 3.521 3.521 0 001.688 1.516 3.246 3.246 0 00-1.417 1.078 4.133 4.133 0 00-.667 1.85q-.094.698-.094 3.303a2.866 2.866 0 01-.354 1.755 1.951 1.951 0 01-1.438.391h-.323v1.636h.584a5.15 5.15 0 001.292-.115 2.326 2.326 0 001.589-1.328 4.334 4.334 0 00.349-1.412q.052-.552.062-2.292a12.642 12.642 0 01.177-2.454 2.007 2.007 0 01.672-1.13 2.078 2.078 0 011.308-.438V40.16a2.078 2.078 0 01-1.308-.438zM30.146 39.94a3.95 3.95 0 00.64-1.72 30.109 30.109 0 00.115-3.448 2.842 2.842 0 01.354-1.745 1.951 1.951 0 011.438-.39h.323V31h-.583a5.635 5.635 0 00-1.292.104 2.315 2.315 0 00-1.59 1.334 4.366 4.366 0 00-.348 1.406q-.052.553-.063 2.293a12.753 12.753 0 01-.177 2.458 1.982 1.982 0 01-.672 1.13 2.096 2.096 0 01-1.308.433v1.698a2.078 2.078 0 011.308.438 2.009 2.009 0 01.672 1.136 13.753 13.753 0 01.177 2.594 20.138 20.138 0 00.141 2.699 2.797 2.797 0 00.568 1.36 2.477 2.477 0 001.104.776 4.712 4.712 0 001.48.167h.584V49.39h-.323a2.203 2.203 0 01-1.329-.281 1.464 1.464 0 01-.422-.99q-.041-.386-.042-2.418a7.392 7.392 0 00-.515-3.224 3.179 3.179 0 00-1.662-1.464 3.813 3.813 0 001.422-1.073z"
      ></path>
    </svg>
  ),
  fileDoc: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
      <path fill="#599def" d="M50 61H22a6 6 0 01-6-6V22l9-11h25a6 6 0 016 6v38a6 6 0 01-6 6z"></path>
      <path fill="#c2e1ff" d="M25 20.556A1.444 1.444 0 0123.556 22H16l9-11z"></path>
      <rect width="18" height="2" x="27" y="31" fill="#fff" rx="1" ry="1"></rect>
      <rect width="18" height="2" x="27" y="36" fill="#fff" rx="1" ry="1"></rect>
      <rect width="18" height="2" x="27" y="41" fill="#fff" rx="1" ry="1"></rect>
      <rect width="12" height="2" x="27" y="46" fill="#fff" rx="1" ry="1"></rect>
    </svg>
  ),
  fileMedia: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
      <path fill="#755de0" d="M50 61H22a6 6 0 01-6-6V22l9-11h25a6 6 0 016 6v38a6 6 0 01-6 6z"></path>
      <path
        fill="#fff"
        d="M27.222 43H44.71s2.325-.281.735-1.897l-5.603-5.498s-1.512-1.792-3.336.793L33.56 40.47a.689.689 0 01-1.019.048l-1.9-1.639s-1.329-1.587-2.475 0c-.656.908-2.026 2.849-2.026 2.849S25.427 43 27.222 43z"
      ></path>
      <path fill="#b5b3ff" d="M25 20.556A1.444 1.444 0 0123.556 22H16l9-11z"></path>
    </svg>
  ),
  fileMovie: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
      <path fill="#f74141" d="M50 61H22a6 6 0 01-6-6V22l9-11h25a6 6 0 016 6v38a6 6 0 01-6 6z"></path>
      <path fill="#ffa9a9" d="M25 20.556A1.444 1.444 0 0123.556 22H16l9-11z"></path>
      <path
        fill="#fff"
        d="M46 46.5v-13a3.504 3.504 0 00-3.5-3.5h-13a3.504 3.504 0 00-3.5 3.5v13a3.504 3.504 0 003.5 3.5h13a3.504 3.504 0 003.5-3.5zM40 45v3h-3v-3zm-3-2v-6h7v6zm0-8v-3h3v3zm-2-3v3h-3v-3zm0 5v6h-7v-6zm0 8v3h-3v-3zm7.5 3H42v-3h2v1.5a1.502 1.502 0 01-1.5 1.5zM44 33.5V35h-2v-3h.5a1.502 1.502 0 011.5 1.5zM29.5 32h.5v3h-2v-1.5a1.502 1.502 0 011.5-1.5zM28 46.5V45h2v3h-.5a1.502 1.502 0 01-1.5-1.5z"
      ></path>
    </svg>
  ),
  fileMusic: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
      <path fill="#5a5aff" d="M50 61H22a6 6 0 01-6-6V22l9-11h25a6 6 0 016 6v38a6 6 0 01-6 6z"></path>
      <path fill="#b8b8ff" d="M25 20.556A1.444 1.444 0 0123.556 22H16l9-11z"></path>
      <path
        fill="#f3f3f3"
        d="M44.647 30.237a1.006 1.006 0 00-.811-.223l-12 2A1 1 0 0031 33v9.556A3.954 3.954 0 0029 42a4 4 0 104 4V33.847l10-1.666v8.375A3.954 3.954 0 0041 40a4 4 0 104 4V31a.999.999 0 00-.353-.763zM29 48a2 2 0 112-2 2.002 2.002 0 01-2 2zm12-2a2 2 0 112-2 2.002 2.002 0 01-2 2z"
      ></path>
    </svg>
  ),
  filePDF: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
      <path fill="#f26b6b" d="M50 61H22a6 6 0 01-6-6V22l9-11h25a6 6 0 016 6v38a6 6 0 01-6 6z"></path>
      <path fill="#f4c9c9" d="M25 20.556A1.444 1.444 0 0123.556 22H16l9-11z"></path>
      <path
        fill="#fff"
        d="M46.334 44.538a4.326 4.326 0 00-2.528-1.429 22.436 22.436 0 00-4.561-.383 19.356 19.356 0 01-3.425-4.772 56.508 56.508 0 001.375-6.086 2.339 2.339 0 00-.462-1.845 1.943 1.943 0 00-1.516-.753h-.001a1.685 1.685 0 00-1.39.697c-1.149 1.526-.363 5.219-.194 5.946a12.612 12.612 0 00.724 2.147 33.322 33.322 0 01-2.49 6.106 20.347 20.347 0 00-5.979 3.44 2.568 2.568 0 00-.886 1.827 1.802 1.802 0 00.634 1.306 2.061 2.061 0 001.395.531 2.244 2.244 0 001.459-.546 20.068 20.068 0 004.29-5.357 20.838 20.838 0 015.938-1.186 33.75 33.75 0 004.243 3.605 2.64 2.64 0 003.416-.236 2.08 2.08 0 00-.042-3.012zM27.62 49.623a.834.834 0 01-1.084.042.42.42 0 01-.167-.27c-.002-.066.027-.315.44-.736a18.038 18.038 0 013.762-2.368 17.26 17.26 0 01-2.95 3.332zm7.283-18.775a.343.343 0 01.315-.151.6.6 0 01.465.239.853.853 0 01.168.672c-.164.92-.424 2.38-.852 4.117l-.037-.151c-.356-1.523-.609-3.996-.059-4.726zm-1.179 12.703a34.973 34.973 0 001.52-3.767 21.248 21.248 0 002.224 3.05 21.857 21.857 0 00-3.744.717zm11.706 2.97a1.308 1.308 0 01-1.695.088 33.203 33.203 0 01-3.004-2.43 20.968 20.968 0 012.835.334 2.97 2.97 0 011.74.965c.533.633.296.87.123 1.043z"
      ></path>
    </svg>
  ),
  filePPT: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
      <path fill="#f25168" d="M50 61H22a6 6 0 01-6-6V22l9-11h25a6 6 0 016 6v38a6 6 0 01-6 6z"></path>
      <path fill="#ff9fb6" d="M25 20.556A1.444 1.444 0 0123.556 22H16l9-11z"></path>
      <path
        fill="#fff"
        d="M44.14 46H27.86A1.86 1.86 0 0126 44.14v-9.28A1.86 1.86 0 0127.86 33h16.28A1.86 1.86 0 0146 34.86v9.28A1.86 1.86 0 0144.14 46zm-14.995-2h13.71A1.145 1.145 0 0044 42.855v-6.71A1.145 1.145 0 0042.855 35h-13.71A1.145 1.145 0 0028 36.145v6.71A1.145 1.145 0 0029.145 44z"
      ></path>
      <path
        fill="#fff"
        d="M36.422 34.268a.711.711 0 01-.505-.21l-2.143-2.142a.714.714 0 011.01-1.01l2.143 2.143a.714.714 0 01-.505 1.22z"
      ></path>
      <path
        fill="#fff"
        d="M36.422 34.268a.714.714 0 01-.505-1.22l2.143-2.142a.714.714 0 011.01 1.01l-2.143 2.143a.711.711 0 01-.505.209zM32.136 49.268a.705.705 0 01-.367-.102.715.715 0 01-.245-.98l2.143-3.571a.714.714 0 011.225.735l-2.143 3.57a.714.714 0 01-.613.348zM40.708 49.268a.714.714 0 01-.613-.346l-2.142-3.572a.714.714 0 011.225-.735l2.142 3.572a.714.714 0 01-.612 1.081zM35.12 37H30.9a.5.5 0 110-1h4.22a.5.5 0 110 1zM41.976 43h-4.429a.506.506 0 110-1.006h4.429a.506.506 0 110 1.006zM38.14 40h-4.163a.5.5 0 110-1h4.163a.5.5 0 110 1z"
      ></path>
    </svg>
  ),
  fileSheet: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
      <path fill="#36c684" d="M50 61H22a6 6 0 01-6-6V22l9-11h25a6 6 0 016 6v38a6 6 0 01-6 6z"></path>
      <path fill="#95e5bd" d="M25 20.556A1.444 1.444 0 0123.556 22H16l9-11z"></path>
      <path
        fill="#fff"
        d="M42 31H30a3.003 3.003 0 00-3 3v11a3.003 3.003 0 003 3h12a3.003 3.003 0 003-3V34a3.003 3.003 0 00-3-3zm-13 7h6v3h-6zm8 0h6v3h-6zm6-4v2h-6v-3h5a1.001 1.001 0 011 1zm-13-1h5v3h-6v-2a1.001 1.001 0 011-1zm-1 12v-2h6v3h-5a1.001 1.001 0 01-1-1zm13 1h-5v-3h6v2a1.001 1.001 0 01-1 1z"
      ></path>
    </svg>
  ),
  fileText: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
      <path fill="#7e95c4" d="M50 61H22a6 6 0 01-6-6V22l9-11h25a6 6 0 016 6v38a6 6 0 01-6 6z"></path>
      <path fill="#b7ccea" d="M25 20.556A1.444 1.444 0 0123.556 22H16l9-11z"></path>
      <rect width="18" height="2" x="27" y="31" fill="#fff" rx="1" ry="1"></rect>
      <rect width="18" height="2" x="27" y="35" fill="#fff" rx="1" ry="1"></rect>
      <rect width="18" height="2" x="27" y="39" fill="#fff" rx="1" ry="1"></rect>
      <rect width="14" height="2" x="27" y="43" fill="#fff" rx="1" ry="1"></rect>
      <rect width="8" height="2" x="27" y="47" fill="#fff" rx="1" ry="1"></rect>
    </svg>
  ),
  fileZip: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
      <rect width="40" height="44" x="16" y="14" fill="#7e95c4" rx="6" ry="6"></rect>
      <rect width="8" height="2" x="32" y="17" fill="#fff" rx="1" ry="1"></rect>
      <rect width="8" height="2" x="32" y="22" fill="#fff" rx="1" ry="1"></rect>
      <rect width="8" height="2" x="32" y="27" fill="#fff" rx="1" ry="1"></rect>
      <rect width="8" height="2" x="32" y="32" fill="#fff" rx="1" ry="1"></rect>
      <rect width="8" height="2" x="32" y="37" fill="#fff" rx="1" ry="1"></rect>
      <path fill="#fff" d="M35 14h2v29a1 1 0 01-1 1 1 1 0 01-1-1V14z"></path>
      <path
        fill="#fff"
        d="M38.002 42h-4.004A1.998 1.998 0 0032 43.998v2.004A1.998 1.998 0 0033.998 48h4.004A1.998 1.998 0 0040 46.002v-2.004A1.998 1.998 0 0038.002 42zm-.005 4H34v-2h4z"
      ></path>
    </svg>
  ),
  fileCodeAlt: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
      <path
        fill="#e3edfc"
        d="M49 61H23a5.015 5.015 0 01-5-5V16a5.015 5.015 0 015-5h17.91L54 22.111V56a5.015 5.015 0 01-5 5z"
      ></path>
      <path
        fill="#b7d0ea"
        d="M54 22.111h-9.818a3.303 3.303 0 01-3.273-3.333V11s1.841.208 6.955 4.583C52.84 20.097 54 22.111 54 22.111z"
      ></path>
      <path fill="#c4dbf2" d="M19.03 59A4.984 4.984 0 0023 61h26a4.984 4.984 0 003.97-2z"></path>
      <path
        fill="#0089ff"
        d="M44.709 39.72a2.007 2.007 0 01-.672-1.13 13.652 13.652 0 01-.177-2.588 20.143 20.143 0 00-.141-2.699 2.831 2.831 0 00-.568-1.365 2.392 2.392 0 00-1.104-.77 4.722 4.722 0 00-1.48-.168h-.583v1.636h.323a2.236 2.236 0 011.328.276 1.395 1.395 0 01.412.974q.052.396.052 2.428a7.437 7.437 0 00.49 3.183 3.521 3.521 0 001.688 1.516 3.246 3.246 0 00-1.417 1.078 4.133 4.133 0 00-.667 1.85q-.094.698-.094 3.303a2.866 2.866 0 01-.354 1.755 1.951 1.951 0 01-1.438.391h-.323v1.636h.584a5.15 5.15 0 001.292-.115 2.326 2.326 0 001.589-1.328 4.334 4.334 0 00.349-1.412q.052-.552.062-2.292a12.642 12.642 0 01.177-2.454 2.007 2.007 0 01.672-1.13 2.078 2.078 0 011.308-.438V40.16a2.078 2.078 0 01-1.308-.438zM30.146 39.94a3.95 3.95 0 00.64-1.72 30.109 30.109 0 00.115-3.448 2.842 2.842 0 01.354-1.745 1.951 1.951 0 011.438-.39h.323V31h-.583a5.635 5.635 0 00-1.292.104 2.315 2.315 0 00-1.59 1.334 4.366 4.366 0 00-.348 1.406q-.052.553-.063 2.293a12.753 12.753 0 01-.177 2.458 1.982 1.982 0 01-.672 1.13 2.096 2.096 0 01-1.308.433v1.698a2.078 2.078 0 011.308.438 2.009 2.009 0 01.672 1.136 13.753 13.753 0 01.177 2.594 20.138 20.138 0 00.141 2.699 2.797 2.797 0 00.568 1.36 2.477 2.477 0 001.104.776 4.712 4.712 0 001.48.167h.584V49.39h-.323a2.203 2.203 0 01-1.329-.281 1.464 1.464 0 01-.422-.99q-.041-.386-.042-2.418a7.392 7.392 0 00-.515-3.224 3.179 3.179 0 00-1.662-1.464 3.813 3.813 0 001.422-1.073z"
      ></path>
    </svg>
  ),
  fileDocAlt: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
      <path
        fill="#e3edfc"
        d="M49 61H23a5.015 5.015 0 01-5-5V16a5.015 5.015 0 015-5h17.91L54 22.111V56a5.015 5.015 0 01-5 5z"
      ></path>
      <path
        fill="#b7d0ea"
        d="M54 22.111h-9.818a3.303 3.303 0 01-3.273-3.333V11s1.841.208 6.955 4.583C52.84 20.097 54 22.111 54 22.111z"
      ></path>
      <path fill="#c4dbf2" d="M19.03 59A4.984 4.984 0 0023 61h26a4.984 4.984 0 003.97-2z"></path>
      <rect width="18" height="2" x="27" y="31" fill="#599def" rx="1" ry="1"></rect>
      <rect width="18" height="2" x="27" y="36" fill="#599def" rx="1" ry="1"></rect>
      <rect width="18" height="2" x="27" y="41" fill="#599def" rx="1" ry="1"></rect>
      <rect width="12" height="2" x="27" y="46" fill="#599def" rx="1" ry="1"></rect>
    </svg>
  ),
  fileMediaAlt: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
      <path
        fill="#e3edfc"
        d="M49 61H23a5.015 5.015 0 01-5-5V16a5.015 5.015 0 015-5h17.91L54 22.111V56a5.015 5.015 0 01-5 5z"
      ></path>
      <path
        fill="#b7d0ea"
        d="M54 22.111h-9.818a3.303 3.303 0 01-3.273-3.333V11s1.841.208 6.955 4.583C52.84 20.097 54 22.111 54 22.111z"
      ></path>
      <path fill="#c4dbf2" d="M19.03 59A4.984 4.984 0 0023 61h26a4.984 4.984 0 003.97-2z"></path>
      <path
        fill="#755de0"
        d="M27.222 43H44.71s2.325-.281.735-1.897l-5.603-5.498s-1.512-1.792-3.336.793L33.56 40.47a.689.689 0 01-1.019.048l-1.9-1.639s-1.329-1.587-2.475 0c-.656.908-2.026 2.849-2.026 2.849S25.427 43 27.222 43z"
      ></path>
    </svg>
  ),
  fileMovieAlt: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
      <path
        fill="#e3edfc"
        d="M49 61H23a5.015 5.015 0 01-5-5V16a5.015 5.015 0 015-5h17.91L54 22.111V56a5.015 5.015 0 01-5 5z"
      ></path>
      <path
        fill="#b7d0ea"
        d="M54 22.111h-9.818a3.303 3.303 0 01-3.273-3.333V11s1.841.208 6.955 4.583C52.84 20.097 54 22.111 54 22.111z"
      ></path>
      <path fill="#c4dbf2" d="M19.03 59A4.984 4.984 0 0023 61h26a4.984 4.984 0 003.97-2z"></path>
      <path
        fill="#f74141"
        d="M46 46.5v-13a3.504 3.504 0 00-3.5-3.5h-13a3.504 3.504 0 00-3.5 3.5v13a3.504 3.504 0 003.5 3.5h13a3.504 3.504 0 003.5-3.5zM40 45v3h-3v-3zm-3-2v-6h7v6zm0-8v-3h3v3zm-2-3v3h-3v-3zm0 5v6h-7v-6zm0 8v3h-3v-3zm7.5 3H42v-3h2v1.5a1.502 1.502 0 01-1.5 1.5zM44 33.5V35h-2v-3h.5a1.502 1.502 0 011.5 1.5zM29.5 32h.5v3h-2v-1.5a1.502 1.502 0 011.5-1.5zM28 46.5V45h2v3h-.5a1.502 1.502 0 01-1.5-1.5z"
      ></path>
    </svg>
  ),
  fileMusicAlt: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
      <path
        fill="#e3edfc"
        d="M49 61H23a5.015 5.015 0 01-5-5V16a5.015 5.015 0 015-5h17.91L54 22.111V56a5.015 5.015 0 01-5 5z"
      ></path>
      <path
        fill="#b7d0ea"
        d="M54 22.111h-9.818a3.303 3.303 0 01-3.273-3.333V11s1.841.208 6.955 4.583C52.84 20.097 54 22.111 54 22.111z"
      ></path>
      <path fill="#c4dbf2" d="M19.03 59A4.984 4.984 0 0023 61h26a4.984 4.984 0 003.97-2z"></path>
      <path
        fill="#5a5aff"
        d="M45.647 30.737a1.006 1.006 0 00-.811-.223l-12 2A1 1 0 0032 33.5v9.556a3.923 3.923 0 00-3.711-.17 3.863 3.863 0 00-2.082 2.313 4.025 4.025 0 005.37 4.997A3.977 3.977 0 0034 46.451V34.347l10-1.666v8.375a3.923 3.923 0 00-3.711-.17 3.863 3.863 0 00-2.082 2.313 4.025 4.025 0 005.37 4.997A3.977 3.977 0 0046 44.451V31.5a.999.999 0 00-.353-.763z"
      ></path>
    </svg>
  ),
  filePDFAlt: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
      <path
        fill="#e3edfc"
        d="M49 61H23a5.015 5.015 0 01-5-5V16a5.015 5.015 0 015-5h17.91L54 22.111V56a5.015 5.015 0 01-5 5z"
      ></path>
      <path
        fill="#b7d0ea"
        d="M54 22.111h-9.818a3.303 3.303 0 01-3.273-3.333V11s1.841.208 6.955 4.583C52.84 20.097 54 22.111 54 22.111z"
      ></path>
      <path fill="#c4dbf2" d="M19.03 59A4.984 4.984 0 0023 61h26a4.984 4.984 0 003.97-2z"></path>
      <path
        fill="#f26b6b"
        d="M46.334 44.538a4.326 4.326 0 00-2.528-1.429 22.436 22.436 0 00-4.561-.383 19.356 19.356 0 01-3.425-4.772 56.508 56.508 0 001.375-6.086 2.339 2.339 0 00-.462-1.845 1.943 1.943 0 00-1.516-.753h-.001a1.685 1.685 0 00-1.39.697c-1.149 1.526-.363 5.219-.194 5.946a12.612 12.612 0 00.724 2.147 33.322 33.322 0 01-2.49 6.106 20.347 20.347 0 00-5.979 3.44 2.568 2.568 0 00-.886 1.827 1.802 1.802 0 00.634 1.306 2.061 2.061 0 001.395.531 2.244 2.244 0 001.459-.546 20.068 20.068 0 004.29-5.357 20.838 20.838 0 015.938-1.186 33.75 33.75 0 004.243 3.605 2.64 2.64 0 003.416-.236 2.08 2.08 0 00-.042-3.012zM27.62 49.623a.834.834 0 01-1.084.042.42.42 0 01-.167-.27c-.002-.066.027-.315.44-.736a18.038 18.038 0 013.762-2.368 17.26 17.26 0 01-2.95 3.332zm7.283-18.775a.343.343 0 01.315-.151.6.6 0 01.465.239.853.853 0 01.168.672c-.164.92-.424 2.38-.852 4.117l-.037-.151c-.356-1.523-.609-3.996-.059-4.726zm-1.179 12.703a34.973 34.973 0 001.52-3.767 21.248 21.248 0 002.224 3.05 21.857 21.857 0 00-3.744.717zm11.706 2.97a1.308 1.308 0 01-1.695.088 33.203 33.203 0 01-3.004-2.43 20.968 20.968 0 012.835.334 2.97 2.97 0 011.74.965c.533.633.296.87.123 1.043z"
      ></path>
    </svg>
  ),
  filePPTAlt: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
      <path
        fill="#e3edfc"
        d="M49 61H23a5.015 5.015 0 01-5-5V16a5.015 5.015 0 015-5h17.91L54 22.111V56a5.015 5.015 0 01-5 5z"
      ></path>
      <path
        fill="#b7d0ea"
        d="M54 22.111h-9.818a3.303 3.303 0 01-3.273-3.333V11s1.841.208 6.955 4.583C52.84 20.097 54 22.111 54 22.111z"
      ></path>
      <path fill="#c4dbf2" d="M19.03 59A4.984 4.984 0 0023 61h26a4.984 4.984 0 003.97-2z"></path>
      <path
        fill="#f25168"
        d="M44.14 46H27.86A1.86 1.86 0 0126 44.14v-9.28A1.86 1.86 0 0127.86 33h16.28A1.86 1.86 0 0146 34.86v9.28A1.86 1.86 0 0144.14 46zm-14.995-2h13.71A1.145 1.145 0 0044 42.855v-6.71A1.145 1.145 0 0042.855 35h-13.71A1.145 1.145 0 0028 36.145v6.71A1.145 1.145 0 0029.145 44z"
      ></path>
      <path
        fill="#f25168"
        d="M36.422 34.268a.711.711 0 01-.505-.21l-2.143-2.142a.714.714 0 011.01-1.01l2.143 2.143a.714.714 0 01-.505 1.22z"
      ></path>
      <path
        fill="#f25168"
        d="M36.422 34.268a.714.714 0 01-.505-1.22l2.143-2.142a.714.714 0 011.01 1.01l-2.143 2.143a.711.711 0 01-.505.209zM32.136 49.268a.705.705 0 01-.367-.102.715.715 0 01-.245-.98l2.143-3.571a.714.714 0 011.225.735l-2.143 3.57a.714.714 0 01-.613.348zM40.708 49.268a.714.714 0 01-.613-.346l-2.142-3.572a.714.714 0 011.225-.735l2.142 3.572a.714.714 0 01-.612 1.081zM35.12 37H30.9a.5.5 0 110-1h4.22a.5.5 0 110 1zM41.976 43h-4.429a.506.506 0 110-1.006h4.429a.506.506 0 110 1.006zM38.14 40h-4.163a.5.5 0 110-1h4.163a.5.5 0 110 1z"
      ></path>
    </svg>
  ),
  filesheetAlt: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
      <path
        fill="#e3edfc"
        d="M49 61H23a5.015 5.015 0 01-5-5V16a5.015 5.015 0 015-5h17.91L54 22.111V56a5.015 5.015 0 01-5 5z"
      ></path>
      <path
        fill="#b7d0ea"
        d="M54 22.111h-9.818a3.303 3.303 0 01-3.273-3.333V11s1.841.208 6.955 4.583C52.84 20.097 54 22.111 54 22.111z"
      ></path>
      <path fill="#c4dbf2" d="M19.03 59A4.984 4.984 0 0023 61h26a4.984 4.984 0 003.97-2z"></path>
      <path
        fill="#36c684"
        d="M42 31H30a3.003 3.003 0 00-3 3v11a3.003 3.003 0 003 3h12a3.003 3.003 0 003-3V34a3.003 3.003 0 00-3-3zm-13 7h6v3h-6zm8 0h6v3h-6zm6-4v2h-6v-3h5a1.001 1.001 0 011 1zm-13-1h5v3h-6v-2a1.001 1.001 0 011-1zm-1 12v-2h6v3h-5a1.001 1.001 0 01-1-1zm13 1h-5v-3h6v2a1.001 1.001 0 01-1 1z"
      ></path>
    </svg>
  ),
  fileTextAlt: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
      <path
        fill="#e3edfc"
        d="M49 61H23a5.015 5.015 0 01-5-5V16a5.015 5.015 0 015-5h17.91L54 22.111V56a5.015 5.015 0 01-5 5z"
      ></path>
      <path
        fill="#b7d0ea"
        d="M54 22.111h-9.818a3.303 3.303 0 01-3.273-3.333V11s1.841.208 6.955 4.583C52.84 20.097 54 22.111 54 22.111z"
      ></path>
      <path fill="#c4dbf2" d="M19.03 59A4.984 4.984 0 0023 61h26a4.984 4.984 0 003.97-2z"></path>
      <rect width="18" height="2" x="27" y="31" fill="#7e95c4" rx="1" ry="1"></rect>
      <rect width="18" height="2" x="27" y="35" fill="#7e95c4" rx="1" ry="1"></rect>
      <rect width="18" height="2" x="27" y="39" fill="#7e95c4" rx="1" ry="1"></rect>
      <rect width="14" height="2" x="27" y="43" fill="#7e95c4" rx="1" ry="1"></rect>
      <rect width="8" height="2" x="27" y="47" fill="#7e95c4" rx="1" ry="1"></rect>
    </svg>
  ),
  fileZipAlt: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72">
      <rect width="36" height="40" x="18" y="16" fill="#e3edfc" rx="5" ry="5"></rect>
      <path fill="#c4dbf2" d="M19.03 54A4.984 4.984 0 0023 56h26a4.984 4.984 0 003.97-2z"></path>
      <rect width="8" height="2" x="32" y="20" fill="#7e95c4" rx="1" ry="1"></rect>
      <rect width="8" height="2" x="32" y="25" fill="#7e95c4" rx="1" ry="1"></rect>
      <rect width="8" height="2" x="32" y="30" fill="#7e95c4" rx="1" ry="1"></rect>
      <rect width="8" height="2" x="32" y="35" fill="#7e95c4" rx="1" ry="1"></rect>
      <path fill="#7e95c4" d="M35 16.06h2V41a1 1 0 01-1 1 1 1 0 01-1-1V16.06z"></path>
      <path
        fill="#7e95c4"
        d="M38.002 40h-4.004A1.998 1.998 0 0032 41.998v2.004A1.998 1.998 0 0033.998 46h4.004A1.998 1.998 0 0040 44.002v-2.004A1.998 1.998 0 0038.002 40zm-.005 4H34v-2h4z"
      ></path>
    </svg>
  ),
};
export default icons;

export const iconsType = {
  "application/x-zip-compressed": icons.fileZip,
  "application/zip": icons.fileZip,
  "text/plain": icons.fileText,
  "application/pdf": icons.filePDF,
  "application/vnd.ms-excel": icons.fileSheet,
  "image/png": icons.fileMedia,
  "img/png": icons.fileMedia,
  "image/jpeg": icons.fileMedia,
  "img/jpeg": icons.fileMedia,
  "image/jpg": icons.fileMedia,
  "img/jpg": icons.fileMedia,
  others: icons.fileText,
};
