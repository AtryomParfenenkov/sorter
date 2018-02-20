class Sorter {
  comparatorNumeric(a,b) {
    if (a>b) return 1;
    if (a<b) return -1;
  } 
  constructor() {
   this.compareFunction = (a,b) => a-b ; 
   this.countElement = [];
  }

  add(element) {
    this.countElement.push(element);
  }

  at(index) {
    return this.countElement[index];
  }

  get length() {
    return this.countElement.length;
  }

  toArray() {
   return this.countElement;
  }

  sort(indices = []) { 
    let tempArray = []; 
    for (let i = 0; i < indices.length; i++) 
    { 
    tempArray[i] = this.countElement[indices[i]]; 
    } 
    tempArray.sort(this.compareFunction); 
    indices.sort(this.comparatorNumeric); 
    
    for(let i = 0; i < indices.length; i++) { 
    this.countElement[indices[i]] = tempArray[i]; 
    } 
    }
  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;