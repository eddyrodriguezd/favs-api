const sinon = require('sinon');
const Service = require('../../services/FavListService');
const FavList = require('../../models/FavList');
const assert = require('assert');

describe('Fav List Service', function () {

    describe('Save', function () {
        let favList = {
            name: 'MyList',
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
        };

        const userId = '625cfbad488b5deb9cbed36f';
        
        it('Should save a Fav List', async () => {
            const favListCreated = {
                ...favList,
                _id: '625cfbb1488b5deb9cbed384'
            }
            
            sinon.stub(FavList.prototype, 'save').resolves(favListCreated);

            const result = await Service.saveList(favList, userId);

            assert.equal(result, favListCreated);
        });

        it('Should return an Error: Missing name', async () => {
            await assert.rejects(
                async () => {
                    await Service.saveList(
                        {...favList, name: undefined},
                        userId
                    );
                },
                {
                    name: 'Error',
                    message: 'Name parameter is missing'
                }
            );
        });

        it('Should return an Error: Favs length equals 0', async () => {
            await assert.rejects(
                async () => {
                    await Service.saveList(
                        {...favList, favs: []},
                        userId
                    );
                },
                {
                    name: 'Error',
                    message: 'Favs array must have at least one element'
                }
            );
        });

    });
});