const NotFound = () => {
    return (
        <>
            <div id="content" className='w-lvw h-lvh flex flex-col items-center justify-center'>
                <style jsx>{`
                    .rotate {
                        animation: rotate 16s linear infinite;
                    }
                    @keyframes rotate {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                `}</style>
                <h1 className="text-9xl italic font-bold">404 NOT FOUND</h1>
                <img src="sun.png" alt="Logo" className="rotate w-22"/>
            </div>
        </>
    )
}

export {NotFound};