function setup()
{
    canvas=createCanvas(600 , 600)
    canvas.position(110, 250)
    video=createCapture(VIDEO) 
    video.hide()
    tintColor=""
}

function draw()
{
    image(video, 0 , 0 , 600 , 600)
    tint(tintColor)
}

function apply_filter()
{
    tintColor=document.getElementById("input1").value
}

function take_snapshot()
{
    save("photofilter.png")
}