import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Administradores } from './AdministradoresDb';
import { AprendizDb } from './AprendizDb';
import { EjerciciosDb } from './EjerciciosDb';
import { HistorialInventarioDb } from './HistorialInventarioDb';
import { InventarioDb } from './InventarioDb';
import { MusculosDb } from './MusculosDb';
import { RutinasDb } from './RutinasDb';

export class FakeDbService implements InMemoryDbService {

    createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
        return {
            'administradores': Administradores.admins,
            'aprendices': AprendizDb.aprendices,
            'inventario': InventarioDb.inventario,
            'musculos': MusculosDb.musculos,
            'historialInventario': HistorialInventarioDb.historialInventario,
            'rutinas': RutinasDb.rutinas,
            'ejercicios': EjerciciosDb.ejercicios
        }
    }
}