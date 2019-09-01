export default function Lng(props) {
    return (
        <div className="language">
            <div
                className={props.language === 'hr' ? 'active' : ''}
                onClick={e => props.onChangeLanguage('hr')}
            >
                HR
            </div>
            {' | '}
            <div
                className={props.language === 'en' ? 'active' : ''}
                onClick={e => props.onChangeLanguage('en')}
            >
                EN
            </div>
            {' | '}
            <div className={props.language === 'it' ? 'active' : ''} onClick={() => props.onTest()}>
                IT
            </div>
        </div>
    );
}
