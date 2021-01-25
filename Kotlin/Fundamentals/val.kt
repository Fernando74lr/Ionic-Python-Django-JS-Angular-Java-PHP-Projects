// Compile time constant
internal const val ERROR_MESSAGE = "An error has ocurred."

private const val ADD = "+"

// Read-only reference (it's important to remember that this does not imply that the underlying data can't be changed)
val heightInCM: Double = 182.0
val userName: String = "Bob"

// Arguments to functions in Kotlin are val by default
fun doSomething(arg: String) {
    arg = "Blah"
}