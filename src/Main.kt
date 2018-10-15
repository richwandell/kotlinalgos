import FractalTree.TreeThings
import kotlin.browser.window



fun main(args: Array<String>) {
    
    when(window.location.hash) {
        "#fractal_tree" -> {
            println("fractal tree")
        }
        else -> {
            TreeThings()
        }
    }
}

