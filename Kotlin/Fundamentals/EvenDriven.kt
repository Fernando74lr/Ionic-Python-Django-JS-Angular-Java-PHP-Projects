
// Mimic an interaction between different components of an program
fun requestData() {
    val result = InputOutputDevice.getData()
    when(result) {
        is Result.Loading -> UserInterface.showLoadingScreen()
        is Result.Success -> UserInterface.showData(result.value)
        is Result.Error -> UserInterface.showErrorMessage()
    }
}

// Result Wrapper (Either Monad)
sealed class Result {
    // For events, we create a class or object. Objects work when we don't need any data
    object Loading: Result()
    object Error: Result()
    data class Success(val value: String): Result()
}

object InputOutputDevice {
    fun getData(): Result {
        return Result.Success("Oh yeah")
    } 
}

object UserInterface {
    fun showLoadingScreen() {
        
    }
    
    fun showData(data: String) {
        
    }
    
    fun showErrorMessage() {
        
    }
}

enum class MathematicalOperator(val op: Char) {
    PLUS('+'),
    MINUS('-'),
    MULTIPLY('*'),
    DIVIDE('/'),
}

// Function Type
fun checkOperator(op: MathematicalOperator): (Double, Double) -> Double {
    return when (op) {
        // Lambda Expression (arguments -> body of the Lambda Expression)
        MathematicalOperator.PLUS -> {x, y -> x + y}
        MathematicalOperator.MINUS -> {x, y -> x - y}
        MathematicalOperator.MULTIPLY -> {x, y -> x * y}
        MathematicalOperator.DIVIDE -> {x, y -> x / y}
    }
}

fun main(args: Array<String>) {
    val mathFunction = checkOperator(MathematicalOperator.DIVIDE)
   
    println(
    	mathFunction.invoke(4.0, 4.0)
    ) 
}
