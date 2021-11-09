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
    github: string | null,
    mainLink: string | null,
    youtube: string | null,
    instagram: string | null,
    twitter: string | null,
    vk: string | null,
    website: string | null,
}
export type ProfileType = {
    userId: number,
    fullName: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    contacts: ContactsType,
    photos: PhotosType,
}
export type UserType={
    id:number,
    name:string,
    status:string,
    photos: PhotosType,
    followed: boolean
}