function Blob(w,h,r) {
    this.pos = createVector(w,h);
    this.r = r;

    this.show = function () {
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    };
}