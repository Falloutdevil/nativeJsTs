import {rename} from 'fs';

const ages = [18,20,22,1,100,90,14];
const predicate = (age: number[]) => {
    return ages.filter(el => el > 90)
}

const oldAges = [100];

export type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150}
]


// < 160
const cheapPredicate = (course: CourseType) => {
  return course.price < 160
}

const cheapCourses = [];