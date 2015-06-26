describe('peUser', function(){
   beforeEach(module('app'));

    describe('isAdmin', function(){
        it('should return false if the roles array does not have an admin entry', inject(function(peUser){
            var user = new peUser();
            user.roles = ['not admin'];
            expect(user.isAdmin()).to.be.falsey;
        }));

        it('should return true if the roles array has an admin entry', inject(function(peUser){
            var user = new peUser();
            user.roles = ['admin'];
            expect(user.isAdmin()).to.be.true;
        }));
    })
});
