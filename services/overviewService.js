'use strict';

exports.overviewService = {
  async queryToday(ctx) {
    async function query() {
      try {
        console.log('2');
        var client = await dbpool.connect();
        console.log('3');
        try {
          console.log('4');
          //参数取法：ctx.params.参数名
          var res = await client.query('SELECT * from users', []);
          console.log('5');
          ctx.body = res.rows;
        } catch (err) {
          console.error('error running query', err);
        }
        client.release();
      } catch (err) {
        console.error('error fetching client from pool', err);
      }
    }
    console.log('1');
    await query();
    console.log('6');
  }
};