export type PostType = {
    id: number
    name: string
    message: string
    likesCount: number
}
export type PhotosType = {
    small: string | null,
    large: string | null,
}
export type ContactsType = {
    github: string | undefined,
    mainLink: string | undefined,
    youtube: string | undefined,
    instagram: string | undefined,
    twitter: string | undefined,
    vk: string | undefined,
    website: string | undefined,
}
export type ProfileType = {
    userId: number,
    fullName: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    contacts: ContactsType,
    photos: PhotosType,
    aboutMe: string
}
export type UserType={
    id:number,
    name:string,
    status:string,
    photos: PhotosType,
    followed: boolean
}