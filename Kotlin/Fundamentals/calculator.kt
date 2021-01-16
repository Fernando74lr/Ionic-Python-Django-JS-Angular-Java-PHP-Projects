val ADD: String = "+"
val SUBSTRACT: String = "-"
val MULTIPLY: String = "*"
val DIVIDE: String = "/"

val ERROR_MESSAGE = "An error has ocurred"

// Test operands
val testOperandOne: Double = 5.0
val testOperandTwo: Double = 4.0

// Main Function
fun main(args: Array<String>) {
    val operatorSymbol = args[0]
    start(operatorSymbol)
}

fun start(operatorSymbol: String) {
    if (checkArguments(operatorSymbol)) {
        displayResult(
            evaluateBinomial(testOperandOne, testOperandTwo, operatorSymbol)
        )
    } else {
        displayResult(ERROR_MESSAGE)
    }
}

// Single expression syntax (for single line code snippets)
fun displayResult(result: String) = System.out.println(result)

fun evaluateBinomial(opOne: Double, opTwo: Double, sym: String): String {
    return when(sym) {
		// Equals
		ADD -> (opOne + opTwo).toString()
        SUBSTRACT -> (opOne - opTwo).toString()
        MULTIPLY -> (opOne * opTwo).toString()
        DIVIDE -> (opOne / opTwo).toString()
		// Otherwise
		else -> ERROR_MESSAGE
    }
}

// Returns true or false (Boolean), based on if the operator matches our constants
fun checkArguments(operatorSymbol: String): Boolean {
    return when(operatorSymbol) {
		// Equals
		ADD -> true
        SUBSTRACT -> true
        MULTIPLY -> true
        DIVIDE -> true
		// Otherwise
		else -> false
    }
}
