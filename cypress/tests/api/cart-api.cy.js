const cartAddSuccessMessage = 'Cadastro realizado com sucesso';
const cartNotFoundMessage = 'Carrinho não encontrado';
const errorCartAlreadyExists = 'Não é permitido ter mais de 1 carrinho';

describe('Carrinhos', () => {
        
    beforeEach(() => {
        cy.createToken();
    })

    it('Deve listar os carrinhos com sucesso', () => {
        cy.getCarts()
        .then((response) => {
            expect(response.status).to.eql(200);
            expect(response.body).to.have.property('carrinhos').to.be.an('array');
        })
    });


    it('Deve validar a estrutura retornada quando a lista de carrinhos não estiver vazia ', () => {
        cy.getCarts()
        .then((response) => {
            expect(response.body).to.have.property('carrinhos').to.be.an('array');
            
            const carrinhos = response.body.carrinhos;
            
            if (carrinhos.length > 0) {

                carrinhos.forEach(carrinho => {
                    expect(carrinho).to.have.property('produtos').that.is.an('array').that.is.not.empty;

                    carrinho.produtos.forEach(produto => {
                        expect(produto).to.have.property('idProduto').that.is.a('string');
                        expect(produto).to.have.property('quantidade').that.is.a('number');
                        expect(produto).to.have.property('precoUnitario').that.is.a('number');
                    });

                    expect(carrinho).to.have.property('precoTotal').that.is.a('number');
                    expect(carrinho).to.have.property('quantidadeTotal').that.is.a('number');
                    expect(carrinho).to.have.property('idUsuario').that.is.a('string');
                    expect(carrinho).to.have.property('_id').that.is.a('string');
                })
            }
        })
    });

    it('Deve retornar mensagem de erro quando carrinho não for encontrado', () => {
        cy.fixture('cart').then((cart) => {
            const invalidCartId = cart.invalidCartId._id;
            
            cy.getCartById(invalidCartId)
            .then((response) => {
                expect(response.status).to.eql(400);
                expect(response.body).to.have.property('message', cartNotFoundMessage)
            })
        })
    });

    it('Deve cadastrar um carrinho com sucesso quando dados forem validos', () => {
        cy.deleteCart();
        cy.postCart()
        .then((response) => {
            expect(response.status).to.eql(201);
            expect(response.body).to.have.property('message', cartAddSuccessMessage)
        })
    });

    it('Deve retornar erro ao tentar cadastrar um carrinho que já foi cadastrado', () => {
        cy.postCart()
        .then((response) => {
            expect(response.status).to.eql(400);
            expect(response.body).to.have.property('message', errorCartAlreadyExists)
        })
    });


})