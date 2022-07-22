const tarefa = document.querySelector("#tarefa")
const adicionar = document.querySelector("#tarefaAdicionar")
const lista = document.querySelector("#listaTarefa")
const divbotao = document.querySelector("#listabotao")


adicionar.addEventListener("click", adicionarTarefa)

function adicionarTarefa() {

	if (tarefa.value) {
		let task = `
			<li>
				<h2 class="tarefinha">${tarefa.value}</h2>
				<div class="tools">
					<input type="checkbox" class="check" for="check">
					<button class="remove">Remover</button>
				</div>
			</li>`
		
		
		lista.insertAdjacentHTML('beforeend',task)
		tarefa.value=""
	}

	
	let checks = document.querySelectorAll(".check")
		

	checks.forEach( function(check) {
		check.onclick = (e) => {
		
		const h2element = e.currentTarget.parentElement.previousElementSibling

			if (e.currentTarget.checked) {
				h2element.style.textDecoration = "line-through"
		  	} else {
				h2element.style.textDecoration = "none"
			}
		}
	})


	let removes = document.querySelectorAll(".remove")
	

	removes.forEach(function(remove) {
		remove.onclick = (e) => {
			const currentTask = e.currentTarget.parentElement.parentElement
			currentTask.remove()
	    }
	})
	
	
	}

	

