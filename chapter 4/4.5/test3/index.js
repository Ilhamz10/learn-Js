function Accumulator(value) {
    this.value = value;

    this.read = function(){
        this.value += +prompt('Сколько нужно прибавить?')
    }
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);