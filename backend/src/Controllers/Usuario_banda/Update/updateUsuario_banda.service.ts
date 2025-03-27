import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BandaDB } from 'src/Modelos/Banda/bandaDB';
import { UserDB } from 'src/Modelos/Usuario/userDB';
import { Usuario_bandaDB } from 'src/Modelos/Usuario_banda/usuario_bandaDB';
import { Repository } from 'typeorm';
import { GetUsuario_bandaService } from '../Get/getUsuario_banda.service';

@Injectable()
export class UpdateUsuario_bandaService {
  constructor(
    @InjectRepository(Usuario_bandaDB)
    private readonly usuario_bandaRepository: Repository<Usuario_bandaDB>,
    @InjectRepository(UserDB)
    private readonly userRepository: Repository<UserDB>,
    @InjectRepository(BandaDB)
    private readonly bandaRepository: Repository<BandaDB>,
    private readonly getUsuario_bandaService: GetUsuario_bandaService,
  ) {}

  async updateUsuario_banda(
    usuario_bandaId: number,
    usuario?: Partial<UserDB>,
    banda?: Partial<BandaDB>,
  ): Promise<Usuario_bandaDB> {
    try {
      //OBTENER LA RELACIÓN A ACTUALIZAR
      const usuario_bandaToUpdate =
        await this.getUsuario_bandaService.getUsuario_banda(usuario_bandaId);
      if (!usuario_bandaToUpdate) {
        throw new NotFoundException('Usuario_banda no encontrado');
      }

      //OBTENGO EL USUARIO NUEVO
      if (usuario) {
        const newUsuario = await this.userRepository.findOne({
          where: { usuario_id: usuario.usuario_id },
        });
        usuario_bandaToUpdate.usuario = newUsuario;
      }
      //OBTENGO LA BANDA NUEVA
      if (banda) {
        const newBanda = await this.bandaRepository.findOne({
          where: { banda_id: banda.banda_id },
        });
        usuario_bandaToUpdate.banda = newBanda;
      }
      return this.usuario_bandaRepository.save(usuario_bandaToUpdate);
    } catch (error) {
      console.error('Error al actualizar el usuario_banda:', error);
      throw new Error('Error al actualizar el usuario_banda');
    }
  }
}
