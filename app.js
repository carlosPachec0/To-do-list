window.addEventListener('load', ()=> {
    //DOM references
    const formCreate  = document.getElementById('form-create')
    const toDoList    = document.getElementById('tasks-list')
    const inputCreate = document.getElementById('create')
    const search      = document.getElementById('search')

    //process to submit
    formCreate.addEventListener('submit', (e) =>{
        e.preventDefault()
        captureValue()
    })
    const captureValue = ()=> {
        const taskName = inputCreate.value.trim();
        (taskName.length) ? showUpTaskHtml(taskName) : alert('You have to input a task')
    }

    const showUpTaskHtml = (task) => {
        const liHtml = `<li><strong>${task}</strong><i class="fas fa-minus-circle delete"></i></li>
        `
        toDoList.innerHTML += liHtml
    }

    //process to submit

    search.addEventListener('keyup', ()=>{
        const character = search.value.trim()
        searching(character)
    })
    const searching = (string) =>{
        //console.log(toDoList.children)
        let array = Array.from(toDoList.children)
        //console.log(array)
        array
            .filter(text => !text.textContent.toLocaleLowerCase().includes(string))
            .forEach(filterString =>{
                filterString.classList.add('filterText')
            })
        array
            .filter(text => text.textContent.toLocaleLowerCase().includes(string))
            .forEach(filterString =>{
                filterString.classList.remove('filterText')
            })
    }

    //process to delete
    toDoList.addEventListener('click', (e)=>{
        //console.log(e.target.classList)
        if(e.target.classList.contains('delete')){
            e.target.parentElement.remove()
        }
        search.value = ''
    })
})