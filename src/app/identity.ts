export class Identity {
    gender: string;
    name: {
        title: string,
        first: string,
        last: string
    }
    location: {
        street: string,
        city: string,
        state: string,
        postcode: number
    }
    email: string;
    dob: Date;
    cell: string;
    picture: {
        medium: string;
    }
}
