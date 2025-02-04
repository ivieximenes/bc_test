import productProperties from '../../config/api/productProperties';

describe('Produtos', () => {

    it('Deve listar os produtos com sucesso', () => {
        cy.getProducts()
        .then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body).to.have.property('produtos');
            expect(response.body.produtos).to.be.an('array');
        })
    });


    it('Deve validar a estrutura retornada quando a lista de produtos não estiver vazia', () => {
        cy.getProducts()
        .then((response) => {
            expect(response.body).to.have.property('produtos');
            expect(response.body.produtos).to.be.an('array');
            expect(response.body).to.have.property(productProperties.produto.quantidade).that.is.a('number');

            const produtos = response.body.produtos;
            
            if (produtos.length > 0) {
                response.body.produtos.forEach(produto => {
                    expect(produto).to.have.property(productProperties.produto.nome).that.is.a('string');
                    expect(produto).to.have.property(productProperties.produto.preco).that.is.a('number');
                    expect(produto).to.have.property(productProperties.produto.descricao).that.is.a('string');
                    expect(produto).to.have.property(productProperties.produto.quantidade).that.is.a('number');
                    expect(produto).to.have.property(productProperties.produto.id).that.is.a('string');
                });
            }
        })
    });
})