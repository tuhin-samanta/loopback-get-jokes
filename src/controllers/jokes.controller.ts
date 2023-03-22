import {inject} from '@loopback/context';
import {get} from '@loopback/rest';
import {
  IcanhazdadjokeService,
  JokesType,
} from '../services/icanhazdadjoke.service';
export class JokesController {
  constructor(
    @inject('services.Icanhazdadjoke')
    private icanhazdadjokeService: IcanhazdadjokeService,
  ) {}

  @get('/jokes/in_detail')
  getall(): Promise<JokesType> {
    return this.icanhazdadjokeService.getSingle();
  }

  @get('/jokes/text')
  async get(): Promise<String> {
    const res = await this.icanhazdadjokeService.getSingle();
    return res.joke;
  }
}
