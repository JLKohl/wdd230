const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function(){

    if (input.value != ''){
        const li  = document.createElement('li');
        const deleteButton = document.createElement('button');
        const checkMark = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '✖️';
        checkMark.textContent = '✔️';
        li.append(checkMark);
        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function (){
            list.removeChild(li);
            input.focus();
        });

        checkMark.addEventListener('click', function(){
            this.innerText = 'READ'
        });

        input.focus();

        input.value = '';

    } else {
        alert('please enter a book and chapter');
    }


});