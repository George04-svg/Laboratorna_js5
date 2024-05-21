function createNewUser() {
    let user = {
        firstName: prompt("Введите ваше имя:"),
        lastName: prompt("Введите вашу фамилию:"),
        birthday: prompt("Введите вашу дату рождения"),
        
        getAge() {
            const [day, month, year] = this.birthday.split('.').map(Number);
            const birthDate = new Date(year, month - 1, day);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        },

        getPassword() {
            const [day, month, year] = this.birthday.split('.');
            return `${this.firstName.charAt(0).toUpperCase()}${this.lastName.toLowerCase()}${year}`;
        }
    };

    return user;
}

let newUser = createNewUser();
console.log(`Age: ${newUser.getAge()}`);
console.log(`Password: ${newUser.getPassword()}`);