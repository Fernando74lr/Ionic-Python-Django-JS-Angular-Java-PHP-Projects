// Gretting by the moment of the day
function getDayMoment() {
	let hour = new Date().getHours();
	if (hour < 12) return ['Good morning', '👋'];
	if (hour >= 12 && hour < 18) return ['Good afternoon', '👋'];
	if (hour >= 18 && hour < 20) return ['Good evening', '🌗'];
	if (hour >= 20) return ['Good night', '🌙'];
}

// Get current date
function getCurrentDate() {
    let today = new Date();
    let day = String(today.getDate()).padStart(2, '0');
    let month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let year = today.getFullYear();
    return `${day.length == 1 ? '0' + day : day}/${month.length == 1 ? '0' + month : month}/${year}`;
}

// Get current time
function getCurrentTime() {
    let date = new Date();
    return date.toString().split(' ')[4];
}

// Set greeting
$('#greet').html(getDayMoment()[0]);
$('#emoji').html(getDayMoment()[1]);

// Kanban
let column = '';
var KanbanTest;
function kanbanBoard(todoList, workingList, successList, notesList) {
	KanbanTest = new jKanban({
		element: '#kanban_board',
		gutter: '0',
		widthBoard: '250px',
		click: function (el) {
			// alert(el.innerHTML);
			console.log(el.dataset);
			console.log(el.parentElement.parentElement.getAttribute('data-id'));
			modal(el.dataset)
		},
		dropEl: function (el, target, source, sibling) {
			column = target.parentElement.getAttribute('data-id');
		},
		buttonClick: function (el, boardId) {
			// Create a form to enter element
			var formItem = document.createElement("form");
			formItem.setAttribute("class", "itemform");
			formItem.innerHTML =`
				<div class="form-group">
					<textarea class="form-control" id="text-card" rows="2" autofocus></textarea>
				</div>
				<div class="form-group">
					<button type="submit" id="add-card" class="btn btn-primary btn-xs pull-right">
						Submit
					</button>
					<button type="button" id="CancelBtn" class="btn btn-default btn-xs pull-right">
						Cancel
					</button>
				</div>
			`;
	
			KanbanTest.addForm(boardId, formItem);
			formItem.addEventListener("submit", function (e) {
				e.preventDefault();
				var text = e.target[0].value;
				if (text.length > 0) {
					column = e.target.parentElement.parentElement.dataset.id;
					KanbanTest.addElement(boardId, {
						id: sizeTasks,
						title: text,
						class: changeColorBtn(),
						dragend: function (e) {
							let element = $(`[data-eid=${e.dataset.eid}]`);
							console.log("Change color");
							element.removeAttr('data-class');
							element.attr('data-class', changeColorBtn());
							updateBoard(sizeTasks, changeColorBtn());
						}
					});

					tasksDatetimes.push({
						id: sizeTasks,
						date_created: getCurrentDate(),
						time_created: getCurrentTime()
					});
					addCard(text, changeColorBtn());	
					sizeTasks++;
	
					formItem.parentNode.removeChild(formItem);
				}
			});
			document.getElementById("CancelBtn").onclick = function () {
				formItem.parentNode.removeChild(formItem);
			};
		},
		itemAddOptions: {
			enabled: true,
			content: '+ Add New Card',
			class: 'custom-button btn font-weight-bold btn-light-primary add-card',
			footer: true
		},
		boards: [
			{
				'id': '_todo',
				'title': 'To Do',
				'class': 'light-primary',
				'dragTo': ['_working'],
				'item': todoList
			},
			{
				'id': '_working',
				'title': 'Working',
				'class': 'light-warning',
				'item': workingList
			},
			{
				'id': '_done',
				'title': 'Done',
				'class': 'light-success',
				'dragTo': ['_working'],
				'item': successList
			},
			{
				'id': '_notes',
				'title': 'Notes',
				'class': 'light-danger',
				'item': notesList
			}
		]
	});
}


function changeColorBtn() {
	switch (column) {
		case '_todo':
			return 'primary';
		case '_working':
			return 'warning';
		case '_done':
			return 'success';
		case '_notes':
			return 'danger';
	}
}

var removeElement = (id) => KanbanTest.removeElement(id);

function modal(element) {
	let description = $(`[data-eid=${element.eid}]`).html();
	let datetimeElement = tasksDatetimes.filter(task => task.id.toString() == element.eid);
	Swal.fire({
		title: description,
		text: `${datetimeElement[0].date_created} at ${datetimeElement[0].time_created}`,
		icon: 'info',
		showCancelButton: true,
		confirmButtonColor: '#d33',
		cancelButtonColor: '#3085d6',
		confirmButtonText: 'Delete'
	  }).then((result) => {
		if (result.isConfirmed) {
			removeElement(element.eid);
			deleteTask(element.eid);
			sizeTasks--;
			Swal.fire(
				'Deleted!',
				'The task has been deleted.',
				'success'
			);
		}
	  });
}