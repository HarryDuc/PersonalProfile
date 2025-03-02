import request from 'request';
const url = '../../public/files/CALE_LACSON_2022.pdf';

const handler = (_, res) => { request.get(url).pipe(res); }
export default handler;