let sumWatt = 0;
function Instrument(name, watt) { //музыкальные и строительные
    this.name = name,
    this.watt = watt,
    this.state = false
};
Instrument.prototype.isWatt = function(watt) {
    this.watt = watt;
};
Instrument.prototype.isState = function(bool) {
    this.state = bool;
};
Instrument.prototype.sum = function (sumWatt) {
    if (this.state) sumWatt += this.watt;
    return sumWatt;
}
function CategoryTool(name, category, watt) {
    this.watt = watt,
    this.name = name;
    this.category = category,
    this.getNoise = function(tune) {
        console.log(`${this.name}, says ${tune}!`)
    }
}

CategoryTool.prototype = new Instrument();
const gitar = new CategoryTool('Gitar', 'music', 70);
const saw = new CategoryTool('Saw', 'construction', 120);
gitar.isState(true);
saw.isState(true);
sumWatt = gitar.sum.bind(saw, sumWatt)();
sumWatt = gitar.sum.bind(gitar, sumWatt)();
console.log("Общая нагрузка сети = ", sumWatt);
gitar.getNoise("Wzzz");
saw.getNoise("\"I,m a dull!\"");
