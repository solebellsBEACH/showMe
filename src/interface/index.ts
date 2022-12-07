import { StaticImageData } from "next/image"

export interface IApplicationDuckDuckInitialState {
    loading: boolean
    error: boolean
    data: null
    success: boolean
    language: 'pt' | 'en'
    languageInformation:ILanguageJSON
}
export interface IReduxState {
    application: IApplicationDuckDuckInitialState
}

export interface ILanguageJSON {
    homePage: {
        footer: string[]
        header: string[]
        bio:string[]
    },
    stacks:{
        stacksDescription:{title:string, description:string, myXP:string,
        image:StaticImageData
        }[]
    }
}