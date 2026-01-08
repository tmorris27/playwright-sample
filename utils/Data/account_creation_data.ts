import {AccountCreationType} from "./account_creation_type.ts";
export const accountCreationData: AccountCreationType = {
    firstName: "QA",
    lastName: "Analyst",
    dateOfBirth: "1990-01-01",
    street: "123 Testing Lane",
    postalCode: "12345",
    city: "New York",
    state: "NY",
    country: "United States of America (the)",
    phoneNumber: "1234567890",
    email: `${process.env.PST_Username}`,
    password: `${process.env.PST_Password}`
};