import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetBandaService } from 'src/Controllers/Banda/Get/getBanda.service';
import { GetUserService } from 'src/Controllers/Usuario/Get/getUser.service';
import { Usuario_bandaDB } from 'src/Modelos/Usuario_banda/usuario_bandaDB';
import { Repository } from 'typeorm';
import { RegisterUsuario_bandaDto } from './registerUsuario_banda.dto';
import { Usuario_banda } from 'src/Modelos/Usuario_banda/usuario_banda';

@Injectable()
export class RegisterUsuarioBandaService {
  constructor(
    @InjectRepository(Usuario_bandaDB)
    private readonly usuarioBandaRepository: Repository<Usuario_bandaDB>,
    private readonly getUserService: GetUserService,
    private readonly getBandaService: GetBandaService,
  ) {}

  async createUsuarioBanda(data: RegisterUsuario_bandaDto) {
    try {
      const { usuario_id, banda_id, fecha_alta, es_musico, es_directivo } =
        data;

      // Contar cuántas bandas tiene el usuario
      const usuarioBandasCount = await this.usuarioBandaRepository.count({
        where: { usuario: { usuario_id } },
      });

      if (usuarioBandasCount >= 2) {
        throw new BadRequestException('El usuario ya está en dos bandas.');
      }

      // Obtener objetos usuario y banda completos
      const user = await this.getUserService.getUser(usuario_id);
      console.log(user);
      const banda = await this.getBandaService.getBanda(banda_id);
      console.log(banda);

      const usuarioBanda = new Usuario_banda(
        0,
        user,
        banda,
        fecha_alta,
        es_musico,
        es_directivo,
      );
      console.log(usuarioBanda);

      const usuarioBandaDB: Partial<Usuario_bandaDB> = {
        usuario: usuarioBanda.getUsuario_id(),
        banda: usuarioBanda.getBanda_id(),
        fecha_alta: usuarioBanda.getFecha_alta(),
        es_musico: usuarioBanda.getEs_musico(),
        es_directivo: usuarioBanda.getEs_directivo(),
      };

      console.table(usuarioBandaDB);

      await this.usuarioBandaRepository.insert(usuarioBandaDB);
      return usuarioBandaDB;
    } catch (error) {
      if (error instanceof BadRequestException) {
        console.error('El usuario ya está en 2 bandas');
        throw new BadRequestException('El usuario ya está en 2 bandas');
      }
      console.error('Error al crear el usuario en la banda:', error);
      throw new Error('No se pudo crear el usuario en la banda');
    }
  }
}
