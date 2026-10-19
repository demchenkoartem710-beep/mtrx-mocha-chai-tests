
const { expect } = require('chai');
const Mtrx = require('mtrx');

describe('Тестування бібліотеки Mtrx', function () {

  it('Створення матриці з нулів', function () {
    const matrix = Mtrx.zeros(2, 2);

    expect(matrix[0][0]).to.equal(0);
    expect(matrix[0][1]).to.equal(0);
    expect(matrix[1][0]).to.equal(0);
    expect(matrix[1][1]).to.equal(0);
  });

  it('Створення одиничної матриці', function () {
    const matrix = Mtrx.eye(2);

    expect(matrix[0][0]).to.equal(1);
    expect(matrix[0][1]).to.equal(0);
    expect(matrix[1][0]).to.equal(0);
    expect(matrix[1][1]).to.equal(1);
  });

  it('Додавання двох матриць', function () {
    const a = new Mtrx([[1, 2], [3, 4]]);
    const b = new Mtrx([[5, 6], [7, 8]]);

    const result = a.add(b);

    expect(result[0][0]).to.equal(6);
    expect(result[0][1]).to.equal(8);
    expect(result[1][0]).to.equal(10);
    expect(result[1][1]).to.equal(12);
  });

  it('Обчислення визначника матриці', function () {
    const matrix = new Mtrx([[1, 2], [3, 4]]);

    expect(matrix.det).to.equal(-2);
  });

});
