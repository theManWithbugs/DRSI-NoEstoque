unidade_el = document.getElementById('add_unidade');
function reg_unidade() {
    unidade_el.style = `display: block; background-color: white; border-radius: 5px; 
    align-items: center; justify-content: center; display: flex; padding: 20px;`;
    unidade_el.classList.add('animate__animated', 'animate__bounceInLeft');

    departamento_el.style = 'display: none';
    divisao_el.style = 'display: none';
}

departamento_el = document.getElementById('add_departamento');
function reg_departmento() {
    departamento_el.style = `display: block; background-color: white; border-radius: 5px; 
    align-items: center; justify-content: center; display: flex; padding: 20px;`;
    departamento_el.classList.add('animate__animated', 'animate__bounceInLeft');

    unidade_el.style = 'display: none';
    divisao_el.style = 'display: none';
}

divisao_el = document.getElementById('add_divisao');
function reg_divisao() {
    divisao_el.style = `display: block; background-color: white; border-radius: 5px; 
    align-items: center; justify-content: center; display: flex; padding: 20px;`;
    divisao_el.classList.add('animate__animated', 'animate__bounceInLeft');

    unidade_el.style = 'display: none;';
    departamento_el.style = 'display: none;';
}
