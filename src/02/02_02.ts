export type CityType = {
    title: string
    houses: HousesType[]
    governmentBuildings: GovernmentuildingsType[]
    citizensNumber: number
}

export type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AddressType

}

export type StreetType = {
    title: string
}

export type AddressType = {
    number?: number
    street: StreetType
}

export type GovernmentuildingsType = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: AddressType
}