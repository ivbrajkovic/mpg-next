import React from 'react';
// import { LanguageContext } from '../../contexts';

export default function Lng(props) {
    return (
        // <LanguageContext.Consumer>
        //     {({ language, updateLanguage }) => (
        // {/* {({ language }) => ( */}
        <div className="language">
            <div
                // className={language === 'hr' ? 'active' : ''}
                // onClick={e => updateLanguage('hr')}
                className={props.language === 'hr' ? 'active' : ''}
                onClick={e => props.onChangeLanguage('hr')}
                // onClick={e => (language = 'hr')}
            >
                HR
            </div>
            {' | '}
            <div
                // className={language === 'en' ? 'active' : ''}
                // onClick={e => updateLanguage('en')}
                className={props.language === 'en' ? 'active' : ''}
                onClick={e => props.onChangeLanguage('en')}
                // onClick={e => (language = 'en')}
            >
                EN
            </div>
            {' | '}
            <div className={props.language === 'it' ? 'active' : ''}>IT</div>
        </div>
        // )}
        // </LanguageContext.Consumer>
    );
}
