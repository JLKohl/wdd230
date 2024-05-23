const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function(){

    if (input.value != ''){
        const li  = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = 'x';
        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function (){
            list.removeChild(li);
            input.focus();
        });

        input.focus();

        input.value = '';

    } else {
        alert('please enter a book and chapter');
    }
});