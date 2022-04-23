const sinon = require('sinon');
const Controller = require('../../controllers/FavListController');
const Service = require('../../services/FavListService');

describe('Fav List Controller', function () {
    let req = {
        body: {
            name: 'My List',
            favs: [
                {
                    title: 'Soccer',
                    description: 'Favorite Sport',
                    link: 'https://fpf.org.pe/'
                },
                {
                    title: 'Dell',
                    description: 'Favorite Laptop Brand',
                    link: 'https://www.dell.com/en-us/'
                }
            ]
        },
        user: {
            email: 'e.rodriguezd@pucp.edu.pe',
            password: '$2a$10$D15I1B7zhRz2hOEZfMe0x.B97Xfa3Q2O0KOyaab9vKeZXd3RKCpUO'
        },
        userId: '625cfbad488b5deb9cbed36f'
    };

    describe('Save', function () {
        let stubbedService;
        let mReq, mRes;

        beforeEach(function () {
            mRes = { status: sinon.stub().returnsThis(), send: sinon.stub() };
        });

        afterEach(function () {
            stubbedService.restore();
        });

        it('Should return created Fav List', async () => {
            let favListCreated = {
                _id: '625cfbac488b5deb9cbed369',
                ...req.body,
                user: req.user,
            }

            stubbedService = sinon.stub(Service, 'saveList').resolves(favListCreated);

            mReq = { body: req.body, user: req.userId };

            await Controller.createList(mReq, mRes);

            sinon.assert.calledWith(mRes.status, 200);
            sinon.assert.calledWith(mRes.send, {
                message: 'New favorite\'s list created',
                data: { ...favListCreated, user: req.user }
            });
        });

        it('Should throw a Bad Request Error', async () => {
            stubbedService = sinon.stub(Service, 'saveList').throws(new Error('Name parameter is missing'));

            mReq = { body: req.body, user: req.userId };
            
            await Controller.createList(mReq, mRes);
            sinon.assert.calledWith(mRes.status, 400);
            sinon.assert.calledWith(mRes.send, {error: 'Name parameter is missing'});
        });
    });
});