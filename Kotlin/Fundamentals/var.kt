// var playerLocationX: Double = 0.0
// var playerLocationY: Double = 0.0

// fun renderFrame(moveX: Double, moveY: Double) {
//     playerLocationX += moveX
//     playerLocationY += moveY
// }
// 

import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking

fun main(args: Array<String>) = runBlocking {
	// Blin.a is initialized to 0
	val b = Blin(0)
    
	// Launch introduces conncurrency
    val c1 = launch {
        printCurrentValue(b)
    }
    val c2 = launch {
        b.a = 1
    }
    
    c1.join()
    c2.join()
}

class Blin(var a: Int)

// Looking at this function alone, I have noidea of expecting b's state to change
suspend fun printCurrentValue(b: Blin) {
    doThing(b.a)
    delay(1000L)
    doThing(b.a)
}

fun doThing(x: Int) {
    println("I was called with $x ")
}
