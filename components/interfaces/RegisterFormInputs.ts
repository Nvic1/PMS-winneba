export interface RegFields {

    // personal Information
    firstName: string,
    middleName?: string,
    lastName: string,
    photo: string,
    educationalLeve: string,
    contact: string, 
    occupation: string,
    dateofBirth: string,
    religion: string,
    gender: string,
    maritalStatus: string,
    nationality: string,
    cityTown: string,
    landMark: string,
    district: string, 
    nationalID: string,
    age: number,
    date: Date,
    personalBelongings: string,
    personalPhoto: HTMLInputElement, 


    // Physical Information
    height: number,
    weight: number,
    eyeColor: string,
    skinTone: string,
    hairColor: string,


    // booking Information
    inmateID: string,
    cellAssignment: string,
    securityClassification: string,
    custodialStatus: string,


    // Legal Information
    admissionDate: Date,
    arrestingAgency: string, 
    arrestingOfficer: string,
    chargesFiled: string,
    sentence: number,
    caseNumbers: string,
    attorneyName: string,
    attorneyContact: string


    // medical and health information
    medicalConditions: string,
    allergies: string,
    emergencyPerson:string,
    emergencyPhone:string,
    emergencyRelationship:string
    nextofkin:string,
    nextofkinPhone:string
    nextofkinRelationship:string

    // disabled fields
    medications: string,
    specialNeeds: string,
    approvedVisitors: string,
    disciplinaryActions: string,
    behaviorReports
}