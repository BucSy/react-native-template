import { action } from 'typesafe-actions';

export const TEXT_FROM_INPUTBOX: string = 'TEXT_FROM_INPUTBOX';
export const TEXT_TO_STORE: string = 'TEXT_TO_STORE';
export const CHANGE_LANGUAGE: string = 'CHANGE_LANGUAGE';

export const actions = {
    textInputBox: (id: string) => action(TEXT_TO_STORE, id ),
    textToBasictext: (id: string) => action(TEXT_FROM_INPUTBOX, id),
    changeLanguage: (lang: string) => action(CHANGE_LANGUAGE, lang),
}