const List = require('../../lib/list.js');

describe('List', () => {

  let testArray = ['A1', 'A2', 'A3'];

  let loadList = () => {
    let thisList = new List();

    for (let i = 0; i <= testArray.length - 1; i++) {
      thisList.push(testArray[i]);
    }

    return thisList;
  }

  it('push() should add an element to the end of the list', () => {
    let myList = loadList();
    myList.push('A4');
    expect(myList.data[myList.length - 1]).toEqual('A4');
  });

  it('push() keeps the list the same if no element pushed', () => {
    let myList = loadList();
    expect(myList.length).toEqual(3);
    myList.push();
    expect(myList.length).toEqual(3);
  });

  it('push() should increment the length', () => {
    let myList = loadList();
    myList.push('A4');
    myList.push('A5');
    myList.push('A6')
    expect(myList.length).toEqual(6);
  });

  it('pop() should remove the last item in the list', () => {
    let myList = loadList();
    expect(myList.pop()).toEqual(testArray[2]);
  });

  // it('pop() should decrement the length', () => {

  // });

  // it('shift() return first item', () => {

  // });

  it('forEach() runs a callback for item in the list', () => {
    let myList = loadList();
    let iterations = 0;
    myList.forEach( item => {
      iterations++;
    });

    expect(iterations).toEqual(myList.length);
  });
});