// Functional Approach instead of Object Oriented

fun main(args: Array<String>) {
    solveExpression(args)
}

fun getErrorMessage() = "An Error has ocurred"

/**
 * Takes in an array and attempts to solve it if the items can form a valid expression:
 * 1. Array must have a length of 3
 * 2. First and Second Strings must be a valid doubles
 * 3. Third String must be a valid operator
 * 
 * True: Solve expression and display result
 * False. Third String must be a valid operator
 * */
fun solveExpression(args: Array<String>) {
    if (args.size != 3) {
        println(getErrorMessage())
        return
    }
    if (firstAndSecondNotValid(args[0], args[1])) {
        println(getErrorMessage())
        return
    }
    if (thirdIsNotValis(args[2])) {
        println(getErrorMessage())
        return
    }
    
    println(
        solve(args[0].toDouble(),
          args[1].toDouble(),
          getOperation(args[2])
         )
    )
}

// A Higher Order Function is a Function which either accepts another function as an argument, or returns a function as an argument
fun solve(d1: Double,
          d2: Double,
          operation: (Double, Double) -> String
		 ): String = operation.invoke(d1, d2)

fun firstAndSecondNotValid(s: String, s1: String): Boolean {
    if (s.toDoubleOrNull() == null) return true
    if (s1.toDoubleOrNull() == null) return true
    return false
}

fun thirdIsNotValis(s: String): Boolean {
    return when(s) {
        "+" -> false
        "-" -> false
        "*" -> false
    	"/" -> false
        else -> true
    }
}

fun getOperation(s: String): (Double, Double) -> String {
    return when(s) {
        "+" -> { first: Double, second: Double -> (first + second).toString() }
        "-" -> { first: Double, second: Double -> (first - second).toString() }
        "*" -> { first: Double, second: Double -> (first * second).toString() }
    	"/" -> { first: Double, second: Double -> (first / second).toString() }
        else -> { first: Double, second: Double -> getErrorMessage() }
    }
}