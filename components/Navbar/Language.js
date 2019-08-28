import React from 'react';
import { LanguageContext } from '../../contexts';

export default function Lng() {
    return (
        <LanguageContext.Consumer>
            {({ language, updateLanguage }) => (
                <div className="language">
                    <div
                        className={language === 'hr' ? 'active' : ''}
                        onClick={e => updateLanguage('hr')}
                    >
                        HR
                    </div>
                    {' | '}
                    <div
                        className={language === 'en' ? 'active' : ''}
                        onClick={e => updateLanguage('en')}
                    >
                        EN
                    </div>
                    {' | '}
                    <div className={language === 'it' ? 'active' : ''}>IT</div>
                </div>
            )}
        </LanguageContext.Consumer>
    );
}
