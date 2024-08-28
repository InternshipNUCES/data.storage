class Data {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    };
};
const name1 = document.getElementById('name');
const age = document.getElementById('age');
const city = document.getElementById('city');
const btn = document.getElementById('btn');

btn.onclick = function () {

    const data1 = new Data(name1.value, age.value, city.value);

    const data = JSON.stringify(data1);

    localStorage.setItem(name1.value, data);

}


//localStorage.clear();