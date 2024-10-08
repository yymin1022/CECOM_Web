export interface API_RESULT {
    RESULT_CODE: number
    RESULT_MSG: string
    RESULT_DATA: Activity | ActivityContent | Array<Admin> | MainImage | Member | NoticeDetail | NoticeList | Photo | RecruitAvailability | RecruitQuestionList | RecruitSubmissionDetail | RecruitSubmissionList | Thing | undefined
}

export interface Activity {
    count: number
    data: Array<ActivityItem>
}

export interface ActivityItem {
    content: string
    id: string
    member: Array<string>
    mentor: string
    tag: Array<string>
    thumbnail: string
    title: string
}

export interface ActivityContent {
    content: string
    id: string
    photo: ActivityContentPhoto
    role: Array<ActivityContentRoleItem>
    tag: Array<string>
    title: string
}

export interface ActivityContentRoleItem {
    member: Array<ActivityContentRoleItemMember>
    title: string
}

export interface ActivityContentRoleItemMember {
    gender: string
    icon: string
    name: string
    url: string
}

export interface ActivityContentPhoto {
    count: number,
    data: Array<string>
}

export interface Admin {
    list: Array<AdminItem>
    year: number
}

export interface AdminItem {
    member: Member
    role: string
}

export interface MainImage {
    event: string | undefined
    mentoring: string | undefined
    project: string | undefined
    study: string | undefined
}

export interface Member {
    comment: string
    department: string
    gender: string
    github: string
    id: string
    image: string
    instagram: string
    name: string
    project: Array<string>
}

export interface NoticeDetail {
    content: string
    date: string
    id: string
    part: string
    photo: NoticeDetailPhoto
    photoCnt: number
    title: string
}

export interface NoticeDetailPhoto {
    count: number,
    data: Array<string>
}

export interface NoticeList {
    count: number
    data: Array<NoticeListItem>
}

export interface NoticeListItem {
    date: string
    id: string
    part: string
    thumbnail: string
    title: string
}

export interface Photo {
    data: string,
    filename: string,
}

export interface RecruitAvailability {
    isAvail: boolean
    message: string
}

export interface RecruitQuestionList {
    count: number
    list: Array<string>
}

export interface RecruitSubmissionDetail {
    age: string
    answer: Array<string>
    college: string
    department: string
    grade: string
    id: string
    isPrivacyCollectAgree: boolean
    name: string
    phone: string
    timestamp: number
}

export interface RecruitSubmissionItem {
    age: string
    answer: Array<string>
    college: string
    department: string
    grade: string
    id: string
    isPrivacyCollectAgree: boolean
    name: string
    phone: string
    timestamp: number
}

export interface RecruitSubmissionList {
    count: number
    data: Array<RecruitSubmissionItem>
}

export interface Thing {
    count: number
    data: Array<ThingItem>
}

export interface ThingItem {
    description: string
    id: string
    name: string
    photo: string
    tag: string
}