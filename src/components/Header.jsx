import viteLogo from '/vite.svg'

export default function Header() {
    const now = new Date()

    return (
        <header>
            <div className='flex flex-row gap-4'>
                <img src={viteLogo} alt="Logo" className='w-6'/>
                <h2 className='text-2xl'>kinoprod</h2>
            </div>
            <span>{now.toLocaleDateString()}</span>
        </header>
    )
}