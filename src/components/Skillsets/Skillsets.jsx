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
