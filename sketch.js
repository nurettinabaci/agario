var blob;
var zoom = 1;
var blobs = [];
function setup() {
    createCanvas(600, 600);
    blob = new Blob(0, 0, 60);
    for (var i = 0; i < 200; i++) {
        var x = random(-width, width);
        var y = random(-height, height);
        blobs[i] = new Blob(x, y, 10);
    }
}

function draw() {
    background(0);

    translate(width / 2, height / 2);
    var newZoom = 64 / blob.r;
    zoom = lerp(zoom, newZoom, 0.1);
    scale(zoom);
    translate(-blob.pos.x, -blob.pos.y)


    for (var i = blobs.length - 1; i >= 0; i--) {
        blobs[i].show();
        if (blob.eats(blobs[i])) {
            blobs.splice(i, 1);
        }
    }

    blob.show();
    blob.update();

}

