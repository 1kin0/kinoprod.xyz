const NotFound = () => {
    return (
        <>
            <div id="content" className='w-lvw h-lvh flex items-center justify-center'>
                <style jsx>{`
                    .rotate {
                        animation: rotate 16s linear infinite;
                        z-index: -1;
                        filter: opacity(0.1);
                    }
                    @keyframes rotate {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                `}</style>
                <img src="sun.png" alt="Logo" className="rotate w-3xs absolute"/>
                <h1 className="text-9xl italic">404 NOT FOUND</h1>
            </div>
        </>
    )
}

export {NotFound};