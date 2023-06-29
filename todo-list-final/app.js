document.addEventListener('DOMContentLoaded',function () {

    const dbUrl = 'http://localhost:3000/todo';
    let form = document.querySelector('form.noor');
    let list = document.querySelector('ul');

    function saveTodo(text) {
        let req = new Request(dbUrl,{ method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({text: text})
        });

        return new Promise(resolve => {
            fetch(req)
                .then(res => { return res.json(); })
                .then(data => { resolve(data); });
        })
    }

    function showToDos() {
        return new Promise(resolve => {
            fetch(new Request(dbUrl))
                .then(res => { return res.json(); })
                .then(data => { resolve(data); });
        });
    }

    showToDos().then(todos => {
        todos.forEach(todo => { addingText(todo); });
    });

    
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        saveTodo(form.task.value).then(res => {
            console.log(res);
            addingText(res);
        });
        form.reset();
    });


    list.addEventListener('click',function (e) {
        if(e.target.classList.contains('delete')) {
            const id = e.target.parentElement.parentElement.dataset.id;
            console.log(id);
            fetch(new Request(`${dbUrl}/${id}`,{ method: 'DELETE'}));
            document.querySelector(`li[data-id="${id}"]`).outerHTML = "";
        }
    })

    function addingText(todo) {
        list.innerHTML += `
<li data-id="${todo.id}">
    <div class="list-elem-head">
        <span class="id">${todo.id}</span>
    </div>
    <div class="list-elem-body">
        <span class="text">${todo.text}</span>
        <span class="delete">Remove</span>
    </div>
</li>`;
    }


});