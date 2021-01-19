
// Collection of data and instructions which have a name
class AppUser(
	// Class constructor, contain properties
    val name: String,
    val joinDate: String,
    val proVersion: Boolean
) {
	// Class body, which is where you include functions (you can include other reference)
	fun getFirstInitial(): Char {
        return name[0]
    }   
}

data class User(
	val uid: String,
    val name: String = "",
    val profilePicUrl: String = "satellite_beam"
)

// What does the data class actually do?
// It adds several automatically generated funcitons to the class you attach it to:
// equals(), hashcode(), toString(), copy()

fun main(args: Array<String>) {
	// To create a class, type the class name, and give it appropriate arguments for its properties
    val aUser = AppUser(
    	"Fer",
        "Now",
        false
    )
    val user = User(
    	"1",
        "Fernando"
    )
	// Specify which defaul argument we are refering to.
    val otherUser = User(
    	"2",
        profilePicUrl = "selfie.jpg"
    )
}

// Cohesion: The degree to which things belong together (in this context, in a class)

// Cohesive class
class DogOne(
	val age: String,
    val weight: Double,
    val height: Double,
    val name: String,
    val owner: User
) {
    fun makeNoise() {
        println("BARK!")
    }
}

// Not Cohesive class
class DogTwo(
	val bankAccountNumber: String,
    val letterGrade: String,
    val fluentInGerman: Boolean
) {
    fun measureGravity() {
        println("BARK!")
    }
}
