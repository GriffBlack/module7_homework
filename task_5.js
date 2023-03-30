class Instrument {
    constructor(name, watt) {
        this.name = name;
        this.watt = watt || 0;
        this.state = false;
    }
    isState(bool) {
        this.state = bool;
    }
    isWatt(watt) {
        this.watt = watt;
    }
    sum(sumWatt) {
        if (this.state) sumWatt += this.watt;
        return sumWatt;
    }
}
class CategoryTool extends Instrument {
    constructor(name, category, watt) {
        super(name, watt);
        this.category = category;
        
    }
    getNoise(tune) {
        console.log(`${this.name}, says ${tune}!`)
    }
}
let sumWatt = 0;
const gitar = new CategoryTool('Gitar', 'music', 70);
const saw = new CategoryTool('Saw', 'construction', 120);
const pr = new CategoryTool('Low', 'construction', 20);
gitar.isState(true);
pr.isState(true);
sumWatt = gitar.sum.bind(gitar, sumWatt)();
sumWatt = gitar.sum.bind(saw, sumWatt)();
sumWatt = gitar.sum.bind(pr, sumWatt)();
console.log("Общая нагрузка сети = ", sumWatt);
gitar.getNoise("Wzzz");
saw.getNoise("\"I,m a dull!\"");