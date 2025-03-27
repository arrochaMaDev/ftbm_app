import {
  Controller,
  Put,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { UpdateUsuario_bandaService } from './updateUsuario_banda.service';
import { BandaDB } from 'src/Modelos/Banda/bandaDB';
import { UserDB } from 'src/Modelos/Usuario/userDB';

@Controller('usuario_banda')
export class UpdateUsuarioBandaController {
  constructor(
    private readonly updateUsuario_bandaService: UpdateUsuario_bandaService,
  ) {}

  @Put(':id')
  async updateUsuario_banda(
    @Param('id') id: number,
    @Body()
    updateData: {
      newUsuario?: Partial<UserDB>;
      newBanda?: Partial<BandaDB>;
    },
  ) {
    try {
      const updatedUser_banda =
        await this.updateUsuario_bandaService.updateUsuario_banda(
          id,
          updateData.newUsuario,
          updateData.newBanda,
        );

      if (!updatedUser_banda) {
        throw new NotFoundException('Usuario_banda no encontrado');
      }
      //CONTROLAR LOS DATOS MEDIANTE UN DTO
      const updatedUser_bandaDTO = {
        id: updatedUser_banda.id,
        usuario: {
          nombre: updatedUser_banda.usuario.nombre,
          apellidos: updatedUser_banda.usuario.apellidos,
          dni: updatedUser_banda.usuario.dni,
          numero_federado: updatedUser_banda.usuario.numero_federado,
        },
        banda: {
          nombre: updatedUser_banda.banda.nombre,
          cif: updatedUser_banda.banda.cif,
        },
      };
      return {
        message: 'Usuario_banda actualizado correctamente',
        updatedUser_bandaDTO,
      };
    } catch (error) {
      console.error('Error al actualizar el usuario_banda:', error);
      throw new Error('Error al actualizar el usuario_banda');
    }
  }
}
