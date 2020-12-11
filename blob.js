function Blob(w, h, r) {
    this.pos = createVector(w, h);
    this.r = r;
    this.vel = createVector(0, 0);

    this.update = function () {
        var newVel = createVector(mouseX - width / 2, mouseY - height / 2);
        newVel.setMag(3);
        this.vel.lerp(newVel, 0.1);
        this.pos.add(this.vel);

    }
    this.show = function () {
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    };



    this.eats = function (other) {
        var dist = p5.Vector.dist(this.pos, other.pos);
        if (dist < (this.r + other.r)) {
            var sum = PI * this.r * this.r + PI * other.r * other.r;
            this.r = sqrt(sum / PI);
            return true;
        }
        else {
            return false;
        }

    }
}