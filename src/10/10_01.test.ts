import {
    addNewBooksToUser, addNewCompany,
    makeHairsStyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2,
    updateUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from './10_01';

test('referense type test', () => {

    let user: UserType = {
        name: 'Nick',
        hair: 32,
        address: {
            city: 'Minsk'
        }
    }

    const awesomeUser = makeHairsStyle(user, 2);
    user.address.city = 'Moscow';

    expect(user.hair).toBe(32);
    expect(awesomeUser.hair).toBe(16);
    expect(awesomeUser.address).toBe(user.address);
});

test('change address', () => {

    let user: UserWithLaptopType = {
        name: 'Nick',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Moscow');


    expect(user).not.toBe(movedUser);
    expect(user.address).not.toBe(movedUser.address);
    expect(user.laptop).toStrictEqual(movedUser.laptop);
    expect(movedUser.address.city).toBe('Moscow');
});

test('upgrade laptop to macbook', () => {

    let user: UserWithLaptopType = {
        name: 'Nick',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zen Book'
        }
    }

    const userCopy = updateUserLaptop(user, 'Macbook');


    expect(user).not.toBe(userCopy);
    expect(user.address).toBe(userCopy.address);
    expect(user.laptop).not.toBe(userCopy.laptop);
    expect(userCopy.laptop.title).toBe('Macbook');
    expect(user.laptop.title).toBe('Zen Book');
});

test('upgrade house', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Nick',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zen Book'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = moveUserToOtherHouse(user, 99);


    expect(user).not.toBe(userCopy);
    expect(user.books).toBe(userCopy.books);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.address).not.toBe(userCopy.address);
    expect(userCopy.address.house).toBe(99);
});

test('add new books to user', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Nick',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zen Book'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = addNewBooksToUser(user, 'typescript');


    expect(user).not.toBe(userCopy);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.address).toBe(userCopy.address);
    expect(user.books).not.toBe(userCopy.books);
    expect(userCopy.books[4]).toBe('typescript');
    expect(user.books.length).toBe(4);
    expect(userCopy.books.length).toBe(5);
});

test('update js to ts', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Nick',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zen Book'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = updateBook(user, 'js', 'ts');


    expect(user).not.toBe(userCopy);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.address).toBe(userCopy.address);
    expect(user.books).not.toBe(userCopy.books);
    expect(userCopy.books[2]).toBe('ts');
});

test('remove js book', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Nick',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zen Book'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = removeBook(user, 'js');


    expect(user).not.toBe(userCopy);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.address).toBe(userCopy.address);
    expect(user.books).not.toBe(userCopy.books);
    expect(userCopy.books[2]).toBe('react');
});

test('add new company', () => {

    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Nick',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zen Book'
        },
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'It-Incubator'}]
    }

    const userCopy = addNewCompany(user, {id: 100, title: 'soft-games'});


    expect(user).not.toBe(userCopy);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.address).toBe(userCopy.address);
    expect(userCopy.companies[2].title).toBe('soft-games');
});

test('update company title', () => {

    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Nick',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zen Book'
        },
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'It-Incubator'}]
    }

    const userCopy = updateCompanyTitle(user, 1, 'EPAM');


    expect(user).not.toBe(userCopy);
    expect(user.address).toBe(userCopy.address);
    expect(user.companies).not.toBe(userCopy.companies);
    expect(userCopy.companies[0].title).toBe('EPAM');
});

test('update company', () => {


    let companies = {
        'Dimych': [{id: 1, title: 'Epam'}, {id: 2, title: 'It-Incubator'}],
        'Artem': [{id: 2, title: 'It-Incubator'}],
    }

    const copy = updateCompanyTitle2(companies, 'Dimych', 1, 'EPAM');

    expect(copy['Dimych']).not.toBe(companies['Dimych']);
    expect(copy['Artem']).toBe(companies['Artem']);
    expect(copy['Dimych'][0].title).toBe('EPAM');
});