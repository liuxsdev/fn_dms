const should = require('should');
const { to_decimal, to_dm, to_dms } = require('../');


describe('DMS测试', function () {
    //120°16′19.17962″  <->  120.271994339
    it('度->度分秒格式', function () {
        let a = to_dms(120.271994339);
        a.should.equal("120°16′19.17962″")
    })

    it('度->度分格式', function () {
        let a = to_dm(120.271994339);
        a.should.equal("120°16.31966′")
    })

    it('度分秒格式(DD°MM′SS.SSSSS″)->度数', function () {
        let a = to_decimal("120°16′19.17962″");
        a.should.equal(120.271994339)
    })

    it('度分秒格式(DD:MM:SS.SSSSS)->度数', function () {
        let a = to_decimal("120:16:19.17962″");
        a.should.equal(120.271994339)
    })

    it('度分秒格式(乱 DD°MM:SS.SSSSS″)->度数', function () {
        let a = to_decimal("120:16:19.17962″");
        a.should.equal(120.271994339)
    })

})