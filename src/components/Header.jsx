import sunLogo from '/sun.png'

export default function Header() {
    return (
        <header>
            <div className='flex flex-row items-center gap-8'>
                <div className='flex flex-row'>
                    <a href=""><img src={sunLogo} alt="Logo" className='w-6'/></a>
                </div>
                <ul className='flex flex-row gap-5 justify-start'>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <span>demo version</span>
        </header>
    )
}