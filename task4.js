

export class FriendAge {
    constructor(name, year, month, day) {
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
    }

    returnAge() {
        const today = new Date();
        const birthDate = new Date(this.year, this.month - 1, this.day);

        let ageYears = today.getFullYear() - birthDate.getFullYear();
        let ageMonths = today.getMonth();
        let ageDays = today.getDate();

        if (ageMonths < birthDate.getMonth() || (ageMonths === birthDate.getMonth() && ageDays < birthDate.getDate())) {
            ageYears -= 1;
        }

        return `${this.name} is ${ageYears} today!`;
    }
}
