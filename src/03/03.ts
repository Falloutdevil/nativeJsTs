import {StudentType} from '../02/02';
import {GovernmentuildingsType, HousesType} from '../02/02_02';


// const sum = (a: number, b: number) => {
//   return a + b;
// }

export const addSkill = (student: StudentType, skill: string) => {
        student.technologies.push({id: new Date().getTime(), title: skill})
}

export const makeStudentActive = (student: StudentType) => {
        student.isActive = true
}

export const doesStudentLiveIn = (student: StudentType, cityName: string) => {
        return student.address.city.title === cityName
}

export const addMoneyToBudget = (building: GovernmentuildingsType, budget: number) => {
  building.budget += budget
}

export const repairHouse = (housesType: HousesType) => {
  housesType.repaired = true;
}

export const toFireStaff = (building: GovernmentuildingsType, staff: number) => {
  building.staffCount -= staff
}
export const toHireStaff = (building: GovernmentuildingsType, staff: number) => {
  building.staffCount += staff
}