console.log(456)
const framework_type = document.getElementById('framework_type');
const language = document.getElementById('language');
console.log(framework_type);


let ftype;
let l_type;
const  fetchFrameworkTypes = async () => {
    const response = await fetch('/api/framework_type');
    const data = await response.json();
    ftype = data;
}


const fetchlanguage = async () => {
    const response = await fetch('/api/language');
    const data = await response.json();
    l_type = data;
}

fetchlanguage().then(() => {
    console.log(l_type);
    l_type.forEach((type) => {
        const option = document.createElement('option');
        option.value = type._id;
        option.textContent = type.language_name;
        language.appendChild(option);
    });
});

fetchFrameworkTypes().then(() => {
    console.log(ftype);
    ftype.forEach((type) => {
        const option = document.createElement('option');
        option.value = type._id;
        option.textContent = type.framework_type;
        framework_type.appendChild(option);
    });
});