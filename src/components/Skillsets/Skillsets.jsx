const Skillsets = () => {
  return (
    <div className="px-4 md:px-6 lg:px-60">
        <h1 className="text-3xl mb-4">
            Skillsets
        </h1>
      <div className="flex flex-col gap-4 mb-4">
        <h1 className="text-xl">Languages and Frameworks</h1>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 md:text-lg">
            <li className="flex items-center gap-3">
                <i className="devicon-html5-plain colored"></i>
                <p>HTML5</p>
            </li>
            <li className="flex items-center gap-3">
                <i className="devicon-css3-plain colored"></i>
                <p>CSS</p>
            </li>
            <li className="flex items-center gap-3">
                <i className="devicon-javascript-plain colored"></i>
                <p>Javascript</p>
            </li>
            <li className="flex items-center gap-3">
                <i className="devicon-git-plain colored"></i>
                <p>Git</p>
            </li>
            <li className="flex items-center gap-3">
                <i className="devicon-tailwindcss-plain colored"></i>
                <p>Tailwind CSS</p>
            </li>
            <li className="flex items-center gap-3">
                <i className="devicon-react-plain colored"></i>
                <p>React JS</p>
            </li>
            <li className="flex items-center gap-3">
                <i className="devicon-redux-plain colored"></i>
                <p>Redux</p>
            </li>
            <li className="flex items-center gap-3">
                <svg width="23" height="23" viewBox="0 0 94 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M72.7315 20.9357C70.0548 20.0941 68.6725 20.3778 65.8649 20.071C61.5246 19.5976 59.7954 17.9013 59.0619 13.5356C58.6514 11.0985 59.1361 7.53022 58.0881 5.32106C56.0839 1.10875 51.3943 -0.780439 46.6828 0.297843C42.7049 1.20956 39.3951 5.18518 39.2117 9.266C39.0021 13.9254 41.657 17.901 46.2156 19.273C48.3814 19.9261 50.6825 20.2548 52.9444 20.4214C57.0925 20.7238 57.4113 23.0297 58.5335 24.9277C59.2409 26.1243 59.9264 27.3034 59.9264 30.8714C59.9264 34.4394 59.2365 35.6185 58.5335 36.8151C57.4113 38.7087 56.0271 39.9491 51.879 40.2559C49.6171 40.4225 47.3116 40.7513 45.1502 41.4044C40.5916 42.7807 37.9367 46.7519 38.1463 51.4113C38.3297 55.4921 41.6395 59.4678 45.6174 60.3795C50.3289 61.4621 55.0185 59.5686 57.0227 55.3563C58.075 53.1471 58.6514 50.6443 59.0619 48.2072C59.7998 43.8414 61.5289 42.1451 65.8649 41.6717C68.6725 41.3649 71.5783 41.6717 74.2093 40.177C76.9895 38.1456 79.4734 35.0968 79.4734 30.8714C79.4734 26.6459 76.7967 22.2156 72.7315 20.9357Z" fill="#F44250"/>
                    <path d="M28.1997 40.7739C22.7285 40.7739 18.2656 36.3027 18.2656 30.8213C18.2656 25.3399 22.7285 20.8687 28.1997 20.8687C33.6709 20.8687 38.1338 25.3399 38.1338 30.8213C38.1338 36.2983 33.6665 40.7739 28.1997 40.7739Z" fill="white"/>
                    <path d="M9.899 61C4.43661 60.9868 -0.0130938 56.498 2.89511e-05 51.0122C0.0132099 45.5353 4.4936 41.0773 9.96914 41.0948C15.4359 41.108 19.8856 45.5968 19.8681 51.0825C19.8549 56.5551 15.3745 61.0131 9.899 61Z" fill="white"/>
                    <path d="M83.7137 60.9998C78.2339 61.0304 73.7361 56.5901 73.7052 51.122C73.6747 45.632 78.1068 41.1258 83.5646 41.0949C89.0444 41.0643 93.5423 45.5046 93.5731 50.9727C93.6036 56.4583 89.1716 60.9689 83.7137 60.9998Z" fill="white"/>
                </svg>
                <p>React Router</p>
            </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl">Tools</h1>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 md:text-lg">
            <li className="flex items-center gap-3">
                <i className="devicon-firebase-plain colored"></i>
                <p>Firebase</p>
            </li>
            <li className="flex items-center gap-3">
                <i className="devicon-vscode-plain colored"></i>
                <p>VS Code</p>
            </li>
            <li className="flex items-center gap-3">
                <i className="devicon-github-plain"></i>
                <p>Github</p>
            </li>
            <li className="flex items-center gap-3">
                <i className="devicon-ubuntu-plain colored"></i>
                <p>Ubuntu</p>
            </li>
            <li className="flex items-center gap-3">
                <i className="devicon-figma-plain colored"></i>
                <p>Figma</p>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Skillsets
