import { IStupidRequest, IStupidResponse } from './Stupid.interface'
class StupidService {
    public fetchData(params: IStupidRequest | null): Promise<IStupidResponse> {
        return new Promise(resolve => {
            resolve({
                body: {
                    value: '666',
                    value2: ''
                },
                code: 200,
                message: '牛批',
            })
        })
    }
}
const stupidService = new StupidService()
export default stupidService
