
// Contract Interface
interface INoteContract {
    interface View {
        fun displayResult(result:String)
    }
    
    interface Logic {
        fun handleEvent(event: ViewEvent)
    }
}

sealed class ViewEvent {
    object OnStart: ViewEvent()
}

sealed class NoteResult {
    object Error: NoteResult()
    data class Success(val noteContents: String): NoteResult()
}

// Repository}
interface INoteRepository {
    fun getNote(): NoteResult
}

class NoteView(val logic: INoteContract.Logic): INoteContract.View {
    override fun displayResult(result: String) = println(result)
    
    fun clickEvent() = logic.handleEvent(ViewEvent.OnStart)
}

class NoteLogic: INoteContract.Logic {
    
    lateinit var repository: INoteRepository
    lateinit var view: INoteContract.View
    
    override fun handleEvent(event: ViewEvent) {
        when(event) {
            is ViewEvent.OnStart -> getData()
        }
    }
    
    fun getData() {
        val result = repository.getNote()
        
        when(result) {
            is NoteResult.Success -> view.displayResult(result.noteContents)
            is NoteResult.Error -> view.displayResult(GENERIC_ERROR)
        }
    }
}

const val GENERIC_ERROR = "An error has occurred."

class NoteRepositoryImpl (
	val localDatabase: INoteRepository,
    val remoteDatabase: INoteRepository
): INoteRepository {
    override fun getNote(): NoteResult {
        val remoteResult = remoteDatabase.getNote()
        
        when(remoteResult) {
            is NoteResult.Success -> return remoteResult
            is NoteResult.Error -> return localDatabase.getNote()
            
  
        }
    }
}

object LocalNoteRepositoryImpl: INoteRepository {
    override fun getNote(): NoteResult = NoteResult.Success("Effort and Patience")
}

object RemoteNoteRepositoryImpl: INoteRepository {
    override fun getNote(): NoteResult = NoteResult.Success("Effort and Patience")
}

// Application Container
// 1. Create the different things in this program
// 2. Binds the different things in this program together
// 3. Set the program in the motion

fun main(args: Array<String>) {
    val data = NoteRepositoryImpl(LocalNoteRepositoryImpl, RemoteNoteRepositoryImpl)
    val logic = NoteLogic()
    val view = NoteView(logic)
    
    logic.repository = data
    logic.view = view
    
    view.clickEvent()
}