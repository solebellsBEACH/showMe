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
        stacksDescription:IListItems[]
    },
    hobbies:{
        hobbiesDescription:IListItems[]
    }
}
export interface  ILinks {
    linkedin:string
    instagram:string
    github:string
}

export interface IListItems{
    title:string, description:string, myXP:string,
    image:StaticImageData
}