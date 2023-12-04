const increaseAge = (u: UserType) => {
    u.age++;
}

type UserType = {
    name: string
    age: number
    address: {title: string}
}

// test('reference type test', () => {
//     let user: UserType = {
//         name: 'Nick',
//         age: 34
//     }
//
//     increaseAge(user);
//
//     expect(user.age).toBe(35);
//
//     const superman = user;
//     superman.age = 100;
//     expect(user.age).toBe(100)
// })

test('array type test', () => {
    let users = [
        {
            name: 'Nick',
            age: 34
        },
        {
            name: 'Lick',
            age: 30
        },

    ]

    let admins = users;
    admins.push({name: 'Bandyugan', age: 10})

    expect(users[2]).toEqual({name: 'Bandyugan', age: 10});
})

test('value type test', () => {
    let usersCount = 100;

    let adminsCount = usersCount;
    adminsCount = adminsCount + 1;

    expect(usersCount).toBe(100);
    expect(adminsCount).toBe(101);
})

test('reference type test', () => {

    const address = {
        title: 'Minsk'
    }

    let user: UserType = {
        name: 'Nick',
        age: 34,
        address: address
    }

    let addr = user.address;
    let user2: UserType = {
        name: 'Killa',
        age: 30,
        address: address
    }

   address.title = 'Minsk City';


    expect(user.address).toBe(user2.address);
    expect(user2.address.title).toBe('Minsk City');

})

test('reference type array test', () => {

    const address = {
        title: 'Minsk'
    }

    let user: UserType = {
        name: 'Nick',
        age: 34,
        address: address
    }

    let addr = user.address;
    let user2: UserType = {
        name: 'Killa',
        age: 30,
        address: address
    }

    const users = [user, user2, {name: 'Lila', age: 20, address: address}]

    const admins = [user, user2];

    admins[0].name = 'Mikola'

    expect(users[0].name).toBe('Mikola');
    expect(user.name).toBe('Mikola');

})