export default function Header({theme}){
   const [isDark,setIsDark]=theme;
   
    return(
        <header className={`header-container ${isDark ? 'dark' : ''}`}>
            <div className="header-content">
                <h2 className="title">
                    <a href="/">Where in the world?</a>
                </h2>
                <p className="theme-changer" onClick={()=>{
                    setIsDark(!isDark);
                    localStorage.setItem('isDarkMode',!isDark);
                }}>
                    <i className={`fa-regular ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>&nbsp;&nbsp;<span className="mode-name">{isDark?'Light Mode' : 'Night Mode'}</span>
                </p>
            </div>
        </header>
    )
}