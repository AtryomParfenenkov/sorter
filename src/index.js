class Sorter {
  comparatorNumeric(a,b) {
    if (a>b) return 1;
    if (a<b) return -1;
  } 
  constructor() {
   this.compareFunction = (a,b) => a-b ; 
   this.countArray = [];
  }

  add(element) {
    this.countArray.push(element);
  }

  at(index) {
    return this.countArray[index];
  }

  get length() {
    return this.countArray.length;
  }

  toArray() {
   return this.countArray;
  }

  sort(indices = []) { 
    let tempArray = []; 
    for (let i = 0; i < indices.length; i++) 
    { 
    tempArray[i] = this.countArray[indices[i]]; 
    } 
    tempArray.sort(this.compareFunction); 
    indices.sort(this.comparatorNumeric); 
    
    for(let i = 0; i < indices.length; i++) { 
    this.countArray[indices[i]] = tempArray[i]; 
    } 
    }
  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;