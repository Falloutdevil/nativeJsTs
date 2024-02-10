export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

type CompanyType = { id: number, title: string };
export type WithCompaniesType = {
    companies: Array<CompanyType>
}

export function makeHairsStyle(u: UserType, power: number) {
    // copy.hair = u.hair / power;
    return {
        ...u,
        hair: u.hair / power
    };
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        },
        laptop: {...u.laptop}
    }
}

export function updateUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks: string) {
    return {
        ...u,
        books: [...u.books, newBooks]
    }
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBooks: string) {
    return {
        ...u,
        books: u.books.map(el => el === oldBook ? newBooks : oldBook)
    }
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, bookForDelete: string) {
    return {
        ...u,
        books: u.books.filter(el=> el !== bookForDelete)
    }
}

export function addNewCompany(u: UserWithLaptopType & WithCompaniesType, newCompany: {id: number, title: string}) {
    return {
        ...u,
        companies: [...u.companies, newCompany]
    }
}

export function updateCompanyTitle(u: UserWithLaptopType & WithCompaniesType, companyId: number, newTitle: string) {
    return {
        ...u,
        companies: u.companies.map(el => el.id === companyId ? {...el, title: newTitle}: el)
    }
}

export function updateCompanyTitle2 (companies: {[key: string]: Array<CompanyType>}, userName: string, companyId: number, newTitle: string) {

    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(el => el.id === companyId ? {...el, title: newTitle} : el)


    return companyCopy
}