var expect = require('chai').expect;
var name = 'React quickly';
var url = ['http://reactquickly.co', 'https://www.manning.com/books/react-quickly'];

describe('name and url', function(){
    it('must be a string', function(done){
        expect(name).to.be.a('string')
        expect(name).to.equal('React Quickly')
        expect(url).to.have.length(2)
        expect(url).to.have.deep.property('[1]', 'https://www.manning.com/books/react-quickly')
        .with.length(43)
        done()
    })
})