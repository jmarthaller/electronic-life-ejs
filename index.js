let vector = (x, y) => {
    this.x = x;
    this.y = y;
}

vector.prototype.plus = function(other) {
    return new vector(this.x + other.x, this.y + other.y)
}