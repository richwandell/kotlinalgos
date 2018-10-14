import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.HTMLInputElement
import kotlin.browser.document
import kotlin.browser.window
import kotlin.math.cos
import kotlin.math.sin

class TreeThings(canvas: HTMLCanvasElement, private val ctx: CanvasRenderingContext2D, slider: HTMLInputElement) {

    var angle: Double = slider.value.toDouble()
    var width: Double = 1000.0
    var height: Double = 1000.0

    init {
        canvas.height = height.toInt()
        canvas.width = width.toInt()

        slider.addEventListener("input", {
            angle = slider.value.toDouble()
        })

        window.requestAnimationFrame {
            draw()
        }
    }

    fun branch(start: Array<Double>, len: Double, depth: Int) {

        val end: Array<Double> = arrayOf(
                start[0] + (len * cos(angle * depth)),
                start[1] + (len * sin(angle * depth))
        )

        ctx.beginPath()
        ctx.strokeStyle = "black"
        ctx.moveTo(start[0], start[1])

        ctx.lineTo(end[0], end[1])
        ctx.stroke()

        if(len > 4) {
            branch(end, len * 0.67, depth + 1)
            branch(end, len * 0.67, depth - 1)
        }
    }

    fun draw() {
        ctx.fillStyle = "white"
        ctx.clearRect(0.0, 0.0, width, height)

        val len: Double = 300.0
        val start: Array<Double> = arrayOf(
                0.0, height / 2
        )
        val end: Array<Double> = arrayOf(
                start[0] + len,
                start[1]
        )

        ctx.beginPath()
        ctx.strokeStyle = "black"
        ctx.moveTo(start[0], start[1])
        ctx.lineTo(end[0], end[1])
        ctx.stroke()

        branch(end, len * 0.67, 1)
        branch(end, len * 0.67, -1)

        window.requestAnimationFrame { draw() }
    }
}



fun main(args: Array<String>) {
    val canvas = document.getElementById("the_canvas") as HTMLCanvasElement
    val ctx = canvas.getContext("2d") as CanvasRenderingContext2D
    val slider = document.getElementById("range_slider") as HTMLInputElement
    TreeThings(canvas, ctx, slider)
}